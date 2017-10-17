var fancyball = {
    x: 10,
    y: 100,
    w: 50,
    h: 50,
    s: 3
}

var lameball = {
    x: 100,
    y: 310,
    w: 30,
    h: 50,
    s: 1
}


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    move();
    drawballs();
    
}


function move() {
 
    fancyball.x = fancyball.x + fancyball.s;
    
    lameball.x = lameball.x + lameball.s;
}


function drawballs() {
       fill(45,234,255);
    ellipse(fancyball.x, fancyball.y, fancyball.w,fancyball.h);
    fill(57);
    ellipse(lameball.x, lameball.y,lameball.w,lameball.h);
}






function detectBounce() {
    if (x >= width || x < 0) {
        xspeed = xspeed * -1;
    }
}










