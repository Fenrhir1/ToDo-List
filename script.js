const addBtn = document.getElementById("add-btn");
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("container");
const deleteBox = document.getElementById("delete-box");
const deleteBtn = document.getElementById("delete-btn");

function onClickAdd() {
  let taskName = inputBox.value;
  let newListItem = document.createElement("li");
  newListItem.textContent = taskName;
  newListItem.classList.add("task-item");
  taskList.appendChild(newListItem);
}

addBtn.addEventListener("click", onClickAdd);

function onClickDelete() {
  let taskToDelete = deleteBox.value;

  // Trova tutti gli elementi della lista
  let elementsToDelete = document.querySelectorAll("#container li");

  elementsToDelete.forEach(function (element) {
    let taskText = element.textContent;

    // Verifica se il testo dell'elemento contiene la stringa da eliminare
    if (taskText.includes(taskToDelete)) {
      // Rimuovi solo la parte del testo che corrisponde alla stringa da eliminare
      let updatedText = taskText.replace(taskToDelete, "");

      // Imposta il nuovo testo nell'elemento
      element.textContent = updatedText;
    }
  });
}

deleteBtn.addEventListener("click", onClickDelete);
