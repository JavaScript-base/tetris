import { SquareGroup } from "./SquareGroup";

export interface IPoint {
    readonly x: number,
    readonly y: number,
}

/**
 * show 显示
 * remove 移除显示
 */
export interface IViewer {
    show(): void;
    remove(): void;
}

export type Shape = IPoint[];

export enum MoveDirection {
    left,
    right,
    down
}

export enum GameStatus {
    init,
    playing,
    pause,
    over
}

export interface GameViewer {
    showNext(teris: SquareGroup): void;
    switch(teris: SquareGroup): void;
}