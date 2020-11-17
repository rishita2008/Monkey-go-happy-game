
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(550,550)
monkey= createSprite(80,395,20,20);
 monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1

 ground=createSprite(400,425,900,10) 
  ground.velocityX=-4
  
  
  survivalTime=0

 obstacleGroup = createGroup();
 bananaGroup=createGroup(); 
  
}


function draw() {
  background("white")

ground.x=ground.width/2;  
  
 console.log(ground.x)
 console.log(monkey.y) 
  
  
  stroke("blue");
  fill("red");
  textSize(20)
  text("Survival Time:"+ survivalTime,100,50);
  survivalTime=Math.ceil(frameCount/frameRate());
  
  if(keyDown("space")) {
        monkey.velocityY = -16;
    }
  
 
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  Obstacles();
  Banana();
  
   if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
     bananaGroup.setLifetimeEach = 200;
     obstacleGroup.setLifetimeEach=200;
   
   }
  
  
  drawSprites();
}
  
function Obstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(550,402,10,40);
   obstacle.velocityX = -6
   obstacle.scale = 0.1;
   
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);   
 }
 } 


function Banana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(550,240,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    
    bananaGroup.add(banana);
  }
}