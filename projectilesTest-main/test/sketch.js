var blob = [];
var obj
function setup() {
  createCanvas(displayHeight,displayWidth);
  obj = createSprite(displayWidth/2, displayHeight/2, 50, 50);
 // blob = new Blob(obj.x,obj.y);
}

function draw() {
  background(255,255,255);
 
  
  if(keyWentDown("space")){
    var blob1 = new Blob(obj.x, obj.y);
    blob.push(blob1);
  }   
  for(var i = 0; i < 5; i++){
    blob[i].display();
    blob[i].move();
 }
 drawSprites();
  
}