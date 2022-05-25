import { Square } from "./Square";
import { IPoint, Shape } from "./types";

export class SquareGroup {

    public get squares() {
        return this._squares;
    }

    public get centerPoint(): IPoint {
        return this._centerPoint;
    }

    public set centerPoint(v: IPoint) {
        this._centerPoint = v;
        this.setSquarePoints();
    }

    private setSquarePoints() {
        this._shape.forEach((p, i) => {
            this._squares[i].point = {
                x: this._centerPoint.x + p.x,
                y: this._centerPoint.y + p.y
            }
        })
    }


    public get shape() {
        return this._shape
    }

    private readonly _squares: Square[]
    constructor(private _shape: Shape,
        private _centerPoint: IPoint,
        private _color: string){
        this._squares = _shape.map((item) => new Square(
            {x: item.x + _centerPoint.x, y: item.y + _centerPoint.y}, _color)
        );
    }
    /**
     * 旋转方向是顺时针还是逆时针
     */
    protected isClock = true;

    afterRotateShape(): Shape {
        if(this.isClock) {
            return this._shape.map(p => {
                return {
                    x: -p.y,
                    y: p.x
                }
            })
        } else {
            return this._shape.map(p => {
                return {
                    x: p.y,
                    y: -p.x
                }
            })
        }
    }

    public rotate() {
        const newShap = this.afterRotateShape();
        this._shape = newShap;
        this.setSquarePoints();
    }
}
