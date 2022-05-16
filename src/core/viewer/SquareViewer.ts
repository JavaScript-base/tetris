import { Square } from "../Square";
import { IViewer } from "../types";
import $ from 'jquery';
import PageConfig from "./PageConfig";

export class SquareViewer implements IViewer {

    private dom?: JQuery<HTMLElement>;
    private isRemove?: boolean = false;
    constructor(private square: Square, private container: JQuery<HTMLElement>){
    }

    show(): void {
        if(!this.dom) {
            this.dom = $("<div>").css({
                position: "absolute",
                width: PageConfig.SquareSize.width,
                height: PageConfig.SquareSize.height,
                border: '1px solid #ccc',
                boxSizing: 'border-box'
            }).appendTo(this.container);
        }
        this.dom.css({
            backgroundColor: 'red',
            left: this.square.point.x * PageConfig.SquareSize.width,
            top: this.square.point.y * PageConfig.SquareSize.height
        })
    }
    remove(): void {
        if(this.dom && !this.isRemove) {
            this.dom.remove()
        }
    }
    
}