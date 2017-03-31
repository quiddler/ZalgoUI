import { Mediator,  IMediator }  from "../decorators/mediator";
import { Singleton, ISingleton } from "../decorators/singleton";
import { Injectable }            from "@angular/core";

@Injectable()
@Mediator()
@Singleton()
export class ZalgoBus implements IMediator, ISingleton {

    constructor() {
        return this.getInstance();
    }

    // singleton interface - overridden by singleton decorator
    getInstance():any { }

    // mediator interface - overridden by mediator decorator
    emit(topic: string, payload: any): any { }
    off(token: number): any { }
    once(topic: string, task: Function): any { }
    on(topic: string, task: Function): any { }
    subscribe(topic: string): any { }
}