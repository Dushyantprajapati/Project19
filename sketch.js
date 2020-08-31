var monkey,run;
var back,backImage;
var ground;
var score;
var bananaGroup,stoneGroup;


function preload(){
  run=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
 backImage=loadImage("jungle.jpj");
  
 Bimage=loadImage("banana.png");
  
 Simg=loadImage("stone.png"); 
  
  }


function setup() {
  createCanvas(400, 400);
  
  // create sprite
  monkey = createSprite(270,270,50,50);
  monkey.addAnimation("run",run);
  monkey.scale=0.5;
  
  back = createSprite(200,200,400,400);
  back.addImage("jungle",backImage);
  back.x=back.width/2;
  
  ground=createSprite(200,280,400,20);
  ground.visible=false;
  

  bananaGroup=new Group();
  stoneGroup=new Group();
}

function draw() {
  background(0);
  
  score=score+math.round(getframeRate()/60);  
  text("score :"+score,500,50);
  fill("white");
  textSize(20);
  stroke("white");
  
  if(stoneGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
  
  
  if(keyDown(UP_ARROW)){
  monkey.velocityY=-5;
  }
  
 switch(score){
   case 10: monkey.scale=0.12;
     break;
   case 20: monkey.scale=0.14;
     break;
   case 30: monkey.scale=0.16;
     break;  
   case 40: monkey.scale=0.18;
     break;
    
     default:break;
 }
  
   
  monkey.collide(ground);
  
  banana();
  stones();
  drawSprites();
  
}

function stones(){
  if(frameCount % 40 ===0) {
    var stone =createSprite(200,275,50,50);
    stone.addImage("stone",Simg);
    stone.velocityX=-6
    stone.lifetime=200;
    stone.scale=0.5;
    stoneGroup.add(stone);
  } 
}

function fruit(){
    if(frameCount % 30 ===0) {
    var banana =createSprite(200,275,50,50);
    banana.addImage("banana",Bimage);
    banana.velocityX=-6
    banana.lifetime=200;
    banana.scale=0.5; 
    bananaGroup.add(banana);
    }  
 }


