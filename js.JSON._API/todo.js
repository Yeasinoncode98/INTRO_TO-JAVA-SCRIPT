const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
  console.log(todos);
  //   1.get the container
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  //loop
  todos.forEach((todo) => {
    console.log(todo);
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class ="todo-card">
    <p>${
      todo.completed == true
        ? ` <i class="fa-solid fa-square-check"></i> `
        : ` <i class="fa-regular fa-square-check"></i>`
    }  </p>
    <h4>${todo.title}</h4>
    
    </div>
    `;

    todoContainer.appendChild(todoCard);
  });
};
loadTodo();

// {
//     "userId": 10,
//     "id": 194,
//     "title": "sed ut vero sit molestiae",
//     "completed": false
// }
