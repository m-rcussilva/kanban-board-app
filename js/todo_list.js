const form = document.getElementById("form");
const newTask = document.getElementById("new-task");
const root = document.getElementById("root");

const generateTemplate = (task) => {
    const htmlTemplate = `
        <li class="task-li" id="task-li" draggable="true">
            ${task}
            <i class="fa-solid fa-xmark" title="Apagar tarefa"></i>
        </li>
    `;

    root.innerHTML += htmlTemplate;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = newTask.value.trim();

    if (!task) {
        alert("O campo 'Nova tarefa' parece estar vazio. Por favor, adicione uma tarefa.");
        return;
    }

    generateTemplate(task);

    newTask.value = "";
});

root.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-xmark")) {
        e.target.parentElement.remove();
    }
});
