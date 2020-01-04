let img = new Image();
img.src = 'C:\Users\micha\Desktop\Auto1.png';
img.onload = function() {
  init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function init() {
    ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18);
}