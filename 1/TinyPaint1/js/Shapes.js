class Shapes {
  #list
  constructor() {
    this.#list = []
  }
  push(shape) {
    this.#list.push(shape)
  }
}

export const shapes = new Shapes()