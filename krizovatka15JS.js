let img = new Image();
img.src="Krizovatka1.png";
let imgAuto = new Image();
imgAuto.src= "auto3.png";

let imgAuto10 = new Image();
imgAuto10.src = "auto10.png";

let imgAuto2 = new Image();
imgAuto2.src = "auto2.png";

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 210;
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 106;

thirdCarCoordinateX = 100;
thirdCarCoordinateY = 135;

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

   if(pole[1] == 1 & pole[2] == 3){
    document.getElementById('vylustenieKrizovatky').innerHTML = 'Križovatka vyriešená správne, aplikuje sa pravidlo pravej ruky';
   }
   else{
     document.getElementById('vylustenieKrizovatky').innerHTML = 'Križovatka nebola vyriešená správne <br> Nápoveda: Aplikuj pravidlo pravej ruky';
   }
   
 } 
}


function getMovement(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 

 if( x >= firstCarCoordinateX +20 & x <= firstCarCoordinateX +60 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 60 ){
  window.requestAnimationFrame(stepWithFirstCar);
  poradie.add(1);
 }

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 60 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 ){
   window.requestAnimationFrame(stepWithSecondCar);
   poradie.add(2);
 }

 if( x >= thirdCarCoordinateX & x <= thirdCarCoordinateX + 60 & y >= thirdCarCoordinateY & y <= thirdCarCoordinateY + 40 ){
   window.requestAnimationFrame(stepWithThirdCar);
   poradie.add(3);
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
firstCarCoordinateY = 200;

secondCarCoordinateX = 310;
secondCarCoordinateY = 106;

thirdCarCoordinateX = 100;
thirdCarCoordinateY = 135;
  stepWithSecondCar();
  setTimeout(stepWithFirstCar, 1000);
  setTimeout(stepWithThirdCar, 2000);
}