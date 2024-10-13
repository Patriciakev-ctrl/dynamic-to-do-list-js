document.addEventListener("DOMContentLoaded",()=>{

    // get all the html elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // This function help us handle the adding task process and the removal of each one. Since every task is added with his removal button
    function addTask() {
        const taskText = taskInput.value.trim("");
        if(taskText == ""){
            alert("Enter a task name");
        }
        else{
            const task = document.createElement("li");
            task.textContent(taskText);
            taskList.appendChild(task);
            console.log(task.value);

            button =document.createElement("button");
            button.textContent("Remove");
            button.style.className("remove-btn");
            button.addEventListener("click", ()=>{
                taskList.removeChild(task);
            });
            task.appendChild(button);
            taskList.appendChild(task);
            taskInput.value = "";
        }
        addButton.addEventListener("click", addTask());
        taskInput.addEventListener("keypress",(event)=>{
            if (event.key == "Enter") addTask() ;
        });
    }
    document.addEventListener("DOMContentLoaded", ()=>{addTask()});
});