let img = new Image();
img.src="Krizovatka6.png";
let imgAuto = new Image();
imgAuto.src= "zatacajuceAuto4.png";

let imgAuto10 = new Image();
imgAuto10.src = "zatacajuceAuto2.png"

let canvas = document.getElementById('Canvas1');
let ctx = canvas.getContext('2d');

firstCarCoordinateX = 286;
firstCarCoordinateY = 260;

secondCarCoordinateX = 400;
secondCarCoordinateY = 110;

var poradie = new Set();

const scale = 1;


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
  drawFrameCarFromBottom(cycleLoopForBottomCar[ currentLoopIndexForBottomCar],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,secondCarCoordinateX,secondCarCoordinateY);
} 


let frameCount = 0;

const widthForBottomCar = 60;
const heightForBottomCar = 60;

const widthForRightCar = 70;
const heightForRightCar = 70;

const scaledWidthForBottomCar = scale * widthForBottomCar;
const scaledHeight = scale * heightForBottomCar;

function drawFrameCarFromBottom(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(imgAuto,
                frameX * widthForBottomCar, 0, widthForBottomCar, heightForBottomCar,
                canvasX, canvasY, widthForBottomCar, heightForBottomCar);
                
}

function drawFrameCarFromRight(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(imgAuto10,
                  frameX * widthForRightCar, 0, widthForRightCar, heightForRightCar,
                  canvasX, canvasY, widthForRightCar, heightForRightCar);
                  
  }

const cycleLoopForBottomCar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let currentLoopIndexForBottomCar = 0;
let currentDirection = 0;

function stepWithFirstCar() {
    
    while(firstCarCoordinateX > -100   )
    {
    frameCount++;
    if (frameCount < 2) {
      window.requestAnimationFrame(stepWithFirstCar);
      return;
    }


    frameCount = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img,0,0);

    drawFrameCarFromBottom(cycleLoopForBottomCar[ currentLoopIndexForBottomCar],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
    drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,secondCarCoordinateX,secondCarCoordinateY);

        if(firstCarCoordinateY > 230){
            
            firstCarCoordinateY = firstCarCoordinateY - scale;
        }



        if(firstCarCoordinateY <= 230 & firstCarCoordinateY >=  135){
        firstCarCoordinateY = firstCarCoordinateY - scale;
        if(firstCarCoordinateY % 2 == 0)
        {
          firstCarCoordinateX = firstCarCoordinateX + scale;
        }
       
        
    
        
        if(firstCarCoordinateY == 229  )
        {
            currentLoopIndexForBottomCar++;
        }

        if(firstCarCoordinateY == 204  )
        {
            currentLoopIndexForBottomCar++;
        }

        if(firstCarCoordinateY == 184  )
        {
            currentLoopIndexForBottomCar++;
        }

        if(firstCarCoordinateY == 174  )
        {
            currentLoopIndexForBottomCar++;
        }

        if(firstCarCoordinateY == 160  )
        {
            currentLoopIndexForBottomCar++;
        }

        if(firstCarCoordinateY == 155  )
        {
            currentLoopIndexForBottomCar++;
        }

        if(firstCarCoordinateY == 145  )
        {
            currentLoopIndexForBottomCar++;
        }
        if(firstCarCoordinateY == 135  )
        {
            currentLoopIndexForBottomCar++;
        }


    }
        if(firstCarCoordinateY < 135 & firstCarCoordinateY > 50){
          firstCarCoordinateY = firstCarCoordinateY - scale;
          if(firstCarCoordinateY % 2 == 0)
          {
            firstCarCoordinateX = firstCarCoordinateX - scale;
          }

          



          if  (firstCarCoordinateY % 10 == 0)
          {
            currentLoopIndexForBottomCar++;
          }
        }


        if(firstCarCoordinateY <= 50)
        {
            
            firstCarCoordinateY = firstCarCoordinateY - scale;

            if((firstCarCoordinateY  == 40) | firstCarCoordinateY  == 20 )
            {
              currentLoopIndexForBottomCar = 16;
            }

            else
            {
              currentLoopIndexForBottomCar = 15;
            }

            
            
        }
    }
    currentLoopIndexForBottomCar = 0;
    jeDobrePoradie();
    
  }

  
const cycleLoopForRightCar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let currentLoopIndexForRightCar = 1;


function stepWithSecondCar() {

  while(secondCarCoordinateY > -100)
  {
  frameCount++;
  if (frameCount < 2) {
    window.requestAnimationFrame(stepWithSecondCar);
    return;
  }
  frameCount = 0;


  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img,0,0);
  drawFrameCarFromBottom(cycleLoopForBottomCar[ currentLoopIndexForBottomCar],currentDirection,firstCarCoordinateX,firstCarCoordinateY);
  

         if(secondCarCoordinateX > 343){
            secondCarCoordinateX = secondCarCoordinateX - scale;
         }



       if(secondCarCoordinateX <= 343 & secondCarCoordinateX > 282){
        if(secondCarCoordinateX == 342)
            currentLoopIndexForRightCar++;
        secondCarCoordinateX = secondCarCoordinateX - scale;
        
        secondCarCoordinateY = secondCarCoordinateY - scale;
         if(secondCarCoordinateX == 338)
        {
            currentLoopIndexForRightCar++;
        }
        if(secondCarCoordinateX == 335)
        {
            currentLoopIndexForRightCar++;
        }

        if(secondCarCoordinateX == 328)
        {
            currentLoopIndexForRightCar++;
            
        }
        if(secondCarCoordinateX == 321)
        {
            currentLoopIndexForRightCar++;
        }
        if(secondCarCoordinateX == 316)
        {
            currentLoopIndexForRightCar++;
           
        }

        if(secondCarCoordinateX == 308)
        {
            currentLoopIndexForRightCar++;
            
        }

        if(secondCarCoordinateX == 302)
        {
            currentLoopIndexForRightCar++;
            
        }
        if(secondCarCoordinateX == 290)
        {
            currentLoopIndexForRightCar++;
            
        }

        // if(secondCarCoordinateX <= 343 & secondCarCoordinateX > 284 & (secondCarCoordinateX % 9 == 0 ))
        // {
        //     currentLoopIndexForRightCar++;
        // }
  
    }

        if(secondCarCoordinateX <= 282)
        {
            if((secondCarCoordinateY <= 70 & secondCarCoordinateY >= 60)
             | (secondCarCoordinateY <= 50 & secondCarCoordinateY >= 40) 
             | (secondCarCoordinateY <= 30 & secondCarCoordinateY >= 20) )
             {
                 currentLoopIndexForRightCar = 9;
             }
             else{
                currentLoopIndexForRightCar = 10;
             }
            


            secondCarCoordinateY = secondCarCoordinateY - scale;
            
        }

        drawFrameCarFromRight(cycleLoopForRightCar[ currentLoopIndexForRightCar],currentDirection,secondCarCoordinateX,secondCarCoordinateY);

  
  }
  currentLoopIndexForRightCar = 0;
  jeDobrePoradie();
  stepWithFirstCar();

}

function jeDobrePoradie()
{
  if( secondCarCoordinateY < 30 & firstCarCoordinateY < 30 & poradie.size == 2)
  {

    document.getElementById('vylustenieKrizovatky').innerHTML = 'Krizovatka Vylustena spravne';
     console.log("Krizovatka vyriesena spravne");
 } 
}


function getMovement(canvas, event) { 
  let rect = canvas.getBoundingClientRect(); 
  let x = event.clientX - rect.left; 
  let y = event.clientY - rect.top; 
 if( x >= firstCarCoordinateX & x <= firstCarCoordinateX +40 & y >= firstCarCoordinateY & y <= firstCarCoordinateY + 40 
  | x >= secondCarCoordinateX & x <= secondCarCoordinateX + 70 & y >= secondCarCoordinateY & y <= secondCarCoordinateY + 40)
 {
  document.getElementById('vylustenieKrizovatky').innerHTML = 'Nezáleží na tom, kde sa klikne. Auta cez križovatku prejdú paralelne';
  window.requestAnimationFrame(stepWithFirstCar);
  window.requestAnimationFrame(stepWithSecondCar);
  poradie.add(2);
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
  firstCarCoordinateX = 286;
  firstCarCoordinateY = 260;
  
  secondCarCoordinateX = 400;
  secondCarCoordinateY = 110;
  stepWithSecondCar();
 
  

  setTimeout(stepWithFirstCar, 400 );


}

