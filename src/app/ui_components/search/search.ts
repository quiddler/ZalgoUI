import { Component }           from "@angular/core";
import { Router }              from "@angular/router";
import { Animator }            from "../animations/router.animation";
import { DoorService }         from "../door/door.service";
import { Door }                from "../door/door";
import { DoorSearchViewModel } from "../door/door-search-view-model";
import { ResBus }              from "../bus/bus.service";
import { ObjectSearcher }      from "./object-searcher.service";

var animator = new Animator();

@Component({
    moduleId: module.id,
    templateUrl: 'search.component.html',
    animations: [animator.slideLeft()],
    host: { '[@routerTransition]': '' }
})

export class SearchComponent {

    public doorSearchDependencyStatus: string = "loading";
    public doorListDependencyStatus: string = "success";

    public doors: Door[] = new Array<Door>();
    public doorsCopy: Door[] = new Array<Door>();

    public doorSearchViewModel: DoorSearchViewModel = new DoorSearchViewModel();

    public buildingNames: string[] = new Array<string>();
    public floorNumbers: string[] = new Array<string>();
    public hallNameIndex: number = -1;
    public floorNumberIndex: number = -1;
    public selectedHallName: string = "";
    public selectedFloorName: string = "";

    public searchText: string = "";

    private notSelectedOption: string = "----- Select -----";
    private basementOption: string = "Basement";

    constructor(private doorService: DoorService, private bus: ResBus, private router: Router, private objSearcher: ObjectSearcher) { }

    ngOnInit(): void {

        this.doorService.getBuildingNames()
            .then((names: string[]) => {
                this.buildingNames = names;
                this.buildingNames.unshift(this.notSelectedOption);
                this.doorSearchDependencyStatus = "success";
                this.emitDone();
            })
            .catch((err) => {
                this.doorSearchDependencyStatus = "error";
                console.log(err.message || err);
            });
    }

    onHallChanged(event: any) {
        this.selectedHallName = event.target.value;
        if (this.selectedHallName === this.notSelectedOption) {
            this.doors = new Array<Door>();
        }
        this.hallNameIndex = this.buildingNames.indexOf(this.selectedHallName);
        this.doorSearchViewModel.Building = this.selectedHallName;
        this.floorNumbers = new Array<string>();
        this.getDoorsForHall();
    }

    onFloorChanged(event: any) {
        this.selectedFloorName = event.target.value;
        this.floorNumberIndex = this.buildingNames.indexOf(this.selectedFloorName);
        this.filter();

    }

    onSearchTextChanged(event: any): void {
        this.searchText = event.target.value;
        this.filter();
    }

    filter(): void {
        let filteredDoors: Door[] = this.filterDoorsBySearch(this.doorsCopy, this.searchText);

        if (this.selectedFloorName !== this.notSelectedOption) {
            filteredDoors = this.filterDoorsByFloor(filteredDoors);
        }

        this.doors = filteredDoors;
    }

    getDoorsForHall(): void {
        this.doorListDependencyStatus = "loading";
        this.doorService.getDoorsByBuildingName(this.doorSearchViewModel)
            .then((doors: Door[]) => {
                this.doors = doors;
                this.doorsCopy = JSON.parse(JSON.stringify(doors));
                this.setFloorNumbers();
                this.doorListDependencyStatus = "success";
            })
            .catch((err) => {
                this.doorListDependencyStatus = "error";
                console.log(err.message || err);
            });
    }

    setFloorNumbers(): void {

        let floors: string[] = [];

        if (this.selectedHallName !== this.notSelectedOption) {

            this.doors.forEach(door => {
                let floorNumber = door.DoorNumber.toString().substring(0, door.DoorNumber.toString().length - 2);
                if (floors.indexOf(floorNumber) === -1) {
                    floors.push(floorNumber);
                }
            });

            floors = floors.sort((a, b) => {
                let c = Number(a);
                let d = Number(b);
                if (c > d) {
                    return 1;
                }
                if (c < d) {
                    return -1;
                }
                return 0;
            });

            if (floors.indexOf("0") === 0) {
                floors[floors.indexOf("0")] = this.basementOption;
            }

            if (floors.indexOf("") !== -1) {
                floors[floors.indexOf("")] = this.basementOption;
            }
            
            floors.unshift(this.notSelectedOption);
        }

        this.floorNumbers = floors;
    }

    filterDoorsByFloor(doors: Door[]): Door[] {
        return doors.filter(d => {
            if (this.selectedFloorName === this.basementOption) {
                return (d.DoorNumber / 100) < 1;
            } else if (this.selectedFloorName === this.notSelectedOption || this.selectedFloorName === "") {
                return true;
            } else {
                return d.DoorNumber.toString().startsWith(this.selectedFloorName) && 
                       d.DoorNumber.toString().length - 2 === this.selectedFloorName.length;
            }
        });
    }

    filterDoorsBySearch(doors: Door[], searchText: string): Door[] {

        let filteredDoors: Door[] = this.objSearcher.search(searchText, doors) as Door[];

        return filteredDoors;
    }

    sortDoorsByDoorAndSuffix(doors: Door[]): Door[] {
        return doors.sort((a, b) => {
            if (a.DoorNumber > b.DoorNumber) {
                return 1;
            }  else if (a.DoorNumber < b.DoorNumber) {
                return -1;
            } else {
                if (a.Suffix > b.Suffix) {
                    return 1;
                } else if (a.Suffix < b.Suffix) {
                    return -1;
                }
            }
            return 0;
        });
    }

    sortDoorsById(doors: Door[]): Door[] {
        return doors.sort((a, b) => {
            if (a.Id > b.Id) return  1;
            if (a.Id < b.Id) return -1;
            return 0;
        });
    }

    sortDoorsByHallName(doors: Door[]): Door[] {
        return doors.sort((a, b) => {
            if (a.HallName > b.HallName) return  1;
            if (a.HallName < b.HallName) return -1;
            return 0;
        });
    }

    sortDoorsByDoorNumber(doors: Door[]): Door[] {
        return doors.sort((a, b) => {
            if (a.DoorNumber > b.DoorNumber) return  1;
            if (a.DoorNumber < b.DoorNumber) return -1;
            return 0;
        });
    }

    adaText(isAda: boolean): string {
        return isAda ? "yes" : "no";
    }

    navigateToDoor(door: Door): void {
        window.scrollTo(0, 0);
        this.router.navigate(['/door', door.Id]);
    }

    emitDone(): void {
        this.bus.emit("dependencies-resolved", null);
    }
}