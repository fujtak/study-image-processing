import { context } from "./CANVAS.js"

export class ShapeRect {
  #start
  #width
  #height
  constructor() {
    this.#start = undefined
    this.#width = 0
    this.#height = 0
  }
  initialize(start) {
    this.#start = start
  }
  onMousemove(point) {
    this.#width = point.x - this.#start.x
    this.#height = point.y - this.#start.y
  }
  draw() {
    context.beginPath()
    context.rect(this.#start.x, this.#start.y, this.#width, this.#height)
    context.closePath()
    context.fill()
  }
}