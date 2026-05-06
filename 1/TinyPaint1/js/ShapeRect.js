import { context } from "./CANVAS.js"

export class ShapeRect {
  #start
  #width
  #height
  constructor(start) {
    this.#start = start
    this.#width = 0
    this.#height = 0
  }
  onMousemove(x, y) {
    this.#width = this.#start.x - x
    this.#height = this.#start.y - y
  }
  draw() {
    context.fillStyle = 'red'
    context.beginPath()
    context.rect(this.#start.x, this.#start.y, this.#width, this.#height)
    context.closePath()
    context.fill()
  }
}