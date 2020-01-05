let img = new Image();
img.src = "/images/krizovatka1.png";
let imgAuto = new Image();
imgAuto.src= "/images/Auto6.png";
imgAuto.id = 'auto6';

let imgAuto10 = new Image();
imgAuto10.src = "/images/Auto10.png"

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

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');




// function init() {
//     ctx.drawImage(img,0,0);
//     ctx.drawImage(imgAuto,230,200);
// }



const scale = 2;
const width = 66;
 height = 40;
const scaledWidth = scale * width;
const scaledHeight = scale * height;
let frameCount = 0;
// Funkcia na framy ktore budeme potrebovat ked budeme potrebovat tocit s autom 
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * width, frameY * height, width, height,
//                 canvasX, canvasY, scaledWidth, scaledHeight);
// }

// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;

function step() {
  frameCount++;
  if (frameCount < 5) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,230,200 - height);
  height = height+2;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }

  window.requestAnimationFrame(step);
}

function init() {
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,230,200);
  ctx.drawImage(imgAuto10,270,125);


} 


function getMousePosition(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
 if(x>230 & x< 270 & y>200 & y<240)
 {
  window.requestAnimationFrame(step);
 }
} 

let canvasElem = document.querySelector("canvas"); 

canvasElem.addEventListener("mousedown", function(e) 
{ 
  getMousePosition(canvasElem, e); 
  console.log(document.getElementById)
}); 
