  var player_running,path,player
  var pathImg,invisibleGround1,invisibleGround2
function preload(){
    //pre-load images
    pathImg = loadImage("path.png");
    player_running = loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4 
  path.scale = 1.2

  player = createSprite(200,350,30,30)
  player.addAnimation("running",player_running)
  player.scale = 0.05

  invisibleGround1 = createSprite(100,200,20,400)
  invisibleGround1.visible =false

  invisibleGround2 = createSprite(350,200,20,400)
  invisibleGround2.visible = false 
  }

function draw() {
    if(path.y>400){
      path.y = height/2
    }

      player.x = World.mouseX 

      player.collide(invisibleGround1)
      player.collide(invisibleGround2)
        background(0);
      drawSprites();
      }
