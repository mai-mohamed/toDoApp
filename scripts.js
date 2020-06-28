const addTaskForm = document.getElementById("addTask");
const listItems = document.querySelector(".list-items");
let todos = [];

const renderTodos = () => {
  const todoElements = document.createElement("li");
  todos.forEach((todo) => {
    todoElements.innerHTML = todo;
    listItems.appendChild(todoElements);
  });

  todoElements.addEventListener("click", () => handleRemoveItem(todoElements));
};

const handleRemoveItem = (item) => {
  const undoBtn = document.createElement("button");
  undoBtn.innerHTML = "undo";
  item.appendChild(undoBtn);

  const removeItem = setTimeout(() => {
    item.remove();
  }, 2000);

  undoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    clearTimeout(removeItem);
  });

  //   const newTodos = todos.filter((todo) => todo !== item.innerHTML);
  //   todos = newTodos;
  //   console.log(newTodos)
};

const handleAddTask = (e) => {
  e.preventDefault();
  if (addTaskForm.taskName.value) {
    todos.push(addTaskForm.taskName.value);
    renderTodos();
    addTaskForm.taskName.value = "";
  } else {
    alert("empty todo !!");
  }
};

addTaskForm.addEventListener("submit", handleAddTask);
