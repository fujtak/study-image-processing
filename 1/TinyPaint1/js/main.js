import { canvas, context } from "./CANVAS.js";

function paint() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

loop()