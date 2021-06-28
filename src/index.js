import {project, createProject, projectsArr} from './project.js';

let add_project_modal = document.getElementById('modal-bg');
let add_project_modal_close = document.getElementById('closeBtn');
let projectName = document.getElementById('name');
let projectSubmit = document.getElementById('submitButton');

add_project_modal_close.addEventListener('click', () => {
    add_project_modal.style.display = 'none';
})

projectSubmit.addEventListener('click', () => {
    createProject(new project(projectName.value));
    add_project_modal.style.display = 'none';
})



//let project_sidebar = document.querySelector('.project__sidebar');



// console.log(projectsArr);


let add_task_btn = document.querySelector('.add__task');
add_task_btn.addEventListener('click', () => {

})


let clear_all_btn = document.querySelector('.clear__all');
clear_all_btn.addEventListener('click', () => {

})

let add__project__btn = document.querySelector('.add__project__btn');
add__project__btn.addEventListener('click', () => {
    add_project_modal.style.display = 'flex';
    projectName.value = '';
});


createProject(new project('get a job'));


