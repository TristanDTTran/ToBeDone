export default function loadHome() {
  // Grab the existing container
  const tasksContent = document.getElementById('tasks-content');

  // Clear any previous content (optional)
  tasksContent.innerHTML = '';

  // Create the main "all-tasks" wrapper
  const allTasks = document.createElement('div');
  allTasks.classList.add('all-tasks');

  // Create the title
  const tasksTitle = document.createElement('div');
  tasksTitle.classList.add('tasks-title');
  tasksTitle.textContent = 'All';

  // Create a sample task
  const todoTask = document.createElement('div');
  todoTask.classList.add('todo-task');
  todoTask.innerHTML = '<input type="checkbox"> finish styling';

  // Create the "Add Task" button
  const addTask = document.createElement('div');
  addTask.classList.add('add-task');
  addTask.textContent = '+ Add Task';

  // Append everything to the DOM in order
  allTasks.appendChild(tasksTitle);
  allTasks.appendChild(todoTask);
  allTasks.appendChild(addTask);

  tasksContent.appendChild(allTasks);
}