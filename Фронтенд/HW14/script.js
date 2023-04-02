


const form = document.querySelector('form');
const titleInp = document.querySelector('#titleInp');
const descriptionInp = document.querySelector('#descriptionInp');
const completedInp = document.querySelector('#completedInp');
const contentPlace = document.querySelector('#contentPlace');
const btn = document.querySelector('button');


class ToDo{

    constructor(title, description, completed ){
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    changeComleted(newCompl){
        this.completed=newCompl;
    }

    changeTitle(newTitle){
        this.title = newTitle;
    }

    changeDescription(newDescription){
        this.description = newDescription;
    }
    
}

class ToDoList {
    
    constructor(){
        this.todos = [];
    }

    addToDo(title,description,completed) {
        const newTodo = new ToDo(title,description,completed);
        this.todos.push(newTodo);
    }
    
    
    removeTodo(todoToDelete){
        try {
                const index = this.todos.findIndex(elemOfArr =>elemOfArr.title === todoToDelete.title && elemOfArr.description === todoToDelete.description && elemOfArr.completed === todoToDelete.completed);
                if (index != -1) {
                    this.todos.splice(index, 1);
                } else {
                    throw new Error('Нет такого тодо')
                }
        } catch (error) {
            console.log(error);
        }
    }

    takeAllToDos(){      
        return this.todos;
    }

    takeComplitedToDos(){    
        const complArr =[];
        try {
            if ( this.todos.length>0) {
                this.todos.forEach((elem)=>{
                    if (elem.completed === 'yes') {
                        complArr.push(elem); 
                    } 
                });
            } else {
              throw new Error('У Вас нет тодов')  
            }
        } catch (error) {
            console.log(error);
        }
        return complArr;
    }

    takeUnComplitedToDos(){  
        const unComplArr =[];
        try {
            if ( this.todos.length>0) {
                this.todos.forEach((elem)=>{
                    if (elem.completed === 'no') {
                        unComplArr.push(elem); 
                    } 
                });
            } else {
              throw new Error('У Вас нет тодов')  
            }
        } catch (error) {
            console.log(error);
        }
        return unComplArr;

    } 
}

const newTodoList = new ToDoList();
const todoFromStorage = localStorage.getItem('Todo')
if (todoFromStorage!=='') {
    let storageData = JSON.parse(todoFromStorage);
    for (let i = 0; i < storageData.todos.length; i++) {
        newTodoList.addToDo(storageData.todos[i].title,storageData.todos[i].description,storageData.todos[i].completed);
        console.log(storageData.todos[i].title,storageData.todos[i].description,storageData.todos[i].completed);
        
        createTodoByStorage(storageData.todos[i].title,storageData.todos[i].description,storageData.todos[i].completed)
    }

console.log(newTodoList);

}
function createTodoByStorage(title,description,completed) {
    let divTodo = document.createElement("div");
    let titleTodo = document.createElement("h2");
    let descriptionTodo = document.createElement("p");
    let completedTodo = document.createElement("p");
    let closeBtn = document.createElement('button');

    titleTodo.innerText = title;
    descriptionTodo.innerText = description;
    completedTodo.innerText = completed;
    closeBtn.innerText = 'X';
    closeBtn.classList.add('close');

    contentPlace.append(divTodo);
    divTodo.classList.add("contentPlace");
    divTodo.append(titleTodo);
    divTodo.append(descriptionTodo);
    divTodo.append(completedTodo);
    
    let redBtn = closeButton()
    divTodo.append(redBtn)

}


form.onsubmit= (e)=>{
    e.preventDefault();
    newTodoList.addToDo(titleInp.value,descriptionInp.value,completedInp.value);
    
    createTodo();
    localStorage.setItem("Todo", JSON.stringify(newTodoList));


    titleInp.value = '';
    descriptionInp.value = '';
    completedInp.value = '';

}


function createTodo() {
    
    let divTodo = document.createElement("div");
    let titleTodo = document.createElement("h2");
    let descriptionTodo = document.createElement("p");
    let completedTodo = document.createElement("p");
    let closeBtn = document.createElement('button');

    titleTodo.innerText = titleInp.value;
    descriptionTodo.innerText = descriptionInp.value;
    completedTodo.innerText = completedInp.value;
    closeBtn.innerText = 'X';
    closeBtn.classList.add('close');

    contentPlace.append(divTodo);
    divTodo.classList.add("contentPlace");
    divTodo.append(titleTodo);
    divTodo.append(descriptionTodo);
    divTodo.append(completedTodo);
    
    let redBtn = closeButton()
    divTodo.append(redBtn)
    redBtn.onclick=()=>{

    }


}

function closeButton() {
    let closeBtn = document.createElement('button')
    closeBtn.innerText = 'X'
    closeBtn.classList.add('close')
    return closeBtn;
}















  


