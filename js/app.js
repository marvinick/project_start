//problem :user interaction doesn't provide desired results.
//solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button"); //first-button
var incompleteTaskHolder = document.getElementById("incomplete-tasks");//incomplete-tasks
var completedTasksHolder = document.getElementById("complete-tasks"); //completed-tasks

//new task list item
var createNewTaskElement = function(taskString) {
  //create list item
  var listItem = document.createElement("li");
   //input checkbox
   var checkbox = document.createElement("input"); //checkbox
    //label
    var label = document.createElement("label");
    //input(text)
    var editInput = document.createElement("input"); //text
    //button.edit
    var editButton = document.createElement("button");
    //button.delete
    var deleteButton = document.createElement("button");

    //each element needs modifying
    checkBox.type = "checkbox";
    editInput.type = "text";
    editButton.innerText = "Delete";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innnerText = taskString;

    //each element needs appending
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}

//add a new task
var addTask = function() {
  console.log("Task add...");

  // create a new list item with the text from  #new-task
  var listItem = createNewTaskElement("taskInput.value");
  //append listItem to incompleteTaskHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  taskInput.value = "";
}

//edit an existing task
var editTask = funtion () {
  console.log("Edit task..");
}
var listItem = this.parentNode;

var editInput = listItem.querySelector.("input[type=text");
var label = listItem.querySelector.("label");

var containClass = listItem.classList.contains("editMode");

var toggleList = listItem.classList.toggle("editMode");

  //if the class of the parents is .editMode
  if(containClass) {
    //switch from .editMode
    //label text become input's value
    label.innerText = editInput.value;
  }
  //else
    //switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }
  //toggle .editMode on the parent
  toggleList;

//delete an existing task
var deleteTask = function() {
  console.log("Delete task..");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //remove the parent list item from the ul
  ul.removeChild(listItem);
}


//mark a task as complete
var taskCompleted = function() {
  console.log("Task complete..")
  //append the task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

//mark task as incomplete
var taskIncomplete = function () {
  console.log("Task incomplete..")
  //append the task list item to the #incomplete-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkboxEventHandler) {
  console.log("Bind list item events");
    //select taskListItem's children
    var checkbox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    //bind editTaskto edit button
    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //bind checkboxEventHandler to checkbox
    checkbox.onchange = checkboxEventHandler;
}

//set the click handler to theq addTask function
addButton.onclick = addTask;

//cycle over incompleteTaskHolder ul lists items
  //for each item list
  for (i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list's item children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
  }


//cycle over completedTaskHolder ul lists items
  //for each item list
  for (i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list's item children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
  }


