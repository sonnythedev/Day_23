//Main App Class
class HelicopterGame{
    //We need to access myCanvas, theScore, theTimer and gameStatus section in html

   constructor(canvasId,scoreId,timerId,gameStatusId){
        this.canvasId=canvasId;
        this.myCanvas=document.getElementById(canvasId);
        this.ctx=this.myCanvas.getContext('2d');
        this.myCanvas.width=window.innerWidth-50;
        this.myCanvas.height=window.innerHeight-50;
        this.scoreId=scoreId;
        this.timerId=timerId;
        

        this.heliX=0;
        this.heliY=100;
        this.dx=30;
        this.dy=30;
        this.helicopter=null;

        this.fiveBarsArr=[];

        this.gameInterval=null;
        this.timerInterval=null;
        this.gameFinished=false;


        // let gameFinished=false;
        // let timerInterval=null;
        // let gameInterval=null;
    }

    startTheGame(){
        //Reset the variables
    
        // document.getElementById('gameStatus').style.display='none';
        //console.log(this.scoreId,this.timerId);
        let scoreAndTimer=new ScoreAndTimer(this.scoreId,this.timerId);
        this.timerInterval=scoreAndTimer.startTimeScore();

        this.obstacle=new Obstacle('myCanvas',0,0,'',this.fiveBarsArr);

        //canvasId,x,y,imgSrc,fiveBarsArr

        //Start The Game Interval
         this.gameInterval=setInterval(
            //function(){
                  ()=>{
                  console.log(this.canvasId);
                  this.heliX+=this.dx; //this will move helicopter horizontally
                  this.heliY+=this.dy; //this will move helicopter vertically
                  this.helicopter=new Helicopter(this.canvasId,this.heliX,this.heliY,10,30,'helicopter.png');
                  this.helicopter.drawMeOnCanvas();
                  this.obstacle.drawMeOnCanvas();
                 }
            //},
            ,300);
    
    }

    detectCollision(){
        for(let i=0; i<this.fiveBarsArr.length; i++){
            if(this.fiveBarsArr[i]<this.helicopter.y){ //We have collison
                //console.log('COLLISON!');
                //If we have collison then just stop timer and score
                this.gameFinished=true;
                clearInterval(this.timerInterval);
                clearInterval(this.gameInterval);
                document.getElementById(gameStatusId).style.display='block';
             }
             else{
                 console.log('NO COLLISON!');
             }
            
        }
    }
}

//Shape class
class Shape{
    constructor(x,y,imgSrc){
        this.x=x;
        this.y=y;
        //this.imgSrc=imgSrc;
        this.img=new Image();
        this.img.src=imgSrc;
    }
    drawMeOnCanvas(){
        console.log('Generic Draw Method');
    }
    
}

//Helicopter class
class Helicopter extends Shape{
    
    constructor(canvasId,x,y,dx,dy,imgSrc){
        super(x,y,imgSrc);
        //console.log(canvasId);
        this.dx=dx;
        this.dy=dy;
        this.myCanvas=document.getElementById(canvasId);
        this.ctx=this.myCanvas.getContext('2d');
        this.img=new Image();
        this.img.src=imgSrc;
        //console.log('img src',this.img.src);
    }
    /*
    get getX(){
        return this.x;
    }
    set setX(_x){
        this.x=_x;
    }
    get getY(){
        return this.y;
    }
    set setY(_y){
        this.y=_y;
    }
    */
    drawMeOnCanvas(){
        //console.log('ctx:',this.ctx);
        this.ctx.beginPath();
        //This makes sure of right and left boundary(x)
        if(this.x+this.img.width>this.myCanvas.width ||this.x<0){ 
            this.x=0;
        }
        //This makes sure of top and bottom boundary(y)
        if(this.y+50>this.myCanvas.height ||this.y<0){
            this.y=100;
        }
        //This basically erases your canvas
        this.ctx.clearRect(0,0,this.myCanvas.width,this.myCanvas.height); 
        //console.log(this.img);
        this.ctx.drawImage(this.img,this.x,this.y,this.img.width*.7,this.img.height*.7);
        this.ctx.closePath();
    }
}

//Obstacle class
class Obstacle extends Shape{
    constructor(canvasId,x,y,imgSrc,fiveBarsArr){
        super(x,y,imgSrc);
        this.fiveBarsArr=fiveBarsArr;
        this.myCanvas=document.getElementById(canvasId);
        this.ctx=this.myCanvas.getContext('2d');
    }
    drawMeOnCanvas(){
        //Draw Obstacles method will basically draw obstacles on screen
        //Lets draw 5 random height bars on the screen
        this.ctx.beginPath();
        let barX=0;
        let minBarHeight=this.myCanvas.height*.3; //minimum bar height is one third of the canvas height
        let barWidth=50;
        for(let i=0; i<5; i++){
            barX +=(this.myCanvas.width/5);
            let barHeight=minBarHeight+Math.round((this.myCanvas.height-minBarHeight)*Math.random()) - (this.img.height)*3;
            //console.log('barX:',barX,'barY:',myCanvas.height,'barWidth:',barWidth,'barHeight:',barHeight);
            let barY=this.myCanvas.height-barHeight; 
            this.ctx.fillStyle='red';
            this.ctx.rect(barX,barY,barWidth,barHeight);
            this.ctx.fill();

            this.fiveBarsArr.push(barY);
        }
        
        this.ctx.closePath();
    }

}

//Score and Timer Class

class ScoreAndTimer{
     constructor(scoreId,timerId){
        this.scoreId=scoreId;
        this.timerId=timerId;
        //console.log(this.scoreId,this.timerId);
        this.theScore=0;
        //this.timerInterval=null;

        this.secs=0;
        this.mins=0;
        this.secsStr='';
        this.minsStr='';
    }

    startTimeScore(){
        let timerInterval=setInterval(
            //function(){
            ()=>{
             this.secs++;
             this.theScore+=10;
             if(this.secs%60==0){
                 this.secs=0;
                 this.mins++;
             }
             this.secsStr=(this.secs<10?'0'+this.secs:this.secs);
             this.minsStr=(this.mins<10?'0'+this.mins:this.mins);
             
             //timerStarted=true;
             console.log(this.timerId,this.scoreId);
             document.getElementById(this.timerId).innerHTML=`Time: ${this.minsStr} : ${this.secsStr}`;
             document.getElementById(this.scoreId).innerHTML=`&nbsp;&nbsp;&nbsp;Score: ${this.theScore}`;
             }
            //},
            ,
            1000
         );
         return timerInterval;

    }
    

}

let helicopterGame=new HelicopterGame('myCanvas','theScore','theTimer','gameStatus');
helicopterGame.startTheGame();


////LETS TRY TO MANIPULATE THE HELICOPTER'S PATH ACCORDING TO ARROW KEYS( -> <- etc,). SO WE NEED TO HANDLE KEYPRESS/KEYUP EVENT HANDLER.

window.addEventListener('keydown',
   function(event){
       //console.log(event);

       switch(event.keyCode){
           case 38:
             //keyCode 38 is arrow up
             console.log('up');
             helicopterGame.helicopter.y -= helicopterGame.helicopter.dy;
             helicopterGame.helicopter.drawMeOnCanvas();
             //drawHelicopter();
           break;

           case 40:
             //keyCode 40 is arrow down
             console.log('down');
             helicopterGame.helicopter.y += helicopterGame.helicopter.dy;
             helicopterGame.helicopter.drawMeOnCanvas();
           break;

           case 37:
             //keyCode 37 is arrow left
             //x-=dx;
             console.log('left');
             //console.log(helicopterGame.helicopter.dx);
             helicopterGame.helicopter.x -= helicopterGame.helicopter.dx;
             helicopterGame.helicopter.drawMeOnCanvas();
           break;

           case 39:
             //keyCode 39 is arrow right
             //x+=dx;
             console.log('right');
             helicopterGame.helicopter.x += helicopterGame.helicopter.dx;
             helicopterGame.helicopter.drawMeOnCanvas();
           break;

           default:
            break;
       }

       
   }
);


let myCanvas=document.getElementById('myCanvas');
myCanvas.addEventListener('mousemove',
   function(event){
       //console.log(event.clientX);
       //console.log(event.clientY);
       let x=event.clientX-myCanvas.offsetLeft;
       let y=event.clientY-myCanvas.offsetTop
       document.getElementById('xyPos').innerHTML='x: '+x+' | y: '+y;
   }
);
