const panels = document.querySelectorAll('.panel')
console.log(panels)

function displayUpdate() {
  this.classList.toggle('open')
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach((panel) => panel.addEventListener('click', displayUpdate))
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive))
