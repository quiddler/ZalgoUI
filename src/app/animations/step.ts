export class Step {

    public static scrollToPosition(element: Element, from: number, to: number, delta: number): void {
        window.scrollTo(0, Math.round(to * delta));
    }

    public static scrollToTop(element: Element, from: number, to: number, delta: number): void {
        let distanceToTravel = from - to;
        window.scrollTo(0, from - Math.round(distanceToTravel * delta));
    }
}