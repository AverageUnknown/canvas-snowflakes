import Snowflake from "./snowflake.js";
export default class StellarDentrite extends Snowflake {
    constructor(x,y,canvas){
        super(x,y,canvas);
    }

    draw(){
        super.draw(()=>{
            for (let i = 0; i < 6; i++){
                this.context.beginPath();
                this.context.moveTo(0,0);
                this.context.lineTo(6,0);
                this.context.moveTo(1,0);
                this.context.lineTo(3,1.25);
                this.context.moveTo(1,0);
                this.context.lineTo(3,-1.25);
                this.context.moveTo(3,0);
                this.context.lineTo(5,1.5);
                this.context.moveTo(3,0);
                this.context.lineTo(5,-1.5)
                this.context.stroke();
                this.context.rotate(Math.PI / 3);
                this.context.closePath();
            }
        });
    }
}
