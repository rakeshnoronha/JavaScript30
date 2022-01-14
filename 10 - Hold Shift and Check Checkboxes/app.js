const checkboxes = document.querySelectorAll('input[type=checkbox]')

let lastChecked

function handleCheck(e) {
  let inBetween = false

  //find if shiftkey was pressed and the selected checkbox was checked,
  if (e.shiftKey && this.checked) {
    //then loop over all check boxes
    checkboxes.forEach((checkbox) => {
      //if checkbox is currently checked or checkbox was last cheked, make inBetween as true to that checkbox
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }
      //if inBetween is true, check that checkbox
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck)
})
