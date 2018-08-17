class Ladder{

    constructor(cellA,cellB){
        this.cellA=cellA;
        this.cellB=cellB;
    }

    show(){
        
        fill(color("#81c784"));                
        line(this.cellA.getCenterX(),this.cellA.getCenterY(),
        this.cellB.getCenterX(),this.cellB.getCenterY());
        fill(color("#81c784"))
        ellipse(this.cellA.getCenterX(),this.cellA.getCenterY(),20,20);
        
    }

    moveUp(player){
        console.log(player.getName()+" moving up to "+this.cellB.getCellNumber());
        player.move2Cell(this.cellB.getCellNumber(),this.cellB.getCenterX(),this.cellB.getCenterY());
    }

}