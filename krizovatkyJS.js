let img = new Image();
img.src="Krizovatka1.png";
let imgAuto = new Image();
imgAuto.src= "auto6.png";
imgAuto.id = 'auto6';

let imgAuto10 = new Image();
imgAuto10.src = "auto10.png"

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 240;
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
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);


} 


let frameCount = 0;

function stepWithFirstCar() {
  while(firstCarCoordinateY > -70)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithFirstCar);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY - scale);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
   firstCarCoordinateY = firstCarCoordinateY - scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
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
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX - scale,secondCarCoordinateY);
   secondCarCoordinateX = secondCarCoordinateX - scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
  jeDobrePoradie();

}

function jeDobrePoradie()
{
  if( secondCarCoordinateX < 0 & firstCarCoordinateY < 0 & poradie.size == 2)
  {
    
   var iterator1 = poradie.values();
   if(iterator1.next().value == 1)
   {
    document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka vyriešená správne, žlté auto dáva prednosť pravej ruky modrému';
   }
   else
   {
     document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka vyriešená nesprvívne <br> Nápoveda: Aplikuj pravidlo pravej ruky';
   }
   
 } 
}


function getMovement(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
 if( x >= firstCarCoordinateX & x <= firstCarCoordinateX +40 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 60 )
 {
  window.requestAnimationFrame(stepWithFirstCar);
  poradie.add(2);
  console.log(poradie);

 }

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 60 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 30 )
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
  firstCarCoordinateX = 240;
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 105;
  stepWithSecondCar();
  setTimeout(stepWithFirstCar, 3000);
  
}


// Funkcia na framy ktore budeme potrebovat ked budeme potrebovat tocit s autom 
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * width, frameY * height, width, height,
//                 canvasX, canvasY, scaledWidth, scaledHeight);
// }

// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;