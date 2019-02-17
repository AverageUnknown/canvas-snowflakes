export default class Snowflake {
    constructor(x,y,canvas){
        this.x = x;
        this.y = y;
        this.xv = 0;
        this.yv = 0;
        this.t = 500;
        this.r = 0;
        this.rv = 0;
        this.scale = Math.random() + .75;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    static getRandomType(){
        return Math.floor(Math.random()*6);
    }

    draw(trace){
        this.calcPos();
        this.context.save()
        this.context.scale(this.scale,this.scale);
        this.context.translate(this.x,this.y);
        this.context.rotate(this.r);

        trace();

        this.context.restore();
    }

    calcPos(){
            this.xv = Math.max(Math.min(Math.random()/2-.25 + this.xv,1),-1)
            this.x = Math.max(Math.min(this.x + this.xv,this.canvas.width),0)
            if (this.x == 0 || this.x == this.canvas.width){
                this.xv = -this.xv;
            }
            this.yv = Math.max(Math.min(Math.random()/5-.1 + this.yv,1.25),.375)
            this.y = this.y + this.yv
            if (this.y > this.canvas.height){
                this.y = 0;
            }
            this.rv = Math.max(Math.min((Math.random()*.0025-.00125)*Math.PI+this.rv,.025*Math.PI),-.025*Math.PI);
            this.r = this.r + this.rv;
    }
}
