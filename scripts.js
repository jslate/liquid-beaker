var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function Dot(x, y, angle, canvasWidth, canvasHeight) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  this.move = function() {
    if (this.x >= this.canvasWidth - 20 || this.x <= 0 + 20) {
      this.angle = 180 - this.angle;
    } 
    if (this.y >= this.canvasHeight - 50 || this.y <= 0 + 20) {
      this.angle = 360 - this.angle;
    } 

    radians = this.angle*(Math.PI/180)
    xdiff = Math.cos(radians)*5;
    ydiff = Math.sin(radians)*5;
    this.x = this.x + xdiff;
    this.y = this.y + ydiff;
  };
};

function draw(canvas, ctx, dots) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = dots.length - 1; i >= 0; i--) {
    ctx.beginPath();
    ctx.arc(dots[i].x,dots[i].y,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.fillStyle = '#0000aa';
  };
}

function r(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

var dots = [];
for (var i = 200; i >= 0; i--) {
  dots.push(new Dot(r(20, canvas.width - 20), r(20, canvas.height - 50), r(0, 360), canvas.width, canvas.height));
};

draw(canvas, ctx, dots);
setInterval(function() { 
  for (var i = 0; i < dots.length; i++) {
    dots[i].move();
  };
  draw(canvas, ctx, dots);
}, 30);