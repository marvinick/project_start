//problem :user interaction doesn't provide desired results.
//solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button"); //first-button
var incompleteTaskHolder = document.getElementById("incomplete-tasks");//incomplete-tasks
var completedTasksHolder = document.getElementById("complete-tasks"); //completed-tasks

//add a new task
var addTask = function() {
  //when the button is pressed

  // create a new list item the text from  #new-task
      //input checkbox
      //label
      //input(text)
      //button.edit
      //button.delete
      //each elements, news modified and appended
}
//edit an existing task
  //when the edit button is pressed
    //if the class of the parents is .editMode
    //switch from .editMode
    //label text become input's value
  //else
    //switch to .editMode
    //input value becomes the label's text

  //toggle .editMode on the parent

//delete an existing task
  //when the Delete button is pressed
    //remove the parent list item from the ul

//mark a task as complete
  //when the checkbox is checked
      //append the task list item to the completed-tasks

//mark task as incomplete
    //when the checkbox is unchecked
      //append



//set the click handler to the addTask function
addButton.onclick = addTask;

