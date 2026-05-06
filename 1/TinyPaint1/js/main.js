const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

function paint() {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

loop()