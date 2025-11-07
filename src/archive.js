export default function loadArchive() {
    const tasksContent = document.getElementById("tasks-content");

    const archiveTitle = document.createElement("div");
    archiveTitle.className = "tasks-title";
    archiveTitle.textContent = "Archive";

    tasksContent.appendChild(archiveTitle);
}
