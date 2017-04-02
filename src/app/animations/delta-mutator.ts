export class DeltaMutator {

    public static makeEaseOut(delta: Function): Function {
        return function (progress: number): number {
            return 1 - delta(1 - progress);
        }
    }

    public static makeEaseInOut(delta: Function): Function {
        return function (progress: number): number {
            if (progress < .5) {
                return delta(2 * progress) / 2;
            }
            else {
                return (2 - delta(2 * (1 - progress))) / 2;
            }
        }
    }
}