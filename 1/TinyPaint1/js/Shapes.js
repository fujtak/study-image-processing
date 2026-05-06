class Shapes {
  #list
  constructor() {
    this.#list = []
  }
  push(shape) {
    if(!shape) return
    this.#list.push(shape)
  }
  draw() {
    this.#list.map(shape => shape.draw())
  }
}

export const shapes = new Shapes()