// endless platformer

//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 800;

// load text
LoadStartingText();

function LoadStartingText() {
    let T1 = "Abilities:";
    let T2 = "Wall Jump(gain another jump by hitting canvas)"
    let T3 = "Jump Mid-air by walking off platform - "
    let T4 = "- (travel farther sideways but not jump as high)"
    let T5 = "The sky is falling! climb the falling platforms"
    let T6 = "and survive for as long as you can."
    let T7 = " press any key to start"
   ctx.font = "30px Arial";
   ctx.fillText(T1, 0, 30);
   ctx.font = "30px Arial";
   ctx.fillText(T2, 0, 60);
   ctx.font = "30px Arial";
   ctx.fillText(T3, 0, 90);
   ctx.font = "30px Arial";
   ctx.fillText(T4, 0, 120);
   ctx.font = "30px Arial";
   ctx.fillText(T5, 100, 400);
   ctx.font = "30px Arial";
   ctx.fillText(T6, 150, 430);
   ctx.font = "30px Arial";
   ctx.fillText(T7, 250, 490);
}

//array
let platform = [];

// event listeners and functions
document.addEventListener("keydown", KeyDownHandler);
document.addEventListener("keyup", KeyUpHandler);
function KeyDownHandler(event) {
    start++;
    if(start === 1 ) {
        // call loop
        requestAnimationFrame(Draw);
        generateplatforms();
    } else if(event.keyCode === 68) {
        MoveRight = true;
    } else if(event.keyCode === 87) {
        jump = true;
    }else if(event.keyCode === 65) {
        Moveleft = true
        
    }
}

function KeyUpHandler(event) {
    if(event.keyCode === 65) {
        Moveleft = false;
    } else if(event.keyCode === 68) {
        MoveRight = false;
    } else if(event.keyCode === 87) {
        jump = true;
    }
}

// Draw loop
 function Draw() {
   //Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    //move and draw player
    MovePlayer();
    DrawPlayer();
    //move and draw platforms
    MoveGround();
    for(i = 0; i < platform.length; i++) {
        DrawPlatform(platform[i]);
        MovePlatform(platform[i]);
        collision(platform[i]);
        Score++;
    }
    if(lost == false) {

    }
    Fill = "#000000"
    ctx.font = "30px Arial";
   ctx.fillText("Score " + Score, 0, 30);
    requestAnimationFrame(Draw);
 }

 function colission(APlat) {
    if(Y >= APlat.y && Y <= APlat.y) {
        Y = 0;
        console.log(i)
    }
 }
