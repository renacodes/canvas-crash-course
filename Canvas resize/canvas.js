/@import canvas/;

var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var red = Math.random() * 255;
var green = Math.random() * 180;
var blue = Math.random() * 255;

// //square

// ctx.fillStyle = 'rgba(150, 15, 45, 1)';
// ctx.fillRect(0, 0, 100, 100);
// ctx.fillStyle = "indianred";
// ctx.fillRect(50, 375, 100, 100);

// //line

// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(50, 200);
// ctx.strokeStyle = "#a54b25";
// ctx.stroke();

//arc/circle

// arc(x, y, degrees, start angle, end angle, draw counter clockwise)
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI*2, false);
// ctx.strokeStyle = "rgb(11, 8, 48)";
// ctx.stroke();

//função para gerar cores hex aleatórias/
// function randomColor() {
//     let code = "#";
//     const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
//     for (let a = 0; a < 6; a++) {
//       const randValue = values[Math.floor(Math.random() * values.length)];
//       code += randValue;
//     }
//     return code;
//   }

// for (let i = 0; i < 15; i++){
//     let x = Math.random() * window.innerWidth + 30;
//     let y = Math.random() * window.innerHeight + 30;
//     ctx.beginPath();
//     //mudar coordenadas com loop:
//     ctx.arc(x, y, 30, 0, Math.PI*2, false);
//     ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
//     ctx.stroke();
// }

//bouncing off 'walls'
//arc(x, y, degrees, start angle, end angle, draw counter clockwise)
//usar THIS para assinalar cada variável a um objeto diferente
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

//randomizar o valor de x e y, assim como a velocidade, para mover para todas as direções
//usar radius para voltar quando a borda atingir o limite, não o centro do circulo

var circleArray = [];
for (let i = 0; i < 100; i++) {
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
