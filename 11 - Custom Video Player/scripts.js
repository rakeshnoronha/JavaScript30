const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('input[type=range]')
const progressBar = player.querySelector('.progress__filled')
const progress = player.querySelector('.progress')
console.log(progressBar)

// console.log(skipButtons)

function togglePlayer() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '||'
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function updateRange() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
  console.log(scrubTime)
}

video.addEventListener('click', togglePlayer)
toggle.addEventListener('click', togglePlayer)
video.addEventListener('timeupdate', handleProgress)

player.addEventListener('click', updateButton)

skipButtons.forEach((button) => {
  button.addEventListener('click', skip)
})

ranges.forEach((range) => range.addEventListener('click', updateRange))
ranges.forEach((range) => range.addEventListener('mousemove', updateRange))

progress.addEventListener('click', scrub)
progress.addEventListener('mousedown', scrub)
