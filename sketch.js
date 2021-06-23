var zorua,zoruaImg
var zombie,zombieImg,zombieGroup
var obstacles,ObstaclesGroup,obstaclesImg
var ground,groundImg
var backgroundImg

function preload() {
  groundImg=loadImage("Ground.png")
  zoruaImg=loadImage("ok.gif")
  obstaclesImg=loadImage("zombie1.gif")
  backgroundImg=loadImage("Background1.gif")
  
}
function setup() {
  createCanvas(800,600);
  ground = createSprite(300,580,12000,20)
  ground.visible=false
  //ground.addImage(groundImg)
  //ground.scale = 1
  zorua= createSprite(100,500,50,50)
  zorua.addImage(zoruaImg)
  zorua.scale = 0.6
  ObstaclesGroup=new Group();
  
}

function draw() {
  background(backgroundImg);
  if(keyDown("Up_Arrow")){
  zorua.velocityY=-15
    console.log(zorua.y)
  }
  zorua.velocityY = zorua.velocityY +0.8
  zorua.collide(ground)
  if(zorua.y>50 && zorua.y<100 ){
    zorua.y=200
    console.log("hello")
  }
  ObstacleSpawn(); 
   drawSprites();
}
function ObstacleSpawn(){
    if(frameCount%20===0){
  obstacles=createSprite(300,510,35,45)
  obstacles.addImage(obstaclesImg);
  obstacles.scale=0.5
  obstacles.velocityX=-5 
  obstacles.lifetime=200 
  obstacles.debug=true 
  obstacles.setCollider("rectangle",1,5,107,300) 
      
  
   // obstacle.visible=false
    ObstaclesGroup.add(obstacles); 
    }
}