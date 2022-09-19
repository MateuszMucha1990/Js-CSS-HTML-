import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);


let lastTime = 0;

//images
let imgBall=document.getElementById("img_ball")

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    //platforma
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT) // wazne. kazdy ruch, to nowy element, wiec poprzedni nalezy usunac

    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop) //wywolanie powoduje ruch?
}
requestAnimationFrame(gameLoop)