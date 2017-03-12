/*
    implements IterableIterator for future use
      i.e., => when tsconfig.json's "target" changes from "es5" to "es6"
            => "for of" syntax will work w/o using toArray()

    - current es5, example:                               - when es6 is targeted, example:

        for (let value of setA.toArray()) {                     for (let value of setA) {
            console.log(value);                                     console.log(value);
        }                                                       }
*/

export class UniqueSet<T> implements Set<T>, IterableIterator<T> {

    private _set: Set<T> = new Set<T>();

    constructor(members?: T[]) {
        this._set = new Set(members);
    }

    get(): Set<T> { return this._set; }
    set(uniqueSet: UniqueSet<T>): void { this._set = uniqueSet.get(); }

    public isSuperset(uniqueSet: UniqueSet<T>): boolean {
        uniqueSet.forEach(value => {
            if (!this._set.has(value)) {
                return false;
            }
        });
        return true;
    }

    public union(uniqueSet: UniqueSet<T>): UniqueSet<T> {
        var union = new UniqueSet<T>(this.toArray());
        uniqueSet.forEach(value => {
            union.add(value);
        });
        return union;
    }

    public intersection(uniqueSet: UniqueSet<T>): UniqueSet<T> {
        var intersection = new UniqueSet<T>();
        uniqueSet.forEach(value => {
            if (this._set.has(value)) {
                intersection.add(value);
            }
        });
        return intersection;
    }

    public difference(uniqueSet: UniqueSet<T>): UniqueSet<T> {
        var difference = new UniqueSet(this.toArray());
        uniqueSet.forEach(value => {
            difference.delete(value);
        });
        return difference;
    }

    public toArray(): T[] {
        return Array.from(this._set);
    }

    // -------------------------------------------------------------------------
    //                                            Set (Interface Implementation)
    get size(): number { return this._set.size; }

    public add(value: T): any { return this._set.add(value); }

    public toJSON(): string { return this._set.toJSON(); }

    public values(): IterableIterator<T> { return this._set.values(); }

    public entries(): IterableIterator<[T, T]> { return this._set.entries(); }

    public keys(): IterableIterator<T> { return this._set.keys(); }

    public clear(): void { return this._set.clear(); }

    public delete(value: T): boolean { return this._set.delete(value); }

    public has(value: T): boolean { return this._set.has(value); }

    public forEach(callbackFn: (value: any, index: any, set: Set<T>) => void, thisArg?: any): any {
        return this._set.forEach(callbackFn, thisArg);
    }

    // -------------------------------------------------------------------------
    //                               IterableIterator (Interface Implementation)
    private _pointer = 0;
    private _components: Array<T> = new Array<T>();

    public next(): IteratorResult<T> {

        if (this._pointer === 0) {
            this._components = this.toArray();
        }

        if (this._pointer < this.size) {
            return {
                done: false,
                value: this._components[this._pointer++]
            }
        } else {
            this._pointer = 0;
            return {
                done: true
            }
        }
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this;
    }
}