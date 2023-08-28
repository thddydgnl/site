const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () =>{
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="deleteBtn">삭제</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        const deleteBtn = li.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
});
