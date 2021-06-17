// Player library



function DrawPlayer() {
    Fill = "red";
    regtangle(X, Y, 25, 25, Fill);
}



function MovePlayer() {
    PlatY = PlatY - 25
    if(jump == true && GroundCollision) {
        GroundCollision = false;
        Y--;
        V = -7;
    } else if (Y >= PlatY) {
        GroundCollision = true;
        CanvasJump = false;
        jump = false;
        InAir = false;
        V = PlatV;
    } else if(jump == true && InAir == false) {
        InAir = true
        jump = false
        Jump();
         
    } else if(Y >= 800) {
        lost = true;
        V = 0; 
    } else if (GroundCollision == false) {
        V = V + 0.1;
    }
    Y += V
    PlatY = PlatY + 25;
    BasicMovement();
}

// Sideways Movement and Canvas jump
function BasicMovement() {
    // move left, right, and stop player from walking out of canvas
     if(ForceFall == true) {
        ForceFall = false;
        V = 3;
    } else if (MoveRight == true && X < 775) {
        X += 4
    } else if (Moveleft == true && X > 0) {
        X += -4
      // Wall jump on canvas edge right
    } else if(X >= 775 && CanvasJump == false && jump == true && InAir == true) {
        CanvasJump = true;
        InAir = false;
        jump = false;
      // Wall jump on canvas edge right
    } else if(X <= 0 && CanvasJump == false && jump == true && InAir == true) {
        CanvasJump = true;
        InAir = false;
        jump = false;
    }
}

function Jump() {
    if (lost == false && CanvasJump == false) {
        V = -7;
    } else if(lost == false) {
        V = -5;
    }

}