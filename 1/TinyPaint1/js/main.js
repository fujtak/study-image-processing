import { canvas, context } from "./CANVAS.js"
import { drag } from "./Drag.js"
import { shapes } from "./Shapes.js"

function initialize() {
  drag.addEventListener()
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  drag.draw()
  shapes.draw()
}

function loop() {
  draw()
  requestAnimationFrame(loop)
}

initialize()
loop()