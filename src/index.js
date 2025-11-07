import './styles.css';
import './task.js'
import loadHome from './home.js';
import loadArchive from './archive.js';

document.addEventListener('DOMContentLoaded', () => {
  loadHome();
});


const archiveLink = document.getElementById("archive-link");
archiveLink.addEventListener("click", ()=>{
    clearContent();
    loadArchive();    
})

const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", ()=>{
    clearContent();
    loadHome();
})

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