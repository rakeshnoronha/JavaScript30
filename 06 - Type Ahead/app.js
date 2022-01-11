const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

cities = []

const result = fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data))

// console.log(cities)

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function displayMatch() {
  const places = findMatches(this.value, cities)
  // console.log(places)
  const html = places.map((place) => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(
      regex,
      `<span class=hl>${this.value}</span>`
    )
    const stateName = place.state.replace(
      regex,
      `<span class=hl>${this.value}</span>`
    )
    return `<li>
    <span class=name>${cityName}, ${stateName}</span>
    <span class=population>${numberWithCommas(place.population)}</span>
    </li>`
  })
  suggestions.innerHTML = html
}

const input = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

input.addEventListener('change', displayMatch)
input.addEventListener('keyup', displayMatch)
