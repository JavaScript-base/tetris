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