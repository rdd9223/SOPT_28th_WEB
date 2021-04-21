const ctx = document.getElementById("canvas").getContext("2d");

function drawRect() {
  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 200, 200);
  ctx.strokeStyle = "black";
  ctx.strokeRect(50, 50, 200, 200);
  ctx.clearRect(200, 200, 50, 50);
}

drawRect();
