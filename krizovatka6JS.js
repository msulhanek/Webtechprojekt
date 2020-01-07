let img = new Image();
img.src="Krizovatka5.png";
let imgAuto = new Image();
imgAuto.src= "auto1.png";
imgAuto.id = 'auto1';

let imgAuto10 = new Image();
imgAuto10.src = "auto2.png"

let imgAuto3 = new Image();
imgAuto3.src= "auto3.png";

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 210;
firstCarCoordinateY = 20;

secondCarCoordinateX = 90;
secondCarCoordinateY = 133;

thirdCarCoordinateX = 210;
thirdCarCoordinateY = 170;

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

imgAuto3.onload = function()
{
  init();
};


function init() {
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);


} 


let frameCount = 0;

function stepWithFirstCar() {
  while(firstCarCoordinateY < 220)
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
  ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
   firstCarCoordinateY = firstCarCoordinateY + scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
  jeDobrePoradie();
}

function stepWithSecondCar() {
  while(secondCarCoordinateX < 450)
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
  ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
   secondCarCoordinateX = secondCarCoordinateX + scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
  jeDobrePoradie();

}
function stepWithThirdCar() {
  while(thirdCarCoordinateY >-50)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithThirdCar);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY - scale);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
   thirdCarCoordinateY = thirdCarCoordinateY - scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
  jeDobrePoradie();
}

function jeDobrePoradie()
{
    if(secondCarCoordinateX > 300){
        document.getElementById('vylustenieKrizovatky').innerHTML = "Krizovatka nebola vyriešená správne, autá sa musia riadiť semafórmy";
    }
  if(  firstCarCoordinateY > 0 & thirdCarCoordinateY < 80 & poradie.size == 2)
  {
    
   var pole =[];
   var i=0;
   for(var it = poradie.values(), val = null; val = it.next().value;){
    pole[i] = val;
    i++;
}
console.log(pole);
   if(pole[0]==3 & pole[1]==2|pole[0]==2 & pole[1]==3)
   {
    document.getElementById('vylustenieKrizovatky').innerHTML = 'Križovatka vyriešená správne, obe autá so zelenou prejdú súčastne';
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

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 60 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 )
 {
   window.requestAnimationFrame(stepWithSecondCar);
   poradie.add(1);
   console.log(poradie);
 }
 if( x >= thirdCarCoordinateX + 20 & x <= thirdCarCoordinateX + 50 & y >= thirdCarCoordinateY & y <= thirdCarCoordinateY + 90 )
 {
   window.requestAnimationFrame(stepWithThirdCar);
   poradie.add(3);
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
  firstCarCoordinateX = 210;
  firstCarCoordinateY = 20;
  
  secondCarCoordinateX = 90;
  secondCarCoordinateY = 133;
  
  thirdCarCoordinateX = 210;
  thirdCarCoordinateY = 170;
  stepWithThirdCar();
  setTimeout(stepWithFirstCar,30);

  
}


// Funkcia na framy ktore budeme potrebovat ked budeme potrebovat tocit s autom 
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * width, frameY * height, width, height,
//                 canvasX, canvasY, scaledWidth, scaledHeight);
// }

// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;