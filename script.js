document.addEventListener("DOMContentLoaded",()=>{

    // get all the html elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    

    // Load tasks from Local Storage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        function loadTasks() {
            tasks.forEach(item => {
                const task = document.createElement("li");
                task.textContent = item;
                taskList.appendChild(task);
                console.log(tasks.value);

                button =document.createElement("button");
                button.textContent = "Remove";
                button.classList.add("remove-btn");
                button.addEventListener("click", ()=>{
                taskList.removeChild(task);
            });
                task.appendChild(button);
                taskList.appendChild(task);
            });
        }
    

    // This function help us handle the adding task process and the removal of each one. Since every task is added with his removal button
    function addTask() {
       const taskText = taskInput.value.trim();

        if(taskText == ""){
            alert("Enter a task name");
        }
        else{
            const task = document.createElement("li");
            task.textContent = taskText;
            taskList.appendChild(task);
            console.log(task.value);

            button =document.createElement("button");
            button.textContent = "Remove";
            button.classList.add("remove-btn");
            button.addEventListener("click", ()=>{
                taskList.removeChild(task);
            });
            task.appendChild(button);
            taskList.appendChild(task);
            //save the task to the local storage
            saveTasks();
            taskInput.value = "";
        }

    }

        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to Local Storage
            console.log(tasks);
        }

     
            taskInput.addEventListener("keypress",(event)=>{
                if (event.key == "Enter") addTask() ;
    
            });
            addButton.addEventListener("click", ()=>{addTask()});
       
        
            loadTasks();
        // Other initialization code
    
       
   
});