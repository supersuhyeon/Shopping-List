const input = document.querySelector('.text-input')
const btn = document.querySelector('.material-icons')

const todoList = document.querySelector('.list')

const typingText = () => { 
//   console.log(input.value);
//   const addelem = document.createElement('li')
//   addelem.innerText = input.value
//   todoList.appendChild(addelem)
//   input.value = '';

const listSection = document.createElement('div')
const viewText = document.createElement('div')
const viewIcon = document.createElement('button')
const span = document.createElement('span')
const i = document.createElement('span')
const text = input.value

listSection.className = 'list-section'
viewText.className = 'viewText'
viewIcon.className = 'viewIcon'

todoList.appendChild(listSection)
listSection.appendChild(viewText)
listSection.appendChild(viewIcon)

span.className = 'viewText-text'
span.innerText = text
i.setAttribute('class', 'material-icons')
i.textContent = 'delete_forever'

viewText.appendChild(span)
viewIcon.appendChild(i)

viewIcon.addEventListener('click', (event)=>{
    const removeIcon = event.target.parentNode.parentNode
    todoList.removeChild(removeIcon)
})
input.value = ''

}


btn.addEventListener('click', typingText)

input.addEventListener('keydown',(event)=>{
    if(event.keyCode === 13){
        typingText();
    }
})


