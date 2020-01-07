let img = new Image();
img.src="Krizovatka1.png";
let imgAuto = new Image();
imgAuto.src= "zatacajuceAuto1.png";

let imgAuto10 = new Image();
imgAuto10.src = "auto10.png"

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 225;
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 105;

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
  drawFrame(cycleLoop[ currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);


} 


let frameCount = 0;

const width = 60;
const height = 60;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(imgAuto,
                frameX * width, 0, width, height,
                canvasX, canvasY, width, height);
                
}

const cycleLoop = [0, 1, 2, 3, 4, 5, 6];
let currentLoopIndex = 0;
let currentDirection = 0;

function stepWithFirstCar() {
    while(firstCarCoordinateX > -20)
    {
    frameCount++;
    if (frameCount < 2) {
      window.requestAnimationFrame(stepWithFirstCar);
      return;
    }


    frameCount = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img,0,0);

    drawFrame(cycleLoop[ currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
     ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);

        if(firstCarCoordinateY > 135){
            firstCarCoordinateY = firstCarCoordinateY - scale;
        }


       if(firstCarCoordinateY <= 135 & firstCarCoordinateY > 90){
        firstCarCoordinateY = firstCarCoordinateY - scale;
        firstCarCoordinateX = firstCarCoordinateX - scale;
        if(firstCarCoordinateY == 140 | firstCarCoordinateY == 130  | firstCarCoordinateY == 122 | firstCarCoordinateY == 110)
        {
            currentLoopIndex++;
        }
    }

        if(firstCarCoordinateY <= 90)
        {
            currentLoopIndex = 5;
            firstCarCoordinateX = firstCarCoordinateX - scale;
            
        }
    }
    currentLoopIndex = 0;
    jeDobrePoradie();
  }

function stepWithSecondCar() {
  while(secondCarCoordinateX > -70)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithSecondCar);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  drawFrame(cycleLoop[ currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX - scale,secondCarCoordinateY);
   secondCarCoordinateX = secondCarCoordinateX - scale;
  }
  jeDobrePoradie();

}

function jeDobrePoradie()
{
  if( secondCarCoordinateX < 30 & firstCarCoordinateX < 30 & poradie.size == 2)
  {
    
   var iterator1 = poradie.values();
   if(iterator1.next().value == 1)
   {
    document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka vyriešená správne, červené dáva prednosť sprava';
   }
   else
   {
     document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka nebola vyriešená správne <br> Nápoveda: Aplikuj pravidlo pravej ruky';
   }
   
 } 
}


function getMovement(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
 if( x >= firstCarCoordinateX & x <= firstCarCoordinateX +40 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 30 )
 {
  window.requestAnimationFrame(stepWithFirstCar);
  poradie.add(2);
  console.log(poradie);

 }

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 40 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 )
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
    
    secondCarCoordinateX = 310;
    secondCarCoordinateY = 105;
  stepWithSecondCar();
  setTimeout(stepWithFirstCar, 3000);

}

