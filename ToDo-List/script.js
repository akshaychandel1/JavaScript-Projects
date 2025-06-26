const input = document.getElementById('inputField');
const addTaskBtn = document.getElementById('addTask');
const tasksLi = document.getElementById('tasks');

addTaskBtn.addEventListener('click',function addTasks(e) {
    e.preventDefault();
    const addedTask = input.value.trim()
    if (addedTask == "") {
        alert("Please Enter Task")
        return;
    }
    // console.log(addedTask);

    // create Li
    const LI = document.createElement('li')
    LI.textContent = addedTask
    // console.log(LI);

    //create Delete Btn
    const delbtn = document.createElement('span')
    delbtn.textContent='❌'
    delbtn.classList ='dlt-btn'

    //remove functionality to dlt btn
    delbtn.addEventListener('click',()=>{
        LI.remove();
    })
    LI.appendChild(delbtn)

    // now appending the whole li with dlt button to the list
    tasksLi.appendChild(LI);
    input.value = "";
})
