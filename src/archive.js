export default function loadArchive() {
    const tasksContent = document.getElementById("tasks-content");

    const allTasks = document.createElement('div');
    allTasks.classList.add('all-tasks');

    const archiveTitle = document.createElement("div");
    archiveTitle.className = "tasks-title";
    archiveTitle.textContent = "archive";

    allTasks.appendChild(archiveTitle)  
    tasksContent.appendChild(allTasks);
}
