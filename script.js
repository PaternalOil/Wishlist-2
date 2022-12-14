var ctx = document.getElementById("canvas").getContext("2d");
ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

var x = 0;
var y = 0;

function drawCircle(x, y, radius, alpha)
{
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = 'white';
  ctx.fill();
}
// were they bad?