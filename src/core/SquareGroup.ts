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
        this._shape.forEach((p, i) => {
            this._squares[i].point = {
                x: this._centerPoint.x + p.x,
                y: this._centerPoint.y + p.y
            }
        })
    }

    private readonly _squares: Square[]
    constructor(private _shape: Shape, private _centerPoint: IPoint, private _color: string){
        this._squares = _shape.map((item) => new Square({x: item.x + _centerPoint.x, y: item.y + _centerPoint.y}, _color));
    }
}
