import { SquareViewer } from "./core/viewer/SquareViewer";
import $ from 'jquery'
import { createTeris } from "./core/Teris";

const group = createTeris({x: 2, y: 2})

group.squares.forEach(square => {
    square.viewer = new SquareViewer(square, $("#root"));
});

$("#btnDown").click(() => {
    group.centerPoint = {
        x: group.centerPoint.x,
        y: group.centerPoint.y + 1
    }
})

$("#btnRight").click(() => {
    group.centerPoint = {
        x: group.centerPoint.x + 1,
        y: group.centerPoint.y
    }
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
