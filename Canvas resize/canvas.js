/@import canvas/;

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function Circle(x, y, xvel, yvel, radius) {
  this.x = x;
  this.y = y;
  this.xvel = xvel;
  this.yvel = yvel;
  this.radius = radius;

  //colors
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let a = Math.random();

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(${r},${g},${b}, ${a})`;
    ctx.fill();
  };

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.xvel = -this.xvel;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.yvel = -this.yvel;
    }
    this.x += this.xvel;
    this.y += this.yvel;

    this.draw();
  };
}


var circleArray = [];
for (let i = 0; i < 70; i++) {
  var radius = 30;
  var x = Math.random() * (innerWidth - radius*2) + radius;
  var y = Math.random() * (innerHeight - radius*2) + radius;
  var xvel = (Math.random() - 0.5) * 3;
  var yvel = (Math.random() - 0.5) * 3;

  circleArray.push(new Circle(x, y, xvel, yvel, radius));
}
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
