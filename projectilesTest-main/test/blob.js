class Blob{
constructor(x, y){
this.x = x;
this.y = y;
}

 display(){
  fill("blue");
  ellipse(this.x,this.y,10,10);
 }

  move(){
    this.y = this.y - 5;
  }
}