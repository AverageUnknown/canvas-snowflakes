import Snowflake from "./snowflake.js";
export default class SectoredPlates extends Snowflake {
    constructor(x,y,canvas){
        super(x,y,canvas);
    }

    draw(){
        super.draw(()=>{
            for (let i = 0; i < 6; i++){
                this.context.beginPath();
                this.context.moveTo(1.5*this.scale,0);
                this.context.lineTo(4.5*this.scale,0);

                this.context.save();
                this.context.translate(3*this.scale,0);
                this.context.moveTo(1.5*this.scale,0);
                this.context.rotate(-Math.PI/3);
                this.context.lineTo(1.5*this.scale,0);
                this.context.rotate(-Math.PI/3);
                this.context.lineTo(1.5*this.scale,0);
                this.context.rotate(Math.PI/3*2);
                this.context.moveTo(1.5*this.scale,0);
                this.context.rotate(Math.PI/3);
                this.context.lineTo(1.5*this.scale,0);
                this.context.rotate(Math.PI/3);
                this.context.lineTo(1.5*this.scale,0);
                this.context.restore();

                this.context.stroke();
                this.context.rotate(Math.PI / 3);
                this.context.closePath();
            }
        });
    }
}
