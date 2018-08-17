class Snake{

    constructor(cellA,cellB){
        this.cellA=cellA;
        this.cellB=cellB;
    }

    show(){
        
        fill(color("#e57373"));                      
        line(this.cellA.getCenterX(),this.cellA.getCenterY(),
        this.cellB.getCenterX(),this.cellB.getCenterY());
        fill(color("#e57373"))
        ellipse(this.cellA.getCenterX(),this.cellA.getCenterY(),20,20);
        
    }

    moveDown(player){
        console.log(player.getName()+" moving down to "+this.cellB.getCellNumber());
        player.move2Cell(this.cellB.getCellNumber(),this.cellB.getCenterX(),this.cellB.getCenterY());
    }

}