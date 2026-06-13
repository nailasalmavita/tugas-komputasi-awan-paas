const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const clearCompleted = document.getElementById("clearCompleted");

let tasks = JSON.parse(localStorage.getItem("tugas12paasTasks")) || [
  { id: 1, text: "Mencari penyedia PaaS gratis", done: true },
  { id: 2, text: "Membuat aplikasi sederhana", done: false },
  { id: 3, text: "Deploy aplikasi ke Vercel", done: false }
];

function saveTasks() {
  localStorage.setItem("tugas12paasTasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = '<li class="empty">Belum ada tugas yang dicatat.</li>';
  }

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item ${task.done ? "done" : ""}`;

    item.innerHTML = `
      <label class="task-left">
        <input type="checkbox" ${task.done ? "checked" : ""}>
        <span>${task.text}</span>
      </label>
      <button type="button" class="delete-btn">Hapus</button>
    `;

    item.querySelector("input").addEventListener("change", (event) => {
      task.done = event.target.checked;
      saveTasks();
      renderTasks();
    });

    item.querySelector(".delete-btn").addEventListener("click", () => {
      tasks = tasks.filter((currentTask) => currentTask.id !== task.id);
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(item);
  });

  totalTasks.textContent = tasks.length;
}

function addTask(text) {
  const taskText = text.trim();
  if (!taskText) return;

  tasks.push({
    id: Date.now(),
    text: taskText,
    done: false
  });

  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
});

clearCompleted.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.done);
  saveTasks();
  renderTasks();
});

renderTasks();