const addButton = document.getElementsByTagName('button')[0]
// const addButton = document.querySelector('button')
console.log(addButton)
const templateLists = document.querySelector('ul')
console.log(templateLists)
const input = document.getElementById('input')
console.log(input)

addButton.addEventListener("click", (e) =>{
    if(input.value === ''){
        alert('HELLO, You need to input a list of things you will like to do today')
    }
    else{
        let lists = document.createElement('li')
        lists.innerHTML = input.value
        templateLists.appendChild(lists)
        lists.classList.add('.checked.ben')
        lists.style.backgroundColor = '#aaa'
        lists.style.marginTop = '.7rem'
        lists.style.borderRadius = '10px'
        lists.style.padding = '4px 4px 4px 30px'
        lists.style.position = 'relative'
        lists.style.display = 'flex'
        lists.style.alignItems = 'center'
        lists.style.cursor = 'pointer'


        let deleteIcon = document.createElement('img')
        lists.appendChild(deleteIcon)
        deleteIcon.src = './img/delete.png'
        deleteIcon.style.width = '1.9rem'
        deleteIcon.style.height = '1.9rem'
        deleteIcon.style.position = 'absolute'
        deleteIcon.style.right = '0'
        deleteIcon.style.borderRadius = '10px'
        deleteIcon.style.cursor = 'pointer'
    }
    input.value = ''
    saveData()

})
templateLists.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        console.log('checked')
        e.target.classList.toggle('checked')
        console.log(e.target.classList)
        saveData()
    }
    else if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        saveData()
    }
    
}) 

function saveData(){
    localStorage.setItem('data', templateLists.innerHTML)
}
function showTask(){
    templateLists.innerHTML = localStorage.getItem('data')
}
showTask() 