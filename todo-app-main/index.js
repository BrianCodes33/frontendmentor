const addToDoElement = document.getElementById('add-todo')
const form  = document.getElementById('form')
const submitBtn = document.getElementById('submit-btn')

function handleChange(e) {
  e.preventDefault()
  console.log(e.target.value)
}

function handleSubmit(e) {
  console.log(e.target.value)
  e.preventDefault()
}

form.addEventListener('change', handleChange)
form.addEventListener('submit', handleSubmit)