import Snowflake from "./snowflake.js";
export default class TwelveBranchStar extends Snowflake {
    constructor(x,y,canvas){
        super(x,y,canvas);
    }

    draw(){
        super.draw(()=>{
            for (let i = 0; i < 12; i++){
                this.context.beginPath();
                this.context.moveTo(0,0);
                this.context.lineTo(6*this.scale,0);
                this.context.stroke();
                this.context.rotate(Math.PI / 6);
                this.context.closePath();
            }
        });
    }
}
