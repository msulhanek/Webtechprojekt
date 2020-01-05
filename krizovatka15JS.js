let img = new Image();
img.src="Krizovatka1.png";
let imgAuto = new Image();
imgAuto.src= "auto6.png";
imgAuto.id = 'auto6';

let imgAuto10 = new Image();
imgAuto10.src = "auto10.png";

let imgAuto2 = new Image();
imgAuto2.src = "auto10.png";

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 230;
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 100;

thirdCarCoordinateX = 100;
thirdCarCoordinateY = 130;

var poradie = [];

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

imgAuto2.onload = function(){
    init();
}


function init() {
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto2,thirdCarCoordinateX, thirdCarCoordinateY);
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
  ctx.drawImage(imgAuto2,thirdCarCoordinateX, thirdCarCoordinateY);
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
  ctx.drawImage(imgAuto2,thirdCarCoordinateX, thirdCarCoordinateY);
   secondCarCoordinateX = secondCarCoordinateX - scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
  jeDobrePoradie();

}

function stepWithThirdCar(){
    while(thirdCarCoordinateX < 460)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithThirdCar);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX ,secondCarCoordinateY);
  ctx.drawImage(imgAuto2,thirdCarCoordinateX + scale, thirdCarCoordinateY);
   thirdCarCoordinateX = thirdCarCoordinateX + scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
  jeDobrePoradie();

}

function jeDobrePoradie(){

  if( secondCarCoordinateX < 0 & firstCarCoordinateY < 0 & thirdCarCoordinateX > 400 & poradie.length == 3){
    
   var iterator1 = poradie.values();
   
   console.log(poradie[2]);
   if(poradie[1]==1 & poradie[2]==3){
    document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka Vylustena spravne';
     console.log("krizovatka vyriesena spravne");
   }
   else{
     console.log("Krizovatka vyriesena nespravne");
     document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka Vylustena nespravne';
   }
   
 } 
}


function getMovement(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 

 if( x >= firstCarCoordinateX & x <= firstCarCoordinateX +40 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 30 ){
  window.requestAnimationFrame(stepWithFirstCar);
  poradie.push(1);
 }

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 40 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 ){
   window.requestAnimationFrame(stepWithSecondCar);
   poradie.push(2);
 }

 if( x >= thirdCarCoordinateX & x <= thirdCarCoordinateX + 40 & y >= thirdCarCoordinateY & y <= thirdCarCoordinateY + 40 ){
   window.requestAnimationFrame(stepWithThirdCar);
   poradie.push(3);
 }
}

let canvasElem = document.querySelector("canvas"); 

canvasElem.addEventListener("mousedown", function(e) 
{ 
  getMovement(canvasElem, e); 
}); 

function demoFunction()
{
  stepWithSecondCar();
  setTimeout(stepWithFirstCar, 1000);
  setTimeout(stepWithThirdCar, 2000);
}


// Funkcia na framy ktore budeme potrebovat ked budeme potrebovat tocit s autom 
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * width, frameY * height, width, height,
//                 canvasX, canvasY, scaledWidth, scaledHeight);
// }

// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;