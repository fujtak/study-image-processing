import { ShapeRect } from "./ShapeRect.js"
import { ShapeLine } from "./ShapeLine.js"

class SelectShape {
  constructor() {
    this.element = document.querySelector('select#shape')
    Object.freeze(this)
  }
  get shape() {
    const value = this.element.value
    if(value === 'rect') return new ShapeRect()
    if(value === 'line') return new ShapeLine()
  }
}

export const selectShape = new SelectShape()