const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function getTime() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const secondDegree = (seconds / 60) * 360 + 90
  const minDegree = (minutes / 60) * 360 + 90
  const hourDegree = (hours / 12) * 360 + 90

  secondHand.style = `transform: rotate(${secondDegree}deg)`
  minHand.style = `transform: rotate(${minDegree}deg)`
  hourHand.style = `transform: rotate(${hourDegree}deg)`
}

setInterval(getTime, 1000)
