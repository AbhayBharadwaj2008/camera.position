var car1, car2, car3;
var speed1, speed2, speed3, weight;
var wall1,  wall2, wall3;
var pic;
function preload() {
   pic=loadImage("audi (1).png")
}

function setup() {
  createCanvas(1200,400);

 speed1 = random(5,9)
 speed2 = random(5,9)
 speed3 = random(5,9)

  
  car1 = createSprite(50, 350, 30, 20);
  car1.addImage("kdfnvnf",pic);
  car2 = createSprite(50, 200, 30, 20);
  car2.addImage("kdfnvnf",pic);
  car3 = createSprite(50, 50, 30, 20);
  car3.addImage("kdfnvnf",pic);

  car1.velocityX= speed1;
  car2.velocityX= speed2;
  car3.velocityX= speed3;

  
  
}

function draw() {
  background(220);  

  camera.position.x=car2.position.x


  drawSprites();
}