const canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

const sizeSlider = document.querySelector("#size-slider");
const colors = document.querySelectorAll(".colors ul li");
const tools = document.querySelectorAll(".tool");
const fillColor = document.querySelector("#fill-color");
const colorPicker = document.querySelector("#colorPicker");
const clearCanvas = document.querySelector(".clear-canvas");
const saveImage = document.querySelector(".save-image");

const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
};

let isDrawing = false,
  brushWidth = 10,
  activeTool = "brush",
  prevMouseX,
  PrevMouseY,
  snapshot,
  selectedColor = "#000";

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const startDrawing = (e) => {
  prevMouseX = e.offsetX;
  PrevMouseY = e.offsetY;
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
};

const drawRectangle = (e) => {
  if (!fillColor.checked) {
    ctx.strokeRect(
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      PrevMouseY - e.offsetY
    );
  } else {
    ctx.fillRect(
      e.offsetX,
      e.offsetY,
      prevMouseX - e.offsetX,
      PrevMouseY - e.offsetY
    );
  }
};

let rad;
//some mistake
const drawCircle = (e) => {
  ctx.beginPath();
  rad = Math.sqrt(
    Math.pow(prevMouseX - e.offsetX, 2) + Math.pow(PrevMouseY - e.offsetY, 2)
  );
  ctx.arc(prevMouseX, PrevMouseY, rad, 0, 2 * Math.PI);
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

const drawTriangle = (e) => {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, PrevMouseY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
  ctx.closePath();
  fillColor.checked ? ctx.fill() : ctx.stroke();
};

const drawing = (e) => {
  if (activeTool === "brush"){
    canvas.style = "cursor: url('./icons/brush.svg') 1 12, pointer;";
  }
  if (activeTool === "eraser") {
    canvas.style = "cursor: url('./icons/eraser.svg') 1 12, pointer;";
  }
  if (isDrawing) {
    ctx.putImageData(snapshot, 0, 0);
    switch (activeTool) {
      case "brush":
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        break;
      case "eraser":
        ctx.strokeStyle = "#fff";
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        break;
      case "rectangle":
        drawRectangle(e);
        break;
      case "circle":
        drawCircle(e);
        break;
      case "triangle":
        drawTriangle(e);
        break;
    }
  }
};

const brushWidthChange = (e) => {
  brushWidth = +e.target.value;
};

sizeSlider.addEventListener("input", brushWidthChange);

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document
      .querySelector(".colors ul li.selected")
      .classList.remove("selected");
    color.classList.add("selected");
    selectedColor = window
      .getComputedStyle(color)
      .getPropertyValue("background-color");
  });
});

tools.forEach((tool) => {
  tool.addEventListener("click", () => {
    activeTool = tool.id;
    document.querySelector(".options .active").classList.remove("active");
    tool.querySelector("span").classList.add("active");
  });
});

colorPicker.addEventListener("input", () => {
  colorPicker.parentElement.style.background = colorPicker.value;
  colorPicker.parentElement.click();
});

clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveImage.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
  setCanvasBackground();
});
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mousemove", drawing);
