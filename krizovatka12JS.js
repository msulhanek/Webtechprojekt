let img = new Image();
img.src="Krizovatka4.png";
let imgAuto = new Image();
imgAuto.src= "zatacajuceAuto1.png";

let imgAuto10 = new Image();
imgAuto10.src = "zatacajuceAuto2.png";

let imgAuto2 = new Image();
imgAuto2.src = "auto1.png";

let imgAuto3 = new Image();
imgAuto3.src = "auto2.png";


let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 225;
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 100;

thirdCarCoordinateX = 210;
thirdCarCoordinateY = 0;

fourthCarCoordinateX = 80;
fourthCarCoordinateY = 130;

var poradie = new Set();

const scale = 2;


img.onload = function() {
  init();
};

imgAuto.onload = function(){
  init();
};

imgAuto10.onload = function(){
  init();
};

imgAuto2.onload = function(){
    init();
}

imgAuto3.onload = function(){
    init();
}

function init() {
  ctx.drawImage(img,0,0);
  drawFrame(cycleLoop[currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto2,thirdCarCoordinateX, thirdCarCoordinateY);
  ctx.drawImage(imgAuto3,fourthCarCoordinateX,fourthCarCoordinateY);
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

const cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
  drawFrame(cycleLoop[currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto2,thirdCarCoordinateX, thirdCarCoordinateY);
  ctx.drawImage(imgAuto3,fourthCarCoordinateX,fourthCarCoordinateY);
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
  ctx.drawImage(imgAuto2,thirdCarCoordinateX, thirdCarCoordinateY);
  ctx.drawImage(imgAuto3,fourthCarCoordinateX,fourthCarCoordinateY);
   secondCarCoordinateX = secondCarCoordinateX - scale;
 
  }
  jeDobrePoradie();

}

function stepWithThirdCar(){
    while(thirdCarCoordinateY < 240)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithThirdCar);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  drawFrame(cycleLoop[ currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX ,secondCarCoordinateY);
  ctx.drawImage(imgAuto2,thirdCarCoordinateX + scale, thirdCarCoordinateY);
  ctx.drawImage(imgAuto3,fourthCarCoordinateX,fourthCarCoordinateY);
   thirdCarCoordinateY = thirdCarCoordinateY + scale;
  
  }
  jeDobrePoradie();

}

function stepWithFourthCar(){
    while(fourthCarCoordinateX < 450)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithFourthCar);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  drawFrame(cycleLoop[ currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX ,secondCarCoordinateY);
  ctx.drawImage(imgAuto2,thirdCarCoordinateX + scale, thirdCarCoordinateY);
  ctx.drawImage(imgAuto3,fourthCarCoordinateX,fourthCarCoordinateY);
   fourthCarCoordinateX = fourthCarCoordinateX + scale;
  
  }
  jeDobrePoradie();

}


function jeDobrePoradie(){
    console.log(secondCarCoordinateX, firstCarCoordinateX, thirdCarCoordinateY)
  if( secondCarCoordinateX < 0 & firstCarCoordinateX < 0 & thirdCarCoordinateY > 230 & poradie.size == 3){
      var pole = [];
      var i = 0;
   for(var it = poradie.values(), val = null; val = it.next().value;){
       pole[i] = val;
       i++;
   }
   

   if(pole[1] == 1 & pole[2] == 2){
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
 if( x >= fourthCarCoordinateX & x <= fourthCarCoordinateX + 40 & y >= fourthCarCoordinateY & y <= fourthCarCoordinateY + 40 ){
    window.requestAnimationFrame(stepWithFourthCar);
    poradie.add(4);
  }

}

let canvasElem = document.querySelector("canvas"); 

canvasElem.addEventListener("mousedown", function(e) 
{ 
  getMovement(canvasElem, e); 
}); 

function demoFunction(){

    stepWithThirdCar();
    setTimeout(stepWithFirstCar, 1500);
    setTimeout(stepWithSecondCar, 2500);
    setTimeout(stepWithFourthCar, 2500);
}
