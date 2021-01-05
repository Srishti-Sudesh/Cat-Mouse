var bg, bgImg;
var cat, catStillImg, catStopImg, catWalkImg, catStopImg;
var mouse, mouseStillImg, mouseTeaseImg, mouseStopImg;

function preload() {
    bgImg = loadImage("garden.png");

    catStillImg = loadAnimation("tomOne.png");
    catWalkImg = loadAnimation("tomTwo.png","tomThree.png");
    catStopImg = loadAnimation("tomFour.png");

    mouseStillImg = loadAnimation("jerryOne.png");
    mouseTeaseImg = loadAnimation("jerryTwo.png","jerryThree.png");
    mouseStopImg = loadAnimation("jerryFour.png");
}

function setup(){
    createCanvas(600,600);

    bg = createSprite(300,300,10,10);
    bg.addImage("backg.",bgImg);    

    cat = createSprite(470,410,10,10);
    cat.addAnimation("tom",catStopImg);
    cat.addAnimation("tom2",catWalkImg);
    cat.addAnimation("tom3",catStillImg);
    cat.scale = .15;

    mouse = createSprite(100,410,10,10);
    mouse.addAnimation("mouse1", mouseStillImg);
    mouse.addAnimation("mouse2", mouseTeaseImg);
    mouse.addAnimation("mouse3", mouseStopImg);
    mouse.scale = 0.1;


}

function draw() {
    background("yellow");

    additionalGoal();
    keyPressed();
    drawSprites();
}


function keyPressed(){

if (keyWentDown("LEFT_ARROW")){
    cat.velocityX = -4;
    cat.changeAnimation("tom2",catWalkImg);
    mouse.changeAnimation("mouse2", mouseTeaseImg);
 }
}

function additionalGoal(){

    if (cat.x - mouse.x < cat.width/2 - mouse.width/2){
        console.log("collision occured");
        cat.velocityX = 0;
        cat.x = 200;
        cat.scale = 0.1;
        cat.changeAnimation("tom3",catStopImg);
        mouse.changeAnimation("mouse3", mouseStopImg);
        }

}