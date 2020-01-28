const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = (window.innerWidth * .9);
canvas.height = (window.innerHeight * .7);
ctx.strokeStyle = "#0490b3";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let random = false;

// DRAWING PATH
function draw(e) {

  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];



  // RANDOM BUTTON ACTION
  if (random) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 30%)`;

    hue++;
    if (hue >= 360) {
      hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 30) {
      direction = !direction;
    }
    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  }

}

// START DRAWING
function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}



// STOP DRAWING
function stopDrawing() {
  isDrawing = false;
}

// BUTTON ACTIONS
function pickColour(value) {
  random = false;
  ctx.strokeStyle = value;
}

function pickSize(value) {
  random = false;
  ctx.lineWidth = value;
}

// EVENT LISTENER FOR MOUSE

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// EVENT LISTENER FOR TOUCH
canvas.addEventListener("touchstart", function (e) {
  touchPos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}