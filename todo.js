//define variables
const addButtonEl = document.getElementById("add-todos");
const inputFieldEl = document.getElementById("inputField");
const todosEl = document.querySelector(".todos");

function addTodo() {

  if (inputFieldEl.value === ""){
    alert("You are a fraud");
  }else{
  var divinson = document.createElement("div")
  var divWrapper = document.createElement("div")
  divWrapper.classList.add("div-wrapper")
  var textElement = document.createElement("p");
  textElement.classList.add("para")
  var buttonsPro = document.createElement("div");
  buttonsPro.classList.add("buttons-pro")
  var doneButton = document.createElement("button");
  doneButton.classList.add("done-button");
  doneButton.textContent = "Done"
  var editButton = document.createElement("button");
  editButton.classList.add("edit-button");
  editButton.textContent = "Edit";
  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "Delete"
  textElement.textContent = inputFieldEl.value;



  todosEl.appendChild(divinson);
  divinson.appendChild(divWrapper);
  divWrapper.appendChild(textElement);
  divWrapper.appendChild(buttonsPro)
  buttonsPro.appendChild(doneButton);
  buttonsPro.appendChild(editButton);
  buttonsPro.appendChild(deleteButton);
  inputFieldEl.value = "";

  function doneTodo() {
    textElement.classList.add("strike");
    editButton.style.display = "none";
    doneButton.style.display = "none";

    var undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");
    undoButton.textContent = "Undo"
    buttonsPro.appendChild(undoButton);

    function undoButt(){
      textElement.classList.toggle("strike");
      undoButton.style.display = "none";
      doneButton.style.display = "block";
      editButton.style.display = "block";
    }
    
    undoButton.addEventListener("click" , undoButt)
  }

  function deleteTodo(){
    divinson.remove();
  }

  function editTodo() { 
    var editingField = document.createElement("div");
    editingField.classList.add("update-butt")
    var inputEditField = document.createElement("input");
    inputEditField.classList.add("update-input");
    var updateField = document.createElement("button");
    updateField.classList.add("done-button");
    updateField.textContent = "Update"
    divinson.appendChild(editingField);
    divinson.classList.add("divinson-sanchez");
    editingField.appendChild(inputEditField);
    editingField.appendChild(updateField);

    editButton.style.display = "none";
    doneButton.style.display = "none"

    function updateTodo(){
      if (inputEditField.value === "") {
        alert("You still be thief")
      } else {
        
      textElement.textContent = inputEditField.value;
      inputEditField.value = "";
      editingField.remove();
      editButton.style.display = "block";
      doneButton.style.display = "block";
    }
    }
    
    updateField.addEventListener("click", updateTodo)

  }

  doneButton.addEventListener("click", doneTodo)
  editButton.addEventListener("click", editTodo)
  deleteButton.addEventListener("click", deleteTodo)
  }
}





//adding event-listeners
addButtonEl.addEventListener("click" , addTodo);

