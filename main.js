const input = document.querySelector('.text-input')
const btn = document.querySelector('.material-icons')
const todoList = document.querySelector('.list')

const typingText = () => { 

// 0. bring the input's value
const text = input.value
if(text === ''){
    input.focus();
    return; //stop
}
//   console.log(input.value);

// 1. create the new elements & append child
const listSection = document.createElement('div')
const viewText = document.createElement('div')
const viewIcon = document.createElement('button')
const span = document.createElement('span')
const i = document.createElement('span')

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
    // console.log(event.target)
    // console.log(event.target.parentNode)
    // console.log(event.target.parentNode.parentNode)
    const removeIcon = event.target.parentNode.parentNode
    todoList.removeChild(removeIcon)
})

// 2. scroll to a new elememt created
listSection.scrollIntoView({block:'end'})

// 3. reset all input's value
input.value = ''
input.focus();
}


btn.addEventListener('click', typingText)

input.addEventListener('keydown',(event)=>{
    if(event.keyCode === 13){
        typingText();
    }
})


