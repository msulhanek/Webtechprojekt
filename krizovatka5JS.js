let img = new Image();
img.src="Krizovatka1.png";
let imgAuto = new Image();
imgAuto.src= "zatacajuceAuto3.png";

let imgAuto10 = new Image();
imgAuto10.src = "zatacajuceAuto2.png"

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 225;
firstCarCoordinateY = 200;

secondCarCoordinateX = 330;
secondCarCoordinateY = 90;

var poradie = new Set();

const scale = 2;


img.onload = function() {
  init();

};

imgAuto.onload = function()
{
  init();
};

imgAuto10.onload = function()
{
  init();
};


function init() {
  ctx.drawImage(img,0,0);
  drawFrameCarFromBottom(cycleLoopForBottomCar[ currentLoopIndexForBottomCar],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,secondCarCoordinateX,secondCarCoordinateY);


} 


let frameCount = 0;

const widthForBottomCar = 60;
const heightForBottomCar = 60;

const widthForRightCar = 70;
const heightForRightCar = 70;

const scaledWidthForBottomCar = scale * widthForBottomCar;
const scaledHeight = scale * heightForBottomCar;

function drawFrameCarFromBottom(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(imgAuto,
                frameX * widthForBottomCar, 0, widthForBottomCar, heightForBottomCar,
                canvasX, canvasY, widthForBottomCar, heightForBottomCar);
                
}

function drawFrameCarFromRight(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(imgAuto10,
                  frameX * widthForRightCar, 0, widthForRightCar, heightForRightCar,
                  canvasX, canvasY, widthForRightCar, heightForRightCar);
                  
  }

const cycleLoopForBottomCar = [0, 1, 2, 3, 4, 5, 6, 7];
let currentLoopIndexForBottomCar = 0;
let currentDirection = 0;

function stepWithFirstCar() {
    while(firstCarCoordinateX > -100   )
    {
    frameCount++;
    if (frameCount < 2) {
      window.requestAnimationFrame(stepWithFirstCar);
      return;
    }


    frameCount = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img,0,0);

    drawFrameCarFromBottom(cycleLoopForBottomCar[ currentLoopIndexForBottomCar],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
    drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,secondCarCoordinateX,secondCarCoordinateY);

        if(firstCarCoordinateY > 135){
            if((firstCarCoordinateY <= 180 & firstCarCoordinateY >= 170 )
            | (firstCarCoordinateY <= 150 & firstCarCoordinateY >= 140 ) )
            {
                currentLoopIndexForBottomCar = 0;
            }

            else
            {
                currentLoopIndexForBottomCar = 1;
            }
            firstCarCoordinateY = firstCarCoordinateY - scale;
        }


       if(firstCarCoordinateY <= 135 & firstCarCoordinateY > 90){
        firstCarCoordinateY = firstCarCoordinateY - scale;
        firstCarCoordinateX = firstCarCoordinateX - scale;
        if(firstCarCoordinateY == 140 | firstCarCoordinateY == 130  | firstCarCoordinateY == 122 | firstCarCoordinateY == 110 | firstCarCoordinateY == 102)
        {
            currentLoopIndexForBottomCar++;
        }
    }

        if(firstCarCoordinateY <= 90)
        {
            currentLoopIndexForBottomCar = 6;
            firstCarCoordinateX = firstCarCoordinateX - scale;
            
        }
    }
    currentLoopIndexForBottomCar = 0;
    jeDobrePoradie();
  }

  
const cycleLoopForRightCar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentLoopIndexForRightCar = 0;


function stepWithSecondCar() {
  while(secondCarCoordinateY > -100)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithSecondCar);
    return;
  }
  frameCount = 0;


  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  drawFrameCarFromBottom(cycleLoopForBottomCar[ currentLoopIndexForBottomCar],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,secondCarCoordinateX,secondCarCoordinateY);

         if(secondCarCoordinateX > 234){
            secondCarCoordinateX = secondCarCoordinateX - scale;
            if((secondCarCoordinateX <= 320 & secondCarCoordinateX >= 310) | (secondCarCoordinateX <= 290 & secondCarCoordinateX >= 280)
            | (secondCarCoordinateX <= 270 & secondCarCoordinateX >= 260)| (secondCarCoordinateX <= 240 & secondCarCoordinateX >= 230)  )
            {
                currentLoopIndexForRightCar = 1;
            }

            else
            {
                currentLoopIndexForRightCar = 0;   
            }
        }


       if(secondCarCoordinateX <= 234 & secondCarCoordinateX > 216){
        secondCarCoordinateX = secondCarCoordinateX - scale;
        secondCarCoordinateY = secondCarCoordinateY - scale;
        if(secondCarCoordinateX <= 234 & secondCarCoordinateX > 216)
        {
            currentLoopIndexForRightCar++;
        }
    }

        if(secondCarCoordinateX <= 216)
        {
            if((secondCarCoordinateY <= 70 & secondCarCoordinateY >= 60)
             | (secondCarCoordinateY <= 50 & secondCarCoordinateY >= 40) 
             | (secondCarCoordinateY <= 30 & secondCarCoordinateY >= 20) )
             {
                 currentLoopIndexForRightCar = 9;
             }
             else{
                currentLoopIndexForRightCar = 10;
             }
            


            secondCarCoordinateY = secondCarCoordinateY - scale;
            
        }

  
  }
  currentLoopIndexForRightCar = 0;
  jeDobrePoradie();

}

function jeDobrePoradie()
{
  if( secondCarCoordinateY < 30 & firstCarCoordinateX < 30 & poradie.size == 2)
  {

    document.getElementById('vylustenieKrizovatky').innerHTML = 'Križovatka vyriešená sprváne, obe autá sa neobmedzujú takže prejdú súčastne';
     console.log("Krizovatka vyriesena spravne");
 } 
}


function getMovement(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
 if( x >= firstCarCoordinateX + 20 & x <= firstCarCoordinateX +50 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 60 )
 {
  window.requestAnimationFrame(stepWithFirstCar);
  poradie.add(2);
  console.log(poradie);

 }

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 70 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 )
 {
   window.requestAnimationFrame(stepWithSecondCar);
   poradie.add(1);
   console.log(poradie);
 }
}

let canvasElem = document.querySelector("canvas"); 

canvasElem.addEventListener("mousedown", function(e) 
{ 
  getMovement(canvasElem, e); 
}); 

function demoFunction()
{
    firstCarCoordinateX = 225;
    firstCarCoordinateY = 200;
    
    secondCarCoordinateX = 330;
    secondCarCoordinateY = 90;
    stepWithSecondCar();
 
  

  setTimeout(stepWithFirstCar, 400 );


}

