const input = document.getElementById('inputField');
const addTaskBtn = document.getElementById('addTask');
const tasksLi = document.getElementById('tasks');

addTaskBtn.addEventListener('click', function addTasks(e) {
    e.preventDefault();

    const addedTask = input.value.trim();
    if (addedTask === "") {
        alert("Please Enter Task");
        return;
    }

    // Create <li>
    const LI = document.createElement('li');

    // ✅ Separate span to hold the text (important for editing)
    const textSpan = document.createElement('span');
    textSpan.textContent = addedTask;
    LI.appendChild(textSpan);

    // ✅ Create Edit Button
    const editbtn = document.createElement('span');
    editbtn.textContent = ' ✏️';
    editbtn.classList.add('edt-btn'); // ❗ FIXED: previously you wrote `classList.add =`

    // 🛠️ Edit Functionality
    editbtn.addEventListener('click', () => {
        const newText = prompt('Edit Your Task', textSpan.textContent); // ❗ FIXED: Use textSpan, not LI
        if (newText !== null && newText.trim() !== "") {
            textSpan.textContent = newText.trim(); // ❗ FIXED: using correct variable
        }
    });
    LI.appendChild(editbtn);

    // ✅ Create Delete Button
    const delbtn = document.createElement('span');
    delbtn.textContent = ' ❌';
    delbtn.classList.add('dlt-btn'); // ❗ FIXED: previously `classList.add =`

    // 🗑️ Delete Functionality
    delbtn.addEventListener('click', () => {
        LI.remove();
    });
    LI.appendChild(delbtn);

    // ✅ Add <li> to task list
    tasksLi.appendChild(LI);

    // ✅ Clear input field
    input.value = "";
});
