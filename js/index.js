// Array Task
var arrTask = [];

// Button onclick
function deleteTask(name){
    for(var index = 0; index < arrTask.length; index++){
        var task = arrTask[index];
        if(name === task.nameTask){
            arrTask.splice(index, 1);
            break;
        }
    }
    renderTask(arrTask);
    setLocalStorage();
}

function completed(name){
    for(var index = 0; index < arrTask.length; index++){
        var task = arrTask[index];
        if(name === task.nameTask){
            task.todo = true;
            break;
        }
    }
    renderTask(arrTask);
}

function todo(name){
    for(var index = 0; index < arrTask.length; index++){
        var task = arrTask[index];
        if(name === task.nameTask){
            task.todo = false;
            break;
        }
    }
    renderTask(arrTask);
}

// In 
function renderTask(arrTask){
    var contentOff = '';
    var contentOn = '';
    for(var index = 0; index < arrTask.length; index++){
        var task = arrTask[index];
        if(task.todo){
            contentOn += `
            <li class="card d-flex">
                <p>${task.nameTask}</p>
                <div class="button">
                    <button class="remove" onclick="deleteTask('${task.nameTask}')"><i class="fa fa-trash-alt icon"></i></button>
                    <button id="btnCheck" class="btnCheckOn" onclick="todo('${task.nameTask}')"><i class="fa fa-check-circle icon"></i></button>
                </div>
            </li>
            `;
        } else {
            contentOff += `
            <li class="card d-flex">
                <p>${task.nameTask}</p>
                <div class="button">
                    <button class="remove" onclick="deleteTask('${task.nameTask}')"><i class="fa fa-trash-alt icon"></i></button>
                    <button id="btnCheck" class="btnCheckOff" onclick="completed('${task.nameTask}')"><i class="fa fa-check-circle icon"></i></button>
                </div>
            </li>
            `;
        }
    }
    document.getElementById('todo').innerHTML = contentOff;
    document.getElementById('completed').innerHTML = contentOn;
}

// Local Storage
function setLocalStorage(){
    var stringArrTask = JSON.stringify(arrTask);

    localStorage.setItem('arrTask', stringArrTask);
}

function getLocalStorage(){
    if(localStorage.getItem('arrTask')){
        var stringTask = localStorage.getItem('arrTask');
        arrTask = JSON.parse(stringTask);
        console.log(arrTask);
    }
}

// Add item button
document.querySelector('#addItem').onclick = function(){
    var task = new Task();
    task.nameTask = document.querySelector('#newTask').value;

    var valid = true;
    valid = validation.checkRong(task.nameTask) & validation.checkTrung(task.nameTask);
    if(valid){
        document.getElementById('notiInput').style.display = 'none';
    } else{
        return;
    }
    
    arrTask.splice(0, 0, task);
    renderTask(arrTask);
    setLocalStorage();
    document.querySelector('#newTask').value = '';
}

// Start
getLocalStorage();
renderTask(arrTask);