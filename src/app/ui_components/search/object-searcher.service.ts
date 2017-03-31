import { Injectable }  from "@angular/core";
import { UniqueSet }   from "../../containers/unique-set";
import { SearchModel } from "./search-model";

@Injectable()
export class ObjectSearcher {

    private static singleSpace: string = " ";
    private static whiteSpaces: RegExp = /\s\s+/g;

    constructor() { }

    public search(text: string, objs: any[]): any[] {

        let possibilities: UniqueSet<number>[] = new Array<UniqueSet<number>>();
        let words: string[] = this.extractWordsFromSearchText(text);
        let searchModels: SearchModel[] = this.generateObjectSearchModels(objs);
        let count: number = 0;
        
        for (let word of words) {
            let us: UniqueSet<number> = new UniqueSet<number>();
            for (let obj of searchModels) {
                if (obj.value.includes(word)) {
                    us.add(obj.index);
                }
            }
            count++;      
            if (us.size > 0 || count === (words.length - 1)) {
                possibilities.push(us);
            }
        }

        // intersect all sets
        let resultSet: UniqueSet<number> = possibilities.reduce((preVal, curVal) => {
            return preVal.intersection(curVal);
        });

        return this.buildFilteredArray(resultSet, objs);
    }

    private buildFilteredArray(resultSet: UniqueSet<number>, objs: any[]): any[] {
        let indexes = resultSet.toArray();
        let result: any[] = new Array<any>();
        for (let i of indexes) {
            result.push(objs[i]);
        }
        return result;
    }

    // search applies ONLY to members of type: Number, Date, Boolean & String
    private generateObjectSearchModels(objs: any[]): SearchModel[] {
        return objs.map((obj, idx, arr) => {
            return new SearchModel(this.getStringRepresentation(obj, idx, arr), idx);
        });
    }

    private getStringRepresentation(obj: any, index: number, container: any[]): string {
        let result: string = "";
        for (let key in obj) {
            if (typeof obj[key] === "number") {
                result += obj[key].toString();
            } else if (typeof obj[key] === "string") {
                result += obj[key];
            } else if (obj[key] instanceof Date) {
                result += this.generatePossibleDateStrings(obj[key]);
            } else if (typeof obj[key] === "boolean") {
                result += this.generatePossibleBooleanStrings(obj[key]);
            }
            result += (index === (container.length - 1)) ? "" : " ";
        }
        return result.toLowerCase();
    }

    // toISOString results in, e.g., "2011-10-05T14:48:00.000Z"
    // thus, we search four likely permutations: "2011-10-05", "2011/10/05", "10/05/2011" and "10-05-2011"
    private generatePossibleDateStrings(date: Date): string {
        let isoPieces: string[] = date.toISOString().split("T")[0].split("-");
        let v1: string = isoPieces[0] + "-" + isoPieces[1] + "-" + isoPieces[2];
        let v2: string = isoPieces[0] + "/" + isoPieces[1] + "/" + isoPieces[2];
        let v3: string = isoPieces[1] + "-" + isoPieces[2] + "-" + isoPieces[0];
        let v4: string = isoPieces[1] + "/" + isoPieces[2] + "/" + isoPieces[0];
        return v1 + " " + v2 + " " + v3 + " " + v4;
    }

    private generatePossibleBooleanStrings(bool: boolean): string {
        if (bool === true) {
            return "true yes";
        } else {
            return "false no";
        }
    }
    
    private extractWordsFromSearchText(text: string): string[] {
        return this.normalizeText(text).split(ObjectSearcher.singleSpace);
    }

    // converts all white space to a single space, trims and then converts to lower case
    private normalizeText(text: string): string {
        return text.replace(ObjectSearcher.whiteSpaces, ObjectSearcher.singleSpace).trim().toLowerCase();
    }
}