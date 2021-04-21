const input = document.querySelector('#add-todo')
const form = document.querySelector('#form')
const toDoList = document.querySelector('.todo-list')
const itemsLeftElement = document.querySelector('.items-left')

let inputValue = ''
let itemsLeft = 0

input.addEventListener('keyup', (e) => {
  inputValue = e.target.value
  // console.log(inputValue);
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (inputValue === '') {
    return null
  } else {
    const li = document.createElement('li')
    li.innerHTML = inputValue
    toDoList.appendChild(li)
    
  }
})


//this does not need I used css instead

// form.addEventListener('submit', (e) => {
//   const p = document.createElement('p')
//   itemsLeft++
//   p.innerHTML = itemsLeft
//   itemsLeftElement.appendChild(p)
// })  
