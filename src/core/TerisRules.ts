import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { IPoint, MoveDirection as Direction, Shape } from "./types";

function isPoint(obj: any): obj is IPoint {
    return typeof obj.x !== 'undefined';
}

/**
 * 该类中提供了一系列的函数，根据游戏规则判断各种情况
 */
export class TerisRules {
    /**
     * 判断某个形状的方块，是否能够移动到目标位置
     * @param params 
     * @returns 
     */
    static canIMove(shape: Shape, targetPoint: IPoint): boolean {
        // 假设中心点已经移动到目标位置，计算每个小方块的坐标
        const targetSquarePoints: IPoint[] = shape.map(it => {
            return {
                x: it.x + targetPoint.x,
                y: it.y + targetPoint.y
            }
        })
        const result = targetSquarePoints.some(p => {
            // 判断是否超出了边界
            return p.x < 0 || p.x > GameConfig.panelSize.width - 1 ||
                p.y < 0 || p.y > GameConfig.panelSize.height - 1;

        });
        // 边界判断 
        if(result){
            return false;
        }
        return true;
    }
    // 函数重载
    static move(teris: SquareGroup, targetPoint: IPoint): boolean;
    static move(teris: SquareGroup, direction: Direction): boolean;
    static move(teris: SquareGroup, targetPointOrDirection: IPoint | Direction): boolean {
        if(isPoint(targetPointOrDirection)) {
            const targetPoint = targetPointOrDirection;
            if(this.canIMove(teris.shape, targetPoint)) {
                teris.centerPoint = targetPoint;
                return true;
            }
            return false;
        } else {
            let targetPoint;
            if(targetPointOrDirection === Direction.down) {
                targetPoint = {
                    x: teris.centerPoint.x,
                    y: teris.centerPoint.y + 1
                }
            } else if(targetPointOrDirection === Direction.left) {
                targetPoint = {
                    x: teris.centerPoint.x - 1,
                    y: teris.centerPoint.y
                }
            } else {
                targetPoint = {
                    x: teris.centerPoint.x + 1,
                    y: teris.centerPoint.y
                }
            }
            if(this.canIMove(teris.shape, targetPoint)) {
                teris.centerPoint = targetPoint;
                return true;
            }
            return false;
        }
    }

    static moveDirectly(teris: SquareGroup, direction: Direction) {
        while(this.move(teris, direction)){}
    }
}