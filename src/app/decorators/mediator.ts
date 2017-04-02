import { Subscriber } from "../bus/subscriber";

export function Mediator() {

    return function (target: any) {

        Object.defineProperty(target.prototype, "topics", {
            enumerable: true,
            configurable: false,
            writable: true,
            value: {}
        });

        Object.defineProperty(target.prototype, "guid", {
            enumerable: true,
            configurable: false,
            writable: true,
            value: -1
        });

        Object.defineProperty(target.prototype, "subscribe", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: function subscribe(topic: string): number {
                if (!target.prototype.topics[topic]) {
                    target.prototype.topics[topic] = new Array<Subscriber>();
                }

                return ++target.prototype.guid;
            }
        });

        Object.defineProperty(target.prototype, "once", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: function once(topic: string, task: Function): number {

                var token = target.prototype.subscribe(topic);
                target.prototype.topics[topic].push(new Subscriber(task, token, true));
                return token;
            }
        });

        Object.defineProperty(target.prototype, "on", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: function on (topic: string, task: Function): number {

                var token = target.prototype.subscribe(topic);
                target.prototype.topics[topic].push(new Subscriber(task, token, false));
                return token;
            }
        });

        Object.defineProperty(target.prototype, "off", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: function off (token) {
                for (let topic in target.prototype.topics) {
                    if (target.prototype.topics[topic]) {
                        for (let i = 0, j = target.prototype.topics[topic].length; i < j; i++) {
                            if (target.prototype.topics[topic][i].token === token) {
                                target.prototype.topics[topic].splice(i, 1);
                                return token;
                            }
                        }
                    }
                }
                return this;
            }
        });

        Object.defineProperty(target.prototype, "emit", {
            enumerable: true,
            configurable: false,
            writable: false,
            value: function emit (topic: string, ...args: any[]): any {

                if (!target.prototype.topics[topic]) {
                    return false;
                }

                let subscribersToDelete: Subscriber[] = new Array<Subscriber>();

                let subscribers = target.prototype.topics[topic];
                let numberOfSubscribers = subscribers ? subscribers.length : 0;

                while (numberOfSubscribers--) {

                    let subscriber: Subscriber = subscribers[numberOfSubscribers];

                    subscriber.task( ...args );

                    if (subscriber.runsOnce) {
                        subscribersToDelete.push(subscriber);
                    }
                }

                subscribersToDelete.forEach(s => target.prototype.off(s.token));
            }
        });
    }
}

export interface IMediator {
    emit(topic: string, payload: any): any;
    off(token: number): any;
    once(topic: string, task: Function): any;
    on(topic: string, task: Function): any;
    subscribe(topic: string): any;
}