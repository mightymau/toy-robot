class Robot {
    constructor() {
        this._direction = null;
        this._xPosition = null;
        this._yPosition = null;
    }
    move() {
        if (this._direction === null)
            return;
        switch (this._direction) {
            case 'NORTH':
                this._yPosition++;
                break;
            case 'SOUTH':
                this._yPosition--;
                break;
            case 'EAST':
                this._xPosition++;
                break;
            case 'WEST':
                this._xPosition--;
                break;
            default:
                break;
        }
        this.checkPosition();
    }
    rotate(rotate) {
        if (this._direction === null)
            return;
        switch (this._direction) {
            case 'NORTH':
                rotate === 'RIGHT' ? this._direction = 'EAST' : this._direction = 'WEST';
                break;
            case 'SOUTH':
                rotate === 'RIGHT' ? this._direction = 'WEST' : this._direction = 'EAST';
                break;
            case 'EAST':
                rotate === 'RIGHT' ? this._direction = 'SOUTH' : this._direction = 'NORTH';
                break;
            case 'WEST':
                rotate === 'RIGHT' ? this._direction = 'NORTH' : this._direction = 'SOUTH';
                break;
            default:
                break;
        }
    }
    place(xPosition, yPosition, direction) {
        switch (direction) {
            case 'NORTH':
            case 'SOUTH':
            case 'EAST':
            case 'WEST':
                break;
            default:
                console.error('Error: Invalid input');
                return false;
        }
        if (Number.isNaN(xPosition) || Number.isNaN(yPosition)) {
            console.error('Error: Invalid Input');
            return false;
        }
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._direction = direction;
        this.checkPosition();
        return true;
    }
    checkPosition() {
        this._yPosition < 0 && (this._yPosition = 0);
        this._xPosition < 0 && (this._xPosition = 0);
        this._yPosition > 5 && (this._yPosition = 5);
        this._xPosition > 5 && (this._xPosition = 5);
    }
    get x() {
        return this._xPosition;
    }
    get y() {
        return this._yPosition;
    }
    get direction() {
        return this._direction;
    }
}
export default Robot;
