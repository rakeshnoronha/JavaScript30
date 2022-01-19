const pressed = []
const secret = 'wesbos'

window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  console.log(pressed)
  pressed.splice(-secret.length - 1, pressed.length - secret.length)
  if (pressed.join('').includes(secret)) {
    cornify_add()
  }
})
