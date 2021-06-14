// Player library



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

    // move left, right, anbd stop player from walkiung out of canvas
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



