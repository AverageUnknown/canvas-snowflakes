import SimpleStar from "./classes/simple-star.js";
import TwelveBranchStar from "./classes/twelve-branch-star.js";
import StellarDentrite from "./classes/stellar-dendrite.js";
import SectoredPlates from "./classes/sectored-plates.js";

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
context.clearRect(0,0,canvas.width,canvas.height);
context.lineWidth = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = '#BCBCFF';

const snowflakes = []

for (let i = 0; i < 25; i++){
    snowflakes.push(new StellarDentrite(Math.random()*canvas.width,Math.random()*canvas.height,canvas))
}

for (let i = 0; i < 25; i++){
    snowflakes.push(new SimpleStar(Math.random()*canvas.width,Math.random()*canvas.height,canvas))
}

for (let i = 0; i < 25; i++){
    snowflakes.push(new TwelveBranchStar(Math.random()*canvas.width,Math.random()*canvas.height,canvas))
}

for (let i = 0; i < 25; i++){
    snowflakes.push(new SectoredPlates(Math.random()*canvas.width,Math.random()*canvas.height,canvas))
}

function drawSnowflakes(){
    context.clearRect(0,0,canvas.width,canvas.height);
    snowflakes.forEach(function(element){
        element.draw();
    });
    window.requestAnimationFrame(drawSnowflakes)
}

drawSnowflakes()

document.body.addEventListener("resize",()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.strokeStyle = '#BCBCFF';
});
