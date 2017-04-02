import { Injectable } from "@angular/core";
import { Singleton, ISingleton } from "../decorators/singleton";

/*
 *  NOTE:
 *
 *      localStorage ONLY stores string values, hence JSON.*
 */

@Injectable()
@Singleton()
export class ZalgoCache implements ISingleton {

    private static cache: Object = {};

    // Singleton interface adherance - overridden by @Singleton() decorator
    getInstance(): any { }

    constructor() {
        return this.getInstance();  // return the singleton instance
    }

    getCached(key: string): any {
        if (ZalgoCache.cache.hasOwnProperty(key)) {
            return ZalgoCache.cache[key];
        } else if (localStorage.getItem(key) && localStorage.getItem(key).length > 0) {
            return JSON.parse(localStorage.getItem(key))
        }
        return null;
    }

    setCached(key: string, value: any): void {
        ZalgoCache.cache[key] = value;
        localStorage.setItem(key, JSON.stringify(value));
    }

    delCached(key: string): void {
        if (ZalgoCache.cache.hasOwnProperty(key)) {
            delete ZalgoCache.cache[key];
        }
        localStorage.removeItem(key);
    }

    cleanse(): void {
        ZalgoCache.cache = {};
        localStorage.clear();
    }
}