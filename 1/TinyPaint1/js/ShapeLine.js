import { context } from "./CANVAS.js"

export class ShapeLine {
  #start
  #end
  constructor(start) {
    this.#start = start
    this.#end = undefined
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