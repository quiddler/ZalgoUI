import { DeltaMutator } from "./delta-mutator";
import { Delta } from "./delta";
import { Step } from "./step";

export class ResAnimator {

    private deltaFuncion: Function = DeltaMutator.makeEaseInOut(Delta.quadratic);
    private duration: number = 1000;

    public scrollToTop(callback: Function): void {

        let delay: number = 1;
        let stepFunction: Function = Step.scrollToTop;
        let currentScrollPosition: number = window.scrollY;
        let finalScrollPosition: number = 0;

        if (currentScrollPosition === finalScrollPosition) return callback();

        this.animate(this.deltaFuncion, stepFunction, null, currentScrollPosition, finalScrollPosition, this.duration, delay, callback);
    }

    public scrollToPosition(position: number, callback: Function): void {

        if (!position || position < 0) position = 0;

        let delay: number = 400;
        let stepFunction: Function = Step.scrollToPosition;
        let currentScrollPosition: number = window.scrollY;
        let finalScrollPosition: number = position;

        if (currentScrollPosition === finalScrollPosition) return callback();

        this.animate(this.deltaFuncion, stepFunction, null, currentScrollPosition, finalScrollPosition, this.duration, delay, callback);
    }

    private animate(delta: Function, step: Function, element: Element, from: number,
                    to: number, duration: number, delay: number, callback: Function): void {

        this.startAnimation({
            delay: delay || 1000,
            duration: duration || 1000,
            delta: delta,
            step: step,
            element: element,
            from: from,
            to: to,
            callback: callback
        });
    }

    private startAnimation(opts: any): void {

        var start: number = new Date().getTime() + opts.delay;

        setTimeout(() => {

            var id: NodeJS.Timer = setInterval(() => {

                let timePassed: number = new Date().getTime() - start;
                let progress: number = timePassed / opts.duration;
                if (progress > 1) progress = 1;
                let delta = opts.delta(progress);

                opts.step(opts.element, opts.from, opts.to, delta);

                if (progress === 1) {
                    clearInterval(id);
                    opts.callback();
                }

            }, 10); // 100 fps
        }, opts.delay || 10);
    }
}