export function Singleton() {

    return function (target: any) {

        Object.defineProperty(target.prototype, "instance", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: target.prototype
        });

        Object.defineProperty(target.prototype, "getInstance", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: function (): any { return target.prototype.instance; }
        });

    }
}

export interface ISingleton {
    getInstance():any;
}