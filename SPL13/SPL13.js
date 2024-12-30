let tasks = [];
let currentFilter = null;

document.getElementById('addButton').addEventListener('click', addTask);
document.getElementById('showAll').addEventListener('click', () => setFilter(null));
document.getElementById('showCompleted').addEventListener('click', () => setFilter(task => task.completed));
document.getElementById('showPending').addEventListener('click', () => setFilter(task => !task.completed));

function setFilter(filter) {
    currentFilter = filter;
    renderTasks(filter);
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

    const isDuplicate = tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase());
    if (isDuplicate) {
        alert("Такая задача уже есть в списке!");
        return;
    }

    if (taskName) {
        const task = {
            id: Date.now(),
            name: taskName,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks(currentFilter);
    }
}

function renderTasks(filter = null) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const filteredTasks = filter ? tasks.filter(filter) : tasks;

    filteredTasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = task.completed ? 'completed' : '';
        listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
            <span>${task.name}</span>
            <button onclick="editTask(${task.id})">Редактировать</button>
            <button onclick="deleteTask(${task.id})">Удалить</button>
        `;
        taskList.appendChild(listItem);
    });
}

function toggleTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks(currentFilter);
    }
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks(currentFilter);
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    const newName = prompt("Редактируйте название задачи:", task.name);
    if (newName !== null && newName.trim() !== '') {
        const isDuplicate = tasks.some(t => t.id !== taskId && t.name.toLowerCase() === newName.toLowerCase());
        if (isDuplicate) {
            alert("Такая задача уже есть в списке!");
            return;
        }
        task.name = newName;
        renderTasks(currentFilter);
    }
}
