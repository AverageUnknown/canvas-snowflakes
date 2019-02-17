import SimpleStar from "./simple-star.js";
import TwelveBranchStar from "./twelve-branch-star.js";
import StellarDentrite from "./stellar-dendrite.js";
import SectoredPlates from "./sectored-plates.js";

class CanvasSnowflakes extends HTMLElement {
    static get observedAttributes() { return ['width','height','count']; }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name,oldValue,newValue);
        this[name] = newValue;
    }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const container = document.createElement('div');
        container.width = this.width;
        container.height = this.height;

        this.canvas = document.createElement('canvas');
        this.canvas.id = "myCanvas";
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        container.appendChild(this.canvas);

        this.context = this.canvas.getContext('2d');
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.context.lineWidth = 1;
        this.context.strokeStyle = '#BCBCFF';

        this.shadowRoot.appendChild(container);

        this.drawSnowflakes = this.drawSnowflakes.bind(this);

        this.snowflakes = [];
        for (let i = 0; i < this.count; i++){
            let r = Math.random();
            if (r < .25)
                this.snowflakes.push(new StellarDentrite(Math.random()*this.canvas.width,Math.random()*this.canvas.height,this.canvas));
            else if (r < .5)
                this.snowflakes.push(new SimpleStar(Math.random()*this.canvas.width,Math.random()*this.canvas.height,this.canvas));
            else if (r < .75)
                this.snowflakes.push(new TwelveBranchStar(Math.random()*this.canvas.width,Math.random()*this.canvas.height,this.canvas));
            else
                this.snowflakes.push(new SectoredPlates(Math.random()*this.canvas.width,Math.random()*this.canvas.height,this.canvas));
        }

        console.log(this);

        this.drawSnowflakes();
    }

    drawSnowflakes(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.snowflakes.forEach((element) => {
            element.draw();
        });
        window.requestAnimationFrame(this.drawSnowflakes)
    }
}

customElements.define('canvas-snowflakes', CanvasSnowflakes);
