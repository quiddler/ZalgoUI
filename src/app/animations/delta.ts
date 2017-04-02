export class Delta {

    public static linear(progress: number): number {
        return progress;
    }

    public static quadratic(progress: number): number {
        return Math.pow(progress, 10);
    }

    public static cyclic(progress: number): number {
        return 1 - Math.sin(Math.acos(progress));
    }

    public static bounce(progress: number): number {
        for (let a: number = 0, b: number = 1; 1; a += b, b /= 2) {
            if (progress >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
            }
        }
    }

    public static elastic(progress: number): number {
        let x = 1.5;
        return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
    }
}