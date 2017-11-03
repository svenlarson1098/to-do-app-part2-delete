function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return}

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }
  //function deleteToDo () {
    //toDos.pop();

    function renderTheUI(toDos) {
      const todoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const deletebutton = document.createElement('button');
        deletebutton.textContent = "Delete Task"

        newLi.textContent = toDo.title;

        todoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deletebutton);
        todoList.removeChild(deletebutton);
      });
    }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });

    deletebutton.addEventListener('click', event => {
      event.deleteToDo();
    });

  renderTheUI(toDos);
}


window.onload = function() {
  onReady();
};
