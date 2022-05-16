import { Square } from "./core/Square";
import { SquareViewer } from "./core/viewer/SquareViewer";
import $ from 'jquery'

const square = new Square({
    x: 1, y: 1
}, 'red');

square.viewer = new SquareViewer(square, $("#root"));

square.viewer.show();

$("#btnDown").click(() => {
    square.point = {
        x: square.point.x,
        y: square.point.y + 1
    }
})

$("#btnRight").click(() => {
    square.point = {
        x: square.point.x + 1,
        y: square.point.y
    }
})

$("#btnRemove").click(() => {
    if(square.viewer) {
        square.viewer.remove();
    }
})

$("#btnShow").click(() => {
    square.viewer = new SquareViewer(square, $("#root"));
})
