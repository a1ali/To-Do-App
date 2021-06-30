import checkMark from '/images/icons8-checkmark-64.png';
import deleteIcon from '/images/icons8-delete-bin-48.png'
import {updateProjectList} from './project.js'


//modal to display task information
let displayModal = document.getElementById('modal-display-task');
let activeTaskTitle = document.querySelector('.active_task_title');
let activeTaskDescription = document.querySelector('.active_task_description');
let activeTaskDate = document.querySelector('.active_task_date'); 
let activeCloseBtn = document.getElementById('closeActive-task')

let taskArea = document.querySelector('.task__area');



export function task(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

}

export function removeTasks() {
    //remove all tasks from the active task container
    let allTasks = document.querySelector('.task');
    while (allTasks !== null){
        allTasks.remove();
        allTasks = document.querySelector('.task');
    }
}


export function renderTask(t, index, project) {
    //template followed to create task card example in index.html
    let taskBox = document.createElement('div');
    taskBox.className = 'task';
    taskBox.id = `${index}-task`;

    let taskTitle = document.createElement('div');
    taskTitle.className = 'task__description';
    taskTitle.innerText = `${t.title}`;

    taskBox.appendChild(taskTitle);

    let taskRightSide = document.createElement('div');
    taskRightSide.className = 'right__side';

    let taskDate = document.createElement('div');
    taskDate.className = 'task__date';
    taskDate.innerText = `${t.dueDate}`;
    taskRightSide.appendChild(taskDate);

    let check = new Image();
    check.src = checkMark;
    check.className = 'checkmark__icon';
    check.id = `${index}-check`;
    taskRightSide.append(check);

    let del = new Image();
    del.src = deleteIcon;
    del.className = 'delete__icon';
    del.id = `${index}-del`;
    taskRightSide.append(del);

    taskBox.appendChild(taskRightSide);
    taskBox.style.transform = 'none';
    taskBox.style.opacity = '1';

    taskArea.appendChild(taskBox);

    //add event listener for delete button
    addDeleteEvent(project, index);
    //add event listener for check button
    addCheckEvent(project, index);
    taskClickEvent(project,index)

}

function addDeleteEvent(project, index) {
    let element = document.getElementById(`${index}-del`);
    //both the task id and trash can id have the same index num
    element.addEventListener('click', (e) => {
        //get the current active index of the trash icon
        let activeIndex = parseInt(e.target.id.split('')[0])
        //both the task index and trash index are the same
        let parentElement = document.getElementById(`${activeIndex}-task`);
        parentElement.remove();


        //remove the task from the project tasks list
        project.deleteTask(activeIndex);
        
        //check if the deleted project was completed
        if (checkDeleteTaskIsComplete(project, activeIndex)) {
            //if true remove the index from completed tasks index array 
            // and decrement completed tasks
            project.removeCompletedTask(activeIndex);
        }

        //correct the index of the following task cards trash icon and check icons
        while(document.getElementById(`${activeIndex + 1}-del`) !== null) {
            //trash icon index
            let nextElement =  document.getElementById(`${activeIndex + 1}-del`)
            nextElement.id = `${activeIndex}-del`;
            //task index
            let nextTaskElement = document.getElementById(`${activeIndex + 1}-task`);
            nextTaskElement.id = `${activeIndex}-task`
            //check mark index
            let nextCheckElement = document.getElementById(`${activeIndex + 1}-check`);
            nextCheckElement.id = `${activeIndex}-check`
            activeIndex++;
        } 
        //fix the project sidebar list amount
        updateProjectList();
        
    })    
}

function checkDeleteTaskIsComplete(project, elementIndex) {
    //iterate thru projects completed tasks and check if elementIndex is in it.
    for (let i = 0; i < project.completedTasksIndex.length; i++){
        if(project.completedTasksIndex[i] === elementIndex) {
            return true;
        }
    }
    return false;
}

function addCheckEvent(project, index) {
    //event listener for check icon to set if task is completed
    let element = document.getElementById(`${index}-check`);
    element.addEventListener('click', (e) => {
        //get index of clicked check
        let activeIndex = parseInt(e.target.id.split('')[0]);
        let parentElement = document.getElementById(`${activeIndex}-task`);
        //if not completed reduce scale and change opacity
        if (parentElement.style.transform == 'none'){
            parentElement.style.transform = 'scale(0.97)';
            parentElement.style.opacity = '0.4';
            project.pushCompletedTask(activeIndex);
        }
        //if clicked againg undo completion
        else {
            parentElement.style.transform = 'none';
            parentElement.style.opacity = '1';
            project.removeCompletedTask(activeIndex);
        }
    })
}


function taskClickEvent(project, index){
    //if task clicked show task modal with description filled in
    let element = document.getElementById(`${index}-task`);
    element.addEventListener('click', (e) => {
        //if task card is clicked make sure its not the delete or check icon 
        if (e.target.className !== 'checkmark__icon' && e.target.className !== 'delete__icon'){
            //console.log(e);
            let clickTask = project.tasks[index];
            displayModal.style.display = 'flex';
            activeTaskTitle.innerText = clickTask.title;
            activeTaskDescription.innerText = clickTask.description;
            activeTaskDate.innerText = clickTask.dueDate;   
        }
        
    })

}

activeCloseBtn.addEventListener('click', () => {
    //close the modal that displays task info
    displayModal.style.display = 'none';
})