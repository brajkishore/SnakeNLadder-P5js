class Player{
    constructor(name,color){
        this.bubble=new Bubble(0,0,25);
        this.bubble.setColor(color);
        this.name=name;
        this.startPos=0;
        this.x=0;
        this.y=0;        
    }


    move(randNum,cells){
                
        if(this.startPos>=99){
            console.log(currentPlayer.getName()+" has won !!");
            return true;
        }        
        else{
            this.startPos=this.startPos+randNum;
                if(this.startPos>0 && this.startPos<cells.length){				
                    let cell=cells[this.startPos];
                    this.x=cell.getCenterX();
                    this.y=cell.getCenterY();
                    this.show();	
                }
                if(this.startPos>=99){
                    console.log(currentPlayer.getName()+" has won !!");
                    return true;
                }
    }  
    return false;              
}

getCurrentPos(){
    return this.startPos;
}

move2Cell(cellNum,x,y){
    this.startPos=cellNum;
    this.x=x;
    this.y=y;
    this.show();
}

show(){
    this.bubble.show(this.x,this.y);
}
getName(){
    return this.name;
}
}