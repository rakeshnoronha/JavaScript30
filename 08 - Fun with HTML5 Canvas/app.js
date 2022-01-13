const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineWidth = 100
ctx.lineCap = 'round'
ctx.lineJoin = 'round'

let isDrawing = false
let lineX = 0
let lineY = 0
let hue = 0
let direction = true

function draw(e) {
  if (!isDrawing) return
  ctx.beginPath()
  ctx.moveTo(lineX, lineY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  console.log(e)
  lineX = e.offsetX
  lineY = e.offsetY
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  hue++
  if (hue >= 360) {
    hue = 0
  }

  if (ctx.lineWidth > 100 || ctx.lineWidth <= 1) {
    direction = !direction
  }

  if (direction) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lineX = e.offsetX
  lineY = e.offsetY
})
canvas.addEventListener('mouseout', () => (isDrawing = false))
