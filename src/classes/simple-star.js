import Snowflake from "./snowflake.js";
export default class SimpleStar extends Snowflake {
    constructor(x,y,canvas){
        super(x,y,canvas);
    }

    draw(){
        super.draw(()=>{
            for (let i = 0; i < 6; i++){
                this.context.beginPath();
                this.context.moveTo(0,0);
                this.context.lineTo(6*this.scale,0);
                this.context.stroke();
                this.context.rotate(Math.PI / 3);
                this.context.closePath();
            }
        });
    }
}
