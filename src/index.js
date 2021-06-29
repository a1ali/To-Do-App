import {project, createProject, projectsArr, createTask, clearAllTasks} from './project.js';
import {getTime} from './date.js';

setInterval(getTime, 1000);

let add_project_modal = document.getElementById('modal-bg');
let add_project_modal_close = document.getElementById('closeBtn');
let projectName = document.getElementById('name');
let projectSubmit = document.getElementById('submitButton');

add_project_modal_close.addEventListener('click', () => {
    add_project_modal.style.display = 'none';
})

projectSubmit.addEventListener('click', () => {

    if (projectName.value !== '') {
        createProject(new project(projectName.value));
        add_project_modal.style.display = 'none';
    }

})



//let project_sidebar = document.querySelector('.project__sidebar');



// console.log(projectsArr);0


let add_task_btn = document.querySelector('.add__task');
add_task_btn.addEventListener('click', () => {
    createTask('test', 'testing', 'now');
})


let clear_all_btn = document.querySelector('.clear__all');
clear_all_btn.addEventListener('click', () => {
    clearAllTasks();

})

let add__project__btn = document.querySelector('.add__project__btn');
add__project__btn.addEventListener('click', () => {
    add_project_modal.style.display = 'flex';
    projectName.value = '';
});


createProject(new project('Complete TOP'));
createTask('Javascript Section', 'complete all Javascript tasks and projects', 'N/A');
createTask('HTML and CSS', 'complete all HTML and CSS tasks and projects', 'N/A');
createTask('Node JS', 'complete all Node JS tasks and projects', 'N/A');


