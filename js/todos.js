function loadToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayToDos(data))
}

function displayToDos(todos) {
    //get the container
    const todosContainer = document.getElementById('todos-container')
    for (const todo of todos) {
        console.log(todo);
        //create the child element
        const todoDiv = document.createElement('div');
        //set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>Title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p>Is Completed : ${todo.completed == true ? 'Completed' : 'Not Completed'}</p>
        `;
        //appendChild
        todosContainer.appendChild(todoDiv);
    }
}

loadToDos();