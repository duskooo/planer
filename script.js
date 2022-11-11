inputEl=document.getElementById('input')
todos = document.getElementById('todos')

loadTodos()

function laodTodos(){
    todos=JSON.parse(localStorage.getItem('rodos'))
    if(todos !=undefined){
        todos.forEach(todo => addTodo(todo.txt,todo.isCompleted))
    }
}
inputEl.addEventListener("keyup",function (event){
    if(event.code == 'Ener'){
        addTodo(inputEl.value,false)
    }
})
function addTodo(todoText,isCompleted){
    todoEl=document.createElement('li')
    todoEl.innerText=todoText
    if(isCompleted){
        todoEl.classList.add('completed')
    }
    todoEl.addEventListener('click', (e)=>{
        clickedElement = e.target;
        clickedElement.classList.toggle('completed')
       // updateLocalStorage()
    })
    todoEl.addEventListener('contexmenu', (e)=>{
        e.preventDefault()
        clickedElement = e.target;
        clickedElement.remove()
      // updateLocalStorage()
    })
    todosUl.appendChild(todoEl)
    inputEl.valeu=''
   // updateLocalStorage()












}







