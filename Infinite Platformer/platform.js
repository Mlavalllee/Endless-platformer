// platform library



function generateplatforms() {
    for (let i = 0; i < 15; i++) {
        platform.push(NewPlatform());
    }
    
}

// platform variables
function NewPlatform(InitX, InitY, InitW, InitH, InitS) {
    return {
        x: randomInt(0, 700),
        y: randomInt(0, 800),
        w: 200,
        h: 10,
        s: 1
    }
}

function DrawPlatform(APlat) {
    Fill = "#9c5a33"
    regtangle(APlat.x, APlat.y, APlat.w, APlat.h, Fill);
    regtangle(0, PlatY, 800, 100, "#9c5a33");
}

// Move Ground Down
function MoveGround() {
    PlatY += 0.2;
    if(PlatY >= 800) {
       PlatY = 900; 
    }
}

// Move platforms
function MovePlatform(APlat) {
    APlat.y += APlat.s;
    if (APlat.y >= 810) {
        APlat.y = randomInt(-147, -10);
        APlat.x = randomInt(0, 700);
    }
}

function collision(APlat) {
    if(Y >= APlat.y && Y <= APlat.y && X >= APlat.x && X <= APlat.x ) {
       V = 0;
       console.log(1)
    }
}