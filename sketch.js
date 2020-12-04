var fixedRect, movingRect;
var potato1, potato2; 
var line1, line2; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  line1 = createSprite(600, 400, 50, 80);
  line2 = createSprite(200, 400, 80, 30); 

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  line1.velocityX = -5;
  line2.velocityX = +5; 
}

function draw() {
  background(0,0,0);  

bounceOff(line1, line2);
bounceOff(movingRect, fixedRect);

  drawSprites();
}

function bounceOff(potato1, potato2) {
  if (potato1.x - potato2.x < potato2.width/2 + potato1.width/2
    && potato2.x - potato1.x < potato2.width/2 + potato1.width/2) {
      potato1.velocityX = potato1.velocityX * (-1);
      potato2.velocityX = potato2.velocityX * (-1);
}
if (potato1.y - potato2.y < potato2.height/2 + potato1.height/2
  && potato2.y - potato1.y < potato2.height/2 + potato1.height/2){
    potato1.velocityY = potato1.velocityY * (-1);
  potato2.velocityY = potato2.velocityY * (-1);
}
}