let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const populateTodos = () => {
    let theOl = document.getElementById("todo-list")
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let newLi = document.createElement("li")
        let newText = document.createTextNode(arrayOfTodos[i].title)
        newLi.appendChild(newText)
        theOl.appendChild(newLi)
    }
}

const logTodos = () => {
    console.log(arrayOfTodos)
}