var gameCanvas = document.getElementById('gc');
var ctx = gameCanvas.getContext("2d");
var h = gameCanvas.height;
var w = gameCanvas.width;

var bx = w/2;
var by = h/2;
var rad = 7.5;
var speedx=5;
var speedy=3;

var px = 0;
var py = h/2 - 50;
var pw = 15;
var ph = 100;
var pspeed = 3;
var moveDown = false;
var moveUp = false;

document.addEventListener("keydown",down);
document.addEventListener("keyup",up);

function down(evt)
{
    if(evt.keyCode == 38)
    moveUp = true;
    if(evt.keyCode == 40)
    moveDown = true;
}

function up(evt)
{
    if(evt.keyCode == 38)
    moveUp = false;
    if(evt.keyCode == 40)
    moveDown = false;
}

function draw() {
    //ctx.clearRect(0,0,w,h);
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(bx,by,rad,0,Math.PI*2,false);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle="red";
    ctx.fillRect(px,py,pw,ph);
}

function ballMove() {
    bx = bx + speedx;
    if(bx+rad>=w || bx-rad<=0)
    speedx=-speedx;
    by = by + speedy;
    if(by+rad>=h || by-rad<=0)
    speedy=-speedy;
}

function movePaddle() {
    if(moveDown==true)
    py = py + pspeed;
    if(moveDown==true)
    py -= pspeed;
}

function update() {
    draw();
    ballMove();
    movePaddle();
}

setInterval(update,1);

