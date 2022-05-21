import { SquareGroup } from "./SquareGroup";
import { IPoint, Shape } from "./types";
import { getRandom } from "./util";

export const TShape: Shape = [
    {x: 0, y: -1}, {x: -1, y: 0}, { x: 0,y: 0 }, {x: 0, y: 1}
]

export const LShape: Shape = [
    {x: -2, y: 0},{x: -1, y: 0},{x: 0, y: 0},{x: 0, y: -1},
]

export const LMirrorShape: Shape = [
    {x: -1, y: 0},{x: 1, y: 0},{x: 0, y: 0},{x: 0, y: -1},
]

export const SShape: Shape = [
    {x: 0,y: 0,}, {x: 1,y: 0,}, {x: 0,y: 1,}, {x: -1,y: 1,}, 
]

export const SMirrorShape: Shape = [
    {x: 0,y: 0,}, {x: -1,y: 0,}, {x: 0,y: 1,}, {x: 1,y: 1,}, 
]

export const SquareShape: Shape = [
    {x: 0,y: 0,}, {x: 1,y: 0,}, {x: 0,y: 1,}, {x: 1,y: 1,}
]

export const LineShape: Shape = [
    {x: 0,y: 0,}, {x: 1,y: 0,}, {x: 2,y: 0,}, {x: 3,y: 0}
]

export const shapes = [
    TShape,
    LShape,
    LMirrorShape,
    SShape,
    SMirrorShape,
    SquareShape,
    LineShape
]

export const colors = [
    'red',
    'green',
    'orange',
    'blue',
    '#fff',
    '#f00'
]

export function createTeris(centerPoint: IPoint) {
    let index = getRandom(0, shapes.length);
    const shape = shapes[index];
    index = getRandom(0, colors.length);
    const color = colors[index];
    return new SquareGroup(shape, centerPoint, color);
}