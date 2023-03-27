const taskForm = document.querySelector("#new-task-form");
const taskInput = document.querySelector("#new-task-input");
const allTasks = document.querySelector("#tasks");

taskForm.addEventListener("submit", (e)=>{
    // To prevent the refresh after submitting
    e.preventDefault();
    
    // To capture the value from the input inside form
    const inputValue = taskInput.value;

    // Checking if the input is empty
    if(!inputValue){
        alert("Please fill the input before submitting");
        return;
    }

    // Creating the necessary HTML elements and giving them the necessary CSS classes and other attributes
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("content");

    const taskDetails = document.createElement("input");
    taskDetails.classList.add("text");
    taskDetails.type = "text";
    taskDetails.setAttribute("readonly","readonly");
    taskDetails.value = inputValue;

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("done");
    doneBtn.textContent = "Done";

    taskContent.appendChild(taskDetails);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(doneBtn);

    taskContainer.appendChild(taskContent);
    taskContainer.appendChild(btnContainer);

    allTasks.insertAdjacentElement("afterbegin", taskContainer);

    taskInput.value = "";

    editBtn.addEventListener("click", ()=>{
        if(editBtn.textContent.toLowerCase() === "edit"){
            taskDetails.removeAttribute("readonly");
            editBtn.textContent = "Save";
        }else{
            taskDetails.setAttribute("readonly", "readonly");
            editBtn.textContent = "Edit";
        }
    })

    doneBtn.addEventListener("click", ()=>{
        taskDetails.style.textDecorationLine = "line-through";
    })
    
})