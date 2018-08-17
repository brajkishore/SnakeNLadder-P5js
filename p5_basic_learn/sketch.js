let cells=[];
let totalCells=100;
let wh=60;
let columns=10;
let i=1;
let circleX=0;
let circleY=0;
let startAt=0;
let playerA;
let playerB;
let currentPlayer;
let snake;
let isGameOver=false;
function setup() {	
	createCanvas(windowWidth, windowHeight);			
	createCells();	
	frameRate(1);
	
	bubble=createBubble();

	playerA=new Player("playerA",color("#ffeb3b"));
	playerB=new Player("playerB",color("#81d4fa"));
	currentPlayer=playerB;
	createSnakes();
	createLadders();
	drawBoard();	
}

function draw() {
		
}

function mousePressed(){
	
	if(!isGameOver){
			drawBoard();//clear all prev positions and put new ones
			let randNum=floor(random(0,19));//toss
			//let randNum=10;
			isGameOver=currentPlayer.move(randNum,cells);

			if(!isGameOver && cells[currentPlayer.getCurrentPos()].snake!=null){
				drawBoard();
				cells[currentPlayer.getCurrentPos()].snake.moveDown(currentPlayer);				
			}

			if(!isGameOver && cells[currentPlayer.getCurrentPos()].ladder!=null){
				drawBoard();
				cells[currentPlayer.getCurrentPos()].ladder.moveUp(currentPlayer);				
			}
			
			if(currentPlayer==playerB)
				currentPlayer=playerA;
			else
				currentPlayer=playerB;
		
			currentPlayer.show();

	}
				
}

function createBubble(){
	 return new Bubble(0,0,20);		  	  	
}		


function createSnakes(){

	for(let i=1;i<=10;i++){
			let x=floor(random(11,99));
			let y=floor(random(11,99));
			if(y>x && (y-x)>9 && cells[y].ladder==null){
				cells[y].setSnake(new Snake(cells[y],cells[x]));
			}
	}
}

function createLadders(){

	for(let i=1;i<=10;i++){
			let x=floor(random(2,100));
			let y=floor(random(2,100));
			if(y>x && (y-x)>9 && cells[y].snake==null){
				cells[x].setLadder(new Ladder(cells[x],cells[y]));
			}
	}
}

function moveCircle(){
		if(startAt<cells.length){
			let cell=cells[startAt++];
			bubble.show(cell.getCenterX(),cell.getCenterY());
		}		
}





function drawBoard(){

	//noStroke();
	for(let i=0;i<cells.length;i++){
		cells[i].show();
		if(cells[i].snake!=null)
			cells[i].snake.show();

	}

	for(let i=0;i<cells.length;i++){		
		if(cells[i].snake!=null)
			cells[i].snake.show();
	}
	
	
	for(let i=0;i<cells.length;i++){		
		if(cells[i].ladder!=null)
			cells[i].ladder.show();
	}
}

function createCells(){
		
	let dir=1,offset=0,xOffset=1;	

	while(i<=totalCells){			
		if(xOffset%(columns+1)==0){					
			offset++;
			if(dir==1)
				xOffset--;
			else
				xOffset++;
			
				dir=-dir;						
			console.log("xOffset:"+xOffset)										
		}

		
		let rectX=(xOffset*wh);
		let rectY=(offset*wh);
		
		cells.push(new Cell(rectX,rectY,wh,i));
		
		if(dir==1)
			xOffset++;
		else
			xOffset--;		
			i=i+1;
	}

}
