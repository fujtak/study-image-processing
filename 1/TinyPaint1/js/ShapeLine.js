import { context } from "./CANVAS.js"

export class ShapeLine {
  #start
  #end
  constructor() {
    this.#start = undefined
    this.#end = undefined
  }
  initialize(start) {
    this.#start = start
  }
  onMousemove(point) {
    this.#end = point
  }
  draw() {
    if(!this.#end) return
    context.beginPath()
    context.moveTo(this.#start.x, this.#start.y)
    context.lineTo(this.#end.x, this.#end.y)
    context.stroke()
  }
}