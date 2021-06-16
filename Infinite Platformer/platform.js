// platform library



function generateplatforms() {
    for (let i = 0; i < 15; i++) {
        platform.push(NewPlatform());
    }
    
}

// platform variables
function NewPlatform(InitX, InitY, InitW, InitH, InitS) {
    return {
        x: randomInt(0, 600),
        y: randomInt(0, 600),
        w: 200,
        h: 10,
        s: 1
    }
}

function DrawPlatform(APlat) {
    Fill = "#FFFFFF"
    regtangle(APlat.x, APlat.y, APlat.w, APlat.h, Fill);
    regtangle(0, PlatY, 800, 100, "#9c5a33");
}

// Move Ground Down
function MoveGround() {
    PlatY += PlatV;
    if(PlatY >= 800) {
       PlatY = 900; 
    }
}

// Move platforms
function MovePlatform(APlat) {
    APlat.y += APlat.s;
    if (APlat.y >= 810) {
        APlat.y = randomInt(-1, -10);
        APlat.x = randomInt(0, 700);
    }
}

function collision(APlat) {
    //platform vairables
    let PX = APlat.x;
    let PY = APlat.y;
    let PX2 = APlat.x + APlat.w;
    let PY2 = APlat.y + APlat.h;
    //player vairables
    let Y2 = Y + 25;
    let X2 = X + 25;
    // phyase through platforms if on the ground 
    if(GroundCollision == false) {
        // collision dectection
        if(Y <= PY2 && X <= PX2 && Y2 >= PY && X2 >= PX) {
            // collision
            if(V > 0) {
                CanvasJump = false;
                jump = false;
                InAir = false; 
                CanvasJump = false;
                V = 0.9;
            } else if ( V < 0) {
                Y = PY2;
                V = 1.2;
            }
        }
    }
}