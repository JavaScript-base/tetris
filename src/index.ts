import my from './mymodule';
import { Square } from './core/Square'
import { IViewer } from './core/types';

class SquareConsoleViewer implements IViewer {
    constructor(private square: Square) {

    }
    show(): void {
        console.log(this.square.point, this.square.color);
    }
    remove(): void {
        throw new Error('Method not implemented.');
    }

}

const square = new Square({
    x: 1,
    y: 2
}, 'red')

square.viewer = new SquareConsoleViewer(square);

square.point = {
    x: 5,
    y: 6
}