let img = new Image();
img.src="Krizovatka7.png";
let imgAuto = new Image();
imgAuto.src= "auto1.png";
imgAuto.id = 'auto1';

let imgAuto10 = new Image();
imgAuto10.src = "auto2.png"

let imgAuto3 = new Image();
imgAuto3.src= "auto3.png";

let chodec = new Image();
chodec.src = "chodec4.png";

let imgAuto4 = new Image();
imgAuto4.src = "zatacajuceAuto2.png"

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 210;
firstCarCoordinateY = 20;

secondCarCoordinateX = 90;
secondCarCoordinateY = 133;

thirdCarCoordinateX = 210;
thirdCarCoordinateY = 170;

chodecCoordinateX = 272;
chodecCoordinateY = 110 ;

const widthForRightCar = 70;
const heightForRightCar = 70;

forthCarCoordinateX = 330;
forthCarCoordinateY = 90;

const widthForBottomCar = 60;
const heightForBottomCar = 60;

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

chodec.onload = function(){
    init();
}

imgAuto4.onload = function()
{
  init();
};

function drawFrameCarFromRight(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(imgAuto4,
                  frameX * widthForRightCar, 0, widthForRightCar, heightForRightCar,
                  canvasX, canvasY, widthForRightCar, heightForRightCar);
                  
  }

  function drawFrameCarFromBottom(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(imgAuto,
                  frameX * widthForBottomCar, 0, widthForBottomCar, heightForBottomCar,
                  canvasX, canvasY, widthForBottomCar, heightForBottomCar);
                  
  }


function init() {
  ctx.drawImage(img,0,0);
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
  ctx.drawImage(chodec,chodecCoordinateX,chodecCoordinateY);  
  drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,forthCarCoordinateX,forthCarCoordinateY);  
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
  ctx.drawImage(chodec,chodecCoordinateX,chodecCoordinateY);
  drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,forthCarCoordinateX,forthCarCoordinateY)
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
  ctx.drawImage(chodec,chodecCoordinateX,chodecCoordinateY);
  drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,forthCarCoordinateX,forthCarCoordinateY);
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
  ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
  ctx.drawImage(imgAuto10,secondCarCoordinateX,secondCarCoordinateY);
  ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
  ctx.drawImage(chodec,chodecCoordinateX,chodecCoordinateY);
  drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,forthCarCoordinateX,forthCarCoordinateY);
   thirdCarCoordinateY = thirdCarCoordinateY - scale;
  

  // if (currentLoopIndex >= cycleLoop.length) {
  //   currentLoopIndex = 0;
  // }
  }
  jeDobrePoradie();
}

function stepWithWalker() {
    while(chodecCoordinateY < 240)
    {
    frameCount++;
    if (frameCount < 2) {
      window.requestAnimationFrame(stepWithWalker);
      return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img,0,0);
    ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
    ctx.drawImage(imgAuto10,secondCarCoordinateX - scale,secondCarCoordinateY);
    ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
    ctx.drawImage(chodec,chodecCoordinateX,chodecCoordinateY);
    drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,forthCarCoordinateX,forthCarCoordinateY);
     chodecCoordinateY=chodecCoordinateY+ scale;
    
  
    // if (currentLoopIndex >= cycleLoop.length) {
    //   currentLoopIndex = 0;
    // }
    }
    jeDobrePoradie();
  
  }

  const cycleLoopForRightCar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentLoopIndexForRightCar = 0;
const cycleLoopForBottomCar = [0, 1, 2, 3, 4, 5, 6, 7];
let currentLoopIndexForBottomCar = 0;
let currentDirection = 0;


function stepWithForthCar() {
    while(forthCarCoordinateY > -100)
    {
    frameCount++;
    if (frameCount < 2) {
      window.requestAnimationFrame(stepWithForthCar);
      return;
    }
    frameCount = 0;
  
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img,0,0);
    drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,forthCarCoordinateX,forthCarCoordinateY);
    ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
    ctx.drawImage(imgAuto10,secondCarCoordinateX - scale,secondCarCoordinateY);
    ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
    ctx.drawImage(chodec,chodecCoordinateX,chodecCoordinateY);
  
           if(forthCarCoordinateX > 234){
            forthCarCoordinateX = forthCarCoordinateX - scale;
              if((forthCarCoordinateX <= 320 & forthCarCoordinateX >= 310) | (forthCarCoordinateX <= 290 & forthCarCoordinateX >= 280)
              | (forthCarCoordinateX <= 270 & forthCarCoordinateX >= 260)| (forthCarCoordinateX <= 240 & forthCarCoordinateX >= 230)  )
              {
                  currentLoopIndexForRightCar = 1;
              }
  
              else
              {
                  currentLoopIndexForRightCar = 0;   
              }
          }
  
  
         if(forthCarCoordinateX <= 234 & forthCarCoordinateX > 216){
            forthCarCoordinateX = forthCarCoordinateX - scale;
          forthCarCoordinateY = forthCarCoordinateY - scale;
          if(forthCarCoordinateX <= 234 & forthCarCoordinateX > 216)
          {
              currentLoopIndexForRightCar++;
          }
      }
  
          if(forthCarCoordinateX <= 216)
          {
              if((forthCarCoordinateY <= 70 & forthCarCoordinateY >= 60)
               | (forthCarCoordinateY <= 50 & forthCarCoordinateY >= 40) 
               | (forthCarCoordinateY <= 30 & forthCarCoordinateY >= 20) )
               {
                   currentLoopIndexForRightCar = 9;
               }
               else{
                  currentLoopIndexForRightCar = 10;
               }
              
  
  
               forthCarCoordinateY = forthCarCoordinateY - scale;
              
          }
  
    
    }
    currentLoopIndexForRightCar = 0;
    jeDobrePoradie();
  
  
}
//   while(forthCarCoordinateX > -100)
//   {
//   frameCount++;
//   if (frameCount < 2) {
//     window.requestAnimationFrame(stepWithForthCar);
//     return;
//   }
//   frameCount = 0;


//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(img,0,0);
//   drawFrameCarFromBottom(cycleLoopForBottomCar[ currentLoopIndexForBottomCar],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
//   drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,forthCarCoordinateX,secondCarCoordinateY);
//   ctx.drawImage(imgAuto,firstCarCoordinateX,firstCarCoordinateY);
//   ctx.drawImage(imgAuto10,secondCarCoordinateX - scale,secondCarCoordinateY);
//   ctx.drawImage(imgAuto3,thirdCarCoordinateX,thirdCarCoordinateY);
//   ctx.drawImage(chodec,chodecCoordinateX,chodecCoordinateY);

//          if(forthCarCoordinateX > 234){
//             forthCarCoordinateX = forthCarCoordinateX - scale;
//             if((forthCarCoordinateX <= 320 & forthCarCoordinateX >= 310) | (forthCarCoordinateX <= 290 & forthCarCoordinateX >= 280)
//             | (forthCarCoordinateX <= 270 & forthCarCoordinateX >= 260)| (forthCarCoordinateX <= 240 & forthCarCoordinateX >= 230)  )
//             {
//                 currentLoopIndexForRightCar = 1;
//             }

//             else
//             {
//                 currentLoopIndexForRightCar = 0;   
//             }
//         }


//        if(forthCarCoordinateX <= 234 & forthCarCoordinateX > 216){
//         forthCarCoordinateX = forthCarCoordinateX - scale;
//         forthCarCoordinateX = forthCarCoordinateX - scale;
//         if(forthCarCoordinateX <= 234 & forthCarCoordinateX > 216)
//         {
//             currentLoopIndexForRightCar++;
//         }
//     }

//         if(forthCarCoordinateY <= 216)
//         {
//             if((forthCarCoordinateY <= 70 & forthCarCoordinateY >= 60)
//              | (forthCarCoordinateY <= 50 & forthCarCoordinateY >= 40) 
//              | (forthCarCoordinateY <= 30 & forthCarCoordinateY >= 20) )
//              {
//                  currentLoopIndexForRightCar = 9;
//              }
//              else{
//                 currentLoopIndexForRightCar = 10;
//              }
            


//              forthCarCoordinateY = forthCarCoordinateY - scale;
            
//         }

  
//   }
//   currentLoopIndexForRightCar = 0;
//   jeDobrePoradie();

// }


function jeDobrePoradie()
{   if(secondCarCoordinateX > 300){
    document.getElementById('vylustenieKrizovatky').innerHTML = "Krizovatka vylustena zle, zlty dostava pokutu";
}
    if(poradie.size==4){
        console.log("preslo mi to do ifu");
        let pole = Array.from(poradie);
    
 
     if((pole[0] ==2 | pole[1]==2 | pole[2]==2) & (pole[0] ==4 | pole[1]==4 | pole[2]==4) & (pole[0] ==3 | pole[1]==3 | pole[2]==3) & pole[3]==5){
        document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka Vylustena spravne';
        console.log("krizovatka vyriesena spravne");
     }
     else {
         document.getElementById('vylustenieKrizovatky').innerHTML = 'Nespravne, pozri semafory + navod';
     }
     console.log(pole);
    }

    else{
        console.log("Zlyhalo");
    }


//     if(forthCarCoordinateX > 300){
//         document.getElementById('vylustenieKrizovatky').innerHTML = "Krizovatka vylustena zle, zlty dostava pokutu";
//     }
//   if(  firstCarCoordinateY > 0 & thirdCarCoordinateY < 80 & poradie.size == 2)
//   {
    
//    var pole =[];
//    var i=0;
//    for(var it = poradie.values(), val = null; val = it.next().value;){
//     pole[i] = val;
//     i++;
// }
// console.log(pole);
//    if(pole[0]==3 & pole[1]==2)
//    {
//     document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka Vylustena spravne';
//      console.log("krizovatka vyriesena spravne");
//    }
//    else if(pole[0]==2 & pole[1]==3)
//    {
//     document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka Vylustena spravne';
//      console.log("krizovatka vyriesena spravne");
//    }

   
//   }
}
currentDirection = 0;

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

 if( x >= secondCarCoordinateX & x <= secondCarCoordinateX + 70 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40 )
 {
   window.requestAnimationFrame(stepWithSecondCar);
   poradie.add(1);
   console.log(poradie);
 }
 if( x >= thirdCarCoordinateX & x <= thirdCarCoordinateX + 40 & y >= thirdCarCoordinateY & y <= thirdCarCoordinateY + 80 )
 {
   window.requestAnimationFrame(stepWithThirdCar);
   poradie.add(3);
   console.log(poradie);
 }
 if( x >= chodecCoordinateX & x <= chodecCoordinateX + 40 & y >= chodecCoordinateY & y <= chodecCoordinateY + 40 )
 {
   window.requestAnimationFrame(stepWithWalker);
   poradie.add(4);
   console.log(poradie);
 }
 if( x >= forthCarCoordinateX & x <= forthCarCoordinateX + 70 & y >= forthCarCoordinateY & y <= forthCarCoordinateY + 40 )
 {
   window.requestAnimationFrame(stepWithForthCar);
   poradie.add(5);
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
    
    chodecCoordinateX = 272;
    chodecCoordinateY = 110 ;

    forthCarCoordinateX = 330;
    forthCarCoordinateY = 90;
  stepWithThirdCar();
  stepWithFirstCar();
  stepWithWalker();
  setTimeout(stepWithForthCar,3000);

}


// Funkcia na framy ktore budeme potrebovat ked budeme potrebovat tocit s autom 
// function drawFrame(frameX, frameY, canvasX, canvasY) {
//   ctx.drawImage(img,
//                 frameX * width, frameY * height, width, height,
//                 canvasX, canvasY, scaledWidth, scaledHeight);
// }

// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;
