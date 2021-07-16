class Char{
constructor (animation, x, y, speed){
  this.x = x;
  this.y = y;
  this.animation = animation;
  this.w=animation.width
 this.len = anim.length;
  this.speed = speed;
  this.index = 0;//

 }
 display() {
 var index = round(this.index)%this.len;
  //console.log(index)
  image(this.animation[index],this.x,this.y)
   
} 
animate() {
  this.index += this.speed;
  this.x += this.speed * 10;

//if (this.x > width) {
//   this.x = -this.w;
 // }
 
}
}