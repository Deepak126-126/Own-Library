var movingRect,fixedRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 800, 80, 30);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;
  movingRect.velocityX=-5;
  fixedRect=createSprite(400,100,50,80);
  fixedRect.shapeColor="yellow";
  fixedRect.debug=true;
  fixedRect.velocityX=+5;
  gameobject1=createSprite(1000,500,70,30);
  gameobject1.shapeColor="green";
  gameobject1.debug=true;
  gameobject2=createSprite(200,150,50,80);
  gameobject2.shapeColor="green";
  gameobject2.debug=true;
  gameobject3=createSprite(800,400,50,80);
  gameobject3.shapeColor="green";
  gameobject3.debug=true;
  gameobject4=createSprite(500,600,80,50);
  gameobject4.shapeColor="green";
  gameobject4.debug=true;
  
}

function draw() {
  background(0,0,0); 
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  //if(isTouching(movingRect,gameobject1)){
    //movingRect.shapeColor="blue";
    //gameobject1.shapeColor="blue";
    
  //}
  //else{
    //movingRect.shapeColor="green";
    //gameobject1.shapeColor="green";
  
 //}
bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

  
