export class Subscriber {

    private _runsOnce: boolean = false;
    get runsOnce(): boolean { return this._runsOnce; }
    set runsOnce(ans: boolean) { this._runsOnce = ans; }

    public task: Function;
    public token: number = null;

    constructor(task: Function, token: number, runsOnce: boolean) {
        this.task = task;
        this.token = token;
        this.runsOnce = runsOnce;
    }
}