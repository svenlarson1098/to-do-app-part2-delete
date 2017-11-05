function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

    function renderTheUI(toDos) {
      const todoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        let deletebutton = document.createElement('button');
        deletebutton.addEventListener('click', event => {
          todoList.removeChild(newLi);
        });

        newLi.textContent = toDo.title;

        todoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deletebutton);
        deletebutton.innerHTML = "<b>delete</b>";

      });

    }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      });


  renderTheUI(toDos);
}


window.onload = function() {
  onReady();
};
