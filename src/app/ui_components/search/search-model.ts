export class SearchModel {

    public value: string = "";
    public index: number = -1;

    constructor(val: string, idx: number) {
        this.value = val;
        this.index = idx;
    }
}