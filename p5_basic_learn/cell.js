class Cell{

    constructor(x,y,wh,index){

        this.index=index;
        this.x=x;
        this.y=y;
        this.wh=wh;
        this.snake=null;
        this.ladder=null;
    }

    setSnake(snake){
        this.snake=snake;
    }

    setLadder(ladder){
        this.ladder=ladder;
    }

    show(){
    
        
    
    if(this.index%2==0)
        fill(color("#c8e6c9"));
    else
        fill(color("#f1f8e9"));
    
    rect(this.x, this.y, this.wh, this.wh);
    fill(50)
    textSize(10);
    text(this.index, this.getCenterX(),this.getCenterY());

    
    }

    getCellNumber(){
        return this.index;
    }

    getCenterX(){
        return this.x+this.wh/2;
    }
    getCenterY(){
        return this.y+this.wh/2;
    }

}