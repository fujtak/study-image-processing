import { canvas, context } from "./CANVAS.js"
import { Point } from "./Point.js"
import { shapes } from "./Shapes.js"
import { selectShape } from "./SelectShape.js"

class Drag {
  #current
  constructor() {
    this.#current = undefined
  }
  #onMousedown(x, y) {
    const start = new Point(x, y)
    const shape = selectShape.shape
    shape.initialize(start)
    this.#current = shape
  }
  #onMousemove(x, y) {
    if(!this.#current) return
    const point = new Point(x, y)
    this.#current.onMousemove(point)
  }
  #onMouseup() {
    if(!this.#current) return
    shapes.push(this.#current)
    this.#current = undefined
  }
  draw() {
    if(!this.#current) return
    context.fillStyle = 'red'
    context.strokeStyle = 'red'
    context.lineCap = 'round'
    context.lineWidth = 5
    this.#current.draw()
  }
  addEventListener() {
    canvas.addEventListener('mousedown', e => this.#onMousedown(e.clientX, e.clientY))
    canvas.addEventListener('mousemove', e => this.#onMousemove(e.clientX, e.clientY))
    canvas.addEventListener('mouseup', () => this.#onMouseup())
  }
}

export const drag = new Drag()