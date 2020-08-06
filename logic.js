var gameCanvas = document.getElementById('gc');
var ctx = gameCanvas.getContext("2d");
var h = gameCanvas.height;
var w = gameCanvas.width;

var bx = w/2;
var by = h/2;
var rad = 10;
var speedx = 2;
var speedy = 2;

var px = 0;
var py = h/2 - 50;
var pw = 15;
var ph = 100;
var pspeed = 3;
var moveDown = false;
var moveUp = false;

var life = 3;
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
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(bx,by,rad,0,(Math.PI)*2,false);
    ctx.fill();
    ctx.closePath();
    ctx.fillStyle = "red";
    ctx.fillRect(px,py,pw,ph);
}

function ballMove() {
    bx = bx + speedx;
    by = by + speedy;
    if(bx+rad>=w)
        speedx = -speedx;
    if(by+rad>=h || by - rad<=0)
        speedy = -speedy;
    if((bx - rad <= px + pw) && (by>=py && by<=py+ph) )
        speedx = - speedx;
    if(bx<=0) {
        if(life==0){
            alert("game over!");
        }
        bx = w - 30;
        by = h/2;
        life--;
    }
}

function movePaddle() {
    if(moveDown==true && py+ph < h)
        py = py + pspeed;
    if(moveUp==true && py > 0)
        py -=pspeed;
}

function update() {
    draw();
    ballMove();
    movePaddle();
}

setInterval(update,8);



