const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
]

function makeGreen() {
  const p = document.querySelector('p')
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}

// Regular
console.log('Hello')

// Interpolated
console.log('Hello, this is %s', 'Rakhesh')

// Styled
// console.log('%c this is a special text', 'font-size:100px')

// warning!
console.warn('This is a warning')

// Error :|
console.error('This is error')
// Info
console.info('Info')

// Testing
console.assert(1 === 5, 'that is wrong')

const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'that is wrong')

// clearing
console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

console.clear()
// Grouping together

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`The dog name ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} old`)
  console.log(`${dog.age} years old is ${dog.name}`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('Hello')
console.count('Hello')
console.count('its me')
console.count('Hello')
console.count('Hello')
console.count('its me')

console.clear()
// timing
console.time('data fetch')
fetch('https://api.github.com/users/rakeshnoronha')
  .then((res) => res.json())
  .then((data) => {
    console.timeEnd('data fetch')
    console.log(data)
  })
