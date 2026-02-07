const taskList = document.getElementById("taskList");

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");

    // Show completed message
    if (li.classList.contains("completed")) {
      alert("Task Completed ✅");
    }
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = () => {
    li.remove();
  };

  // Add buttons
  const btnDiv = document.createElement("div");
  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnDiv);

  taskList.appendChild(li);

  input.value = ""; // clear input
}