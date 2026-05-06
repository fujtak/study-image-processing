import { canvas } from "./CANVAS.js";

class Drag {
  #isActive
  constructor() {
    this.#isActive = false
  }
  #onMousedown() {
    this.#isActive = true
  }
  #onMouseup() {
    this.#isActive = false
  }
  addEventListener() {
    canvas.addEventListener('mousedown', () => this.#onMousedown())
    canvas.addEventListener('mouseup', () => this.#onMouseup())
  }
}

export const drag = new Drag()