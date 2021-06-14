// Player library

let X = 375;
let Y = 675;
let V = 0;
let lost = false;
let RightCanvas = false;
let LeftCanvas = false;

function DrawPlayer() {
    Fill = "red";
    regtangle(X, Y, 25, 25, Fill);
}



function MovePlayer() {
    PlatY = PlatY - 25
    if (Y >= PlatY) {
        V = 0
    } else if(jump == true) {
        Jump();
    } else if(Y >= 800) {
        lost = true;
        V = 0; 
     }
     
    V = V + 0.1;
    Y += V
    PlatY = PlatY + 25;
    if (MoveRight == true && X < 775) {
        X += 4
    } else if (Moveleft == true && X > 0) {
        X += -4
    }
}

function Jump() {
    if (lost == false) {
        V = -6;
    }

}

function collision(APlat) {
    APlat.y = APlat.y - 25;
 if(Y >= APlat.y && Y <= APlat.y ) {
    V = 5;
    console.log(1)
 }
 APlat.y = APlat.y + 25;
}


