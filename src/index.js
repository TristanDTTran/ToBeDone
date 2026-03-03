import './styles.css';
import './task.js'
import loadHome from './home.js';
import loadArchive from './archive.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    // Load archive page upon click
    const archiveLink = document.getElementById("archive-link");
    if (archiveLink) {     // ensure that an element is found to prevent null
        archiveLink.addEventListener("click", () => {
            clearContent();
            loadArchive();
        });
    }

    // Load archive page upon click
    const homeLink = document.getElementById("home-link");
    if (homeLink) {
        homeLink.addEventListener("click", ()=>{
            clearContent();
            loadHome();
        })
    }

    // Handles adding new tasks
    const addTaskBtn = document.getElementById("add-task");
    addTaskBtn.addEventListener('click', ()=>{
        addTaskBtn.textContent = "";

        // Create a temporary input container to handle input before adding todo task
        // add the temporary input to the dom for user to enter text
        // then replace the temporay input container with the new task checkbox + text
        const inputContainer = document.createElement('div');
        inputContainer.classList.add("todo-task")

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = "checkbox"

        const userInput = document.createElement('input');
        userInput.id = "tempInput"
        userInput.type = 'text';
        userInput.classList.add("todo-task")
        userInput.placeholder = "enter task details ...";
        userInput.autofocus = true;

        inputContainer.appendChild(taskCheckbox);
        inputContainer.appendChild(userInput);
        addTaskBtn.before(inputContainer);

        userInput.focus();

        // Replace temporary input task with final task in the DOM
        // finalises the user input and create final task

        let isFinalized = false;

        userInput.addEventListener("keydown", (e)=> {
            if (e.key === "Enter" && !isFinalized) {
                isFinalized = true;

                checkTaskInput(userInput, inputContainer);
                addTaskBtn.textContent = "+ Add Task";
            }
        });

        userInput.addEventListener("blur", () => {
            if (isFinalized) return;
            isFinalized = true;
            
            checkTaskInput(userInput, inputContainer);
            addTaskBtn.textContent = "+ Add Task";
        });
    })
});

// Replace temporary inputContainer with the final task container
function createFinalTask(userInput, inputContainer) {
    /* 
    userInput is the input element
    */
    const todoTask = document.createElement('div');
    todoTask.classList.add("todo-task");

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox"

    const taskText= document.createElement('span');
    taskText.textContent = userInput.value.trim();
    taskText.textContent = " " + taskText.textContent;

    todoTask.appendChild(taskCheckbox);
    todoTask.appendChild(taskText);
    inputContainer.replaceWith(todoTask);
}

function checkTaskInput(userInput, inputContainer) {
    if (!userInput.value.trim()) {
        inputContainer.remove();
    } else {
        createFinalTask(userInput, inputContainer);
    }
}

// Clears the entire tasksContent elements
function clearContent() {
    const tasksContent = document.getElementById("tasks-content");
    
    if (!tasksContent) return;
    tasksContent.innerHTML = "";

    let nextElement = tasksContent.nextElementSibling;
    while (nextElement) {
        const toRemove = nextElement;
        nextElement = nextElement.nextElementSibling;
        toRemove.remove();
    }
}