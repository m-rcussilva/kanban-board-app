const containers = document.querySelectorAll(".container");
const rootContainer = document.querySelectorAll(".rootContainer");

rootContainer.forEach((r) => {
    r.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    });
});

containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    container.addEventListener("drop", (e) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData("text/plain");
        e.target.appendChild(document.getElementById(taskId));
    });
});