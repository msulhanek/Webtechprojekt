let img = new Image();
img.src="Krizovatka4.png";
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

  if( secondCarCoordinateX < 0 & firstCarCoordinateY < 0 & thirdCarCoordinateX > 400 & poradie.size == 3){

      var pole = [];
      var i = 0;
   for(var it = poradie.values(), val = null; val = it.next().value;){
       pole[i] = val;
       i++;
   }

   if(pole[1] == 2 & pole[2] == 3 | pole[1] == 3 & pole[2] == 2){
    document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka Vylustena spravne, auta sa riadia dopravným značením';
   }
   else{
     document.getElementById('vylustenieKrizovatky').innerHTML = 'Križovatka nebola vyriešená správne <br> Nápoveda: Skontroluj dopravné značenie';
   }
   
 } 
}


function getMovement(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 

 if( x >= firstCarCoordinateX & x <= firstCarCoordinateX +40 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 30 ){
  window.requestAnimationFrame(stepWithFirstCar);
  poradie.add(1);
 }

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 40 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 ){
   window.requestAnimationFrame(stepWithSecondCar);
   poradie.add(2);
 }

 if( x >= thirdCarCoordinateX & x <= thirdCarCoordinateX + 40 & y >= thirdCarCoordinateY & y <= thirdCarCoordinateY + 40 ){
   window.requestAnimationFrame(stepWithThirdCar);
   poradie.add(3);
 }
}

let canvasElem = document.querySelector("canvas"); 

canvasElem.addEventListener("mousedown", function(e) 
{ 
  getMovement(canvasElem, e); 
}); 

function demoFunction(){

    stepWithFirstCar();
    setTimeout(stepWithSecondCar, 1500);
    setTimeout(stepWithThirdCar, 1500);
}


// Funkcia na framy ktore budeme potrebovat ked budeme potrebovat tocit s autom 
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * width, frameY * height, width, height,
//                 canvasX, canvasY, scaledWidth, scaledHeight);
// }

// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;