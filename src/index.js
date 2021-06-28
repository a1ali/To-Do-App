import {project, createProject, projectsArr} from './project.js';

//let project_sidebar = document.querySelector('.project__sidebar');

createProject(new project('zero'))
createProject(new project('one'));
createProject(new project('two'));
createProject(new project('three'));
createProject(new project('four'));
createProject(new project('five'));

// console.log(projectsArr);


let add_task_btn = document.querySelector('.add__task');
add_task_btn.addEventListener('click', function() {console.log('add task button function')})


let clear_all_btn = document.querySelector('.clear__all');
clear_all_btn.addEventListener('click', function() {console.log('add clear all button function')})

let add__project__btn = document.querySelector('.add__project__btn');
add__project__btn.addEventListener('click', function() {console.log('add project button function')});



