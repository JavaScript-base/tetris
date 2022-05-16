import { IPoint, IViewer } from './types';
/**
 * Square calss
 */
export class Square {
    // 显示者：完成显示
    private _viewer?: IViewer
    private _point: IPoint
    private _color: string

    public get point() {
        return this._point;
    }

    public get viewer() {
        return this._viewer;
    }

    public set viewer(value) {
        this._viewer = value;
    }

    public set point(val: IPoint) {
        this._point = val;
        this._viewer?.show()
    }

    public get color() {
        return this._color;
    }

    public constructor(_point: IPoint, _color: string) {
        this._point = _point;
        this._color = _color;
    }

}
