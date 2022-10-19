
const createModal = document.querySelector("#button");
const modal = document.getElementById('modal');
const cancel = document.getElementById('cancel');
const save = document.getElementById('save-btn');
const container = document.querySelector(".container");

let myTodoList = [];

class Todo {
    constructor(taskName, description) {
        this.taskName = taskName;
        this.description = description;
    }
}

function addTodoToList(todo){
    myTodoList.push(todo);
}


createModal.addEventListener('click',() => { 
    modal.classList.add('modal-active');
})

cancel.addEventListener('click', () => {
    modal.classList.remove('modal-active');
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
 }
}

save.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    let title = document.getElementById('task-name').value;
    let description = document.getElementById('description').value;
    let newTodo = new Todo(title,description);
    addTodoToList(newTodo);
    removeAllChildNodes(container);

    myTodoList.forEach(function (item,i) {
        let div = document.createElement('div');
        div.classList.add('todo');

        //creating title
        let taskTitle = document.createElement('p');
        taskTitle.textContent = myTodoList[i].taskName;

        //creating description
        let descriptionStr = document.createElement('p');
        descriptionStr.classList.add('obs');
        descriptionStr.textContent = myTodoList[i].description;

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        div.setAttribute("index", i);
        div.id = i;


        deleteButton.addEventListener('click', (element) => {
            let index = element.target.getAttribute("index");
            myTodoList.splice(index,1);
            div.classList.remove('todo');
            let e = document.getElementById(i);
            e.remove();
        })	
       
        div.appendChild(deleteButton);
        div.appendChild(taskTitle);
        div.appendChild(descriptionStr);
        container.appendChild(div);
    })

 
    
})


