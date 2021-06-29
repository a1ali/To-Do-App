import checkMark from '/images/icons8-checkmark-64.png';
import deleteIcon from '/images/icons8-delete-bin-48.png'
import {updateProjectList} from './project.js'

let taskArea = document.querySelector('.task__area');



export function task(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

}

export function removeTasks() {
    let allTasks = document.querySelector('.task');
    while (allTasks !== null){
        allTasks.remove();
        allTasks = document.querySelector('.task');
    }
}


export function renderTask(t, index, project) {
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
    taskRightSide.append(check);

    let del = new Image();
    del.src = deleteIcon;
    del.className = 'delete__icon';
    del.id = `${index}-del`;
    taskRightSide.append(del);

    taskBox.appendChild(taskRightSide);

    taskArea.appendChild(taskBox);

    addDeleteEvent(project, index);

}

function addDeleteEvent(project, index) {
    let element = document.getElementById(`${index}-del`);
    //both the task id and trash can id have the same index num
    element.addEventListener('click', (e) => {
        //console.log(e.target.nextSibling.parentElement.id); //gets project name
        let activeIndex = parseInt(e.target.id.split('')[0])
        //console.log(e.target.id.split('')[0]);
        let parentElement = document.getElementById(`${activeIndex}-task`);
        parentElement.remove();

        //remove the task from the project tasks list
        project.deleteTask(activeIndex);

        //correct the index of the following task cards trash icon
        while(document.getElementById(`${activeIndex + 1}-del`) !== null) {
            let nextElement =  document.getElementById(`${activeIndex + 1}-del`)
            nextElement.id = `${activeIndex}-del`;
            let nextTaskElement = document.getElementById(`${activeIndex + 1}-task`);
            nextTaskElement.id = `${activeIndex}-task`
            activeIndex++;
        } 

        updateProjectList();

    })    
}