var bullet
var bulletweight = 32;
var bulletspeed = 223;
var wallthickness = 40;
var wall;
var damage = 0.5*bulletweight*bulletspeed*bulletspeed/wallthickness*wallthickness*wallthickness;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(800, 200, 60, 400);
  

  bullet = createSprite(10, 200, 10, 5);
  bullet.velocityX = bullet.velocityX + 10;
  bullet.shapeColor = "white";
}

function draw() {
  background("black");  
if(bullet.collide(wall)){
bullet.velocityx = 0;
if(damage > 10 ){
wall.shapeColor = "red";
}else{
wall.shapeColor = "green";  
}
}
 
 drawSprites();
}











