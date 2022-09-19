//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos) //dodane pozniej do zapisu LocalStore
todoButton.addEventListener('click', addTodo); //dodaje nowy element
todoList.addEventListener('click', deleteCheck); // usuwa element
filterOption.addEventListener('change', filterTodo); // z jakiegos powodu nie dziala click, dlatego change

//Functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //utworzenie DIVa Todo 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //stworzenie  Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;  //pozwala nam dodac tekst, ktory wpisalismy w oknie
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //we add newTodo to DIV

    
    //dodanie Todo do LocalStorage- dodanie tego na samym koncu (na dole funkcja do tego) 
    saveLocalTodos(todoInput.value);

    //check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     //check trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);

     //przypisanie do listy
    todoList.appendChild(todoDiv);
    //wyczyscic info wpisane do okna
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target; 
    //usunac nowo dodany element TODO
        //usuniecie z animacja
    if (item.classList[0] === "trash-btn") { //spr czy wystepuje nasz przycisk trash
        const todo = item.parentElement;  //musimy usunac rodzica a nie tylko ikonke trash
        todo.classList.add("fall");
        removeLocalTodos(todo);  //--dodane pozniej do LocalStorage--
        //animacja
        todo.addEventListener("transitionend", function() { //pozakonczeniu animacji usuwa caly element
            todo.remove();
        });
    }


    //Samo usuniecie
    /*
    const item = e.target; 
    if (item.classList[0] === "trash-btn") { //spr czy wystepuje nasz przycisk trash
        const todo = item.parentElement;  //musimy usunac rodzica a nie tylko ikonke trash
        todo.remove();
    }*/

    //Check mark 
    if (item.classList[0] === "complete-btn") {   //spr czy jest nasz przycisk check
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//Okno wyboru

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) { 
        const mStyle = todo.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}


//---Zapisywanie Lokalne-           --LOCALSTORAGE---

function saveLocalTodos(todo) {
  // spr czy juz nie jest zapisane 
  let todos;
  if (localStorage.getItem('todos') === null){
    todos=[];
  }else{
      todos=JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    
     // spr czy juz nie jest zapisane 
  let todos;
  if (localStorage.getItem('todos') === null){
    todos=[];
  }else{
      todos=JSON.parse(localStorage.getItem('todos'))
  }
 todos.forEach(function(todo){
     //---skopiowana i pozmianianaczesc z góry--

  //utworzenie DIVa Todo 
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  //stworzenie  Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todo;  //--zamiana na todo--
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo); //we add newTodo to DIV


  //check button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

   //check trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);

   //przypisanie do listy
  todoList.appendChild(todoDiv);
 }); 
}

//usuwanie z LocalStorage
function removeLocalTodos(todo){
  // spr czy juz nie jest zapisane 
  let todos;
  if (localStorage.getItem('todos') === null){
    todos=[];
  }else{
      todos=JSON.parse(localStorage.getItem('todos'))
  }
  const todoIndex = todo.children[0].innerText; //chcemy usunac dany tekst, wiec children i [0] odnosi sie do text a nie do listy czy div
  todos.splice(todos.indexOf(todoIndex), 1) //todos.indexOf(todoIndex)- ktory element chcemy usunac z LocalStorage, a 1- ile tych elementow
  localStorage.setItem('todos', JSON.stringify(todos));
}
