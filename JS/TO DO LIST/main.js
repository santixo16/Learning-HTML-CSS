/*const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) =>{
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for (let i = 0; i < todos.length; i++){
            todoList.innerHTML += '<li>' + todos[i] + '</li>'
        }
    }
}
*/

//Simplifying--->

/* Getting the value of the key 'todos' from localStorage and parsing it to JSON. If there is no value,
it will return an empty array. */
const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
    /* Creating a new array with the same number of elements as the original array, but with the elements
    transformed. */
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join(''); //toma los elementos de un arreglo y los junta con lo que se indique
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
                elemento.parentNode.removeChild(elemento); /* Removing the element from the DOM. */
                todos.splice(i, 1);
                actualizaTodos(todos);
                render();
            })
        })
}

const actualizaTodos = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStrings);
}

window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
 /* A function that is executed when the form is submitted. */
    form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value = '';
    todos.push(todoText);
    /* Converting the array to a string and saving it in localStorage. */
    actualizaTodos(todos);
 }
};