import { SquareViewer } from "./core/viewer/SquareViewer";
import $ from 'jquery'
import { createTeris } from "./core/Teris";
 import { TerisRules } from "./core/TerisRules";
import { MoveDirection } from "./core/types";

const group = createTeris({x: 2, y: 2})

group.squares.forEach(square => {
    square.viewer = new SquareViewer(square, $("#root"));
});

$("#btnDown").click(() => {
    TerisRules.moveDirectly(group, MoveDirection.down);
})

$("#btnRight").click(() => {
    TerisRules.move(group, MoveDirection.right);
})
$("#btnLeft").click(() => {
    TerisRules.move(group, MoveDirection.left);
})

$("#rotateClock").click(() => {
    group.rotate();
})

$("#btnRemove").click(() => {
    group.squares.forEach(square => {
        if(square.viewer) {
            square.viewer.remove();
        }
    })
})

$("#btnShow").click(() => {
    group.squares.forEach(square => {
        square.viewer = new SquareViewer(square, $("#root"));
    })
})
