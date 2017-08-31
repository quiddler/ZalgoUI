export class Point {
	public x: number;
	public y: number;

	constructor(xCoord? , yCoord?) {
		if (xCoord && !yCoord) {			// one arg
			this.x = xCoord;
			this.y = xCoord;
		} else if (xCoord && yCoord) {		// two args
			this.x = xCoord;
			this.y = yCoord;
		} else {							// no args
			this.x = 0;
			this.y = 0;
		}
	}
}