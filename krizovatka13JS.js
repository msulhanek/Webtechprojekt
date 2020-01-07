let img = new Image();
img.src="Krizovatka4.png";
let imgAuto = new Image();
imgAuto.src= "zatacajuceAuto3.png";

let imgAuto10 = new Image();
imgAuto10.src = "auto10.png";

let imgAuto2 = new Image();
imgAuto2.src = "auto6otocene.png";

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 225;
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 106;

thirdCarCoordinateX = 213;
thirdCarCoordinateY = 0;

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
  drawFrame(cycleLoop[currentLoopIndex],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto2,thirdCarCoordinateX, thirdCarCoordinateY);
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

const cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7];
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
  if(firstCarCoordinateY > 135){
    if((firstCarCoordinateY <= 180 & firstCarCoordinateY >= 170 )
    | (firstCarCoordinateY <= 150 & firstCarCoordinateY >= 140 ) )
    {
        currentLoopIndex = 0;
    }

    else
    {
        currentLoopIndex = 1;
    }
    firstCarCoordinateY = firstCarCoordinateY - scale;
}


if(firstCarCoordinateY <= 135 & firstCarCoordinateY > 90){
firstCarCoordinateY = firstCarCoordinateY - scale;
firstCarCoordinateX = firstCarCoordinateX - scale;
if(firstCarCoordinateY == 140 | firstCarCoordinateY == 130  | firstCarCoordinateY == 122 | firstCarCoordinateY == 110 | firstCarCoordinateY == 102)
{
    currentLoopIndex++;
}
}

if(firstCarCoordinateY <= 90)
{
    currentLoopIndex = 6;
    firstCarCoordinateX = firstCarCoordinateX - scale;
    
}
  
  }
  currentLoopIndex = 6;
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
   thirdCarCoordinateY = thirdCarCoordinateY + scale;
  
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
    document.getElementById('vylustenieKrizovatky').innerHTML = 'Križovatka vyriešená správne, autá sa riadia dopravným značením, žlté dostáva prednosť od vľavo odbočujúceho červeného';
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

 if( x >= firstCarCoordinateX & x <= firstCarCoordinateX +40 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 60 ){
  window.requestAnimationFrame(stepWithFirstCar);
  poradie.add(1);
 }

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 80 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 ){
   window.requestAnimationFrame(stepWithSecondCar);
   poradie.add(2);
 }

 if( x >= thirdCarCoordinateX & x <= thirdCarCoordinateX + 40 & y >= thirdCarCoordinateY & y <= thirdCarCoordinateY + 80 ){
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
  firstCarCoordinateX = 225;
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 106;

thirdCarCoordinateX = 213;
thirdCarCoordinateY = 0;
currentLoopIndex = 0;

    stepWithThirdCar();
    setTimeout(stepWithFirstCar, 1500);
    setTimeout(stepWithSecondCar, 2500);
}
