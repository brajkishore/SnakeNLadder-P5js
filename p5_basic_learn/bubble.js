class Bubble{
constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color=fill(100); 
          
}

setColor(color){
    this.color=color;
}

show(x,y){
    this.x=x;
    this.y=y;    
    fill(this.color);                    
    ellipse(this.x, this.y, this.r, this.r);
 
}
}