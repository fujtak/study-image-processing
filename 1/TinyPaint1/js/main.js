import { canvas, context } from "./CANVAS.js"
import { drag } from "./Drag.js"

function initialize() {
  drag.addEventListener()
}

function paint() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

initialize()
loop()