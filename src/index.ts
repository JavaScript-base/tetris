import { Game } from './core/Game';
import { GamePageViewer } from './core/viewer/GamePageViewer';
import $ from 'jquery';

const g = new Game(new GamePageViewer());

$("#rotateClock").click(()=> {
    g.controlRotate();
})
$("#start").click(() => {
    g.start();
})

$("#pause").click(() => {
    g.pause();
})

$("#btnDown").click(() => {
    g.controlDown();
})

$("#btnLeft").click(() => {
    g.controlLeft();
})

$("#btnRight").click(() => {
    g.controlRight();
})