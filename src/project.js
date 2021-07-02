import checkMark from '/images/icons8-checkmark-64.png';
import listIcon from '/images/icons8-list-64.png';
import trashIcon from '/images/icons8-trash-can-24.png';

import { task, renderTask, removeTasks } from './task.js';

const myStorage = window.localStorage;

const project_sidebar = document.querySelector('.project__sidebar');

// array to hold all project objects
let projectsArr = [];

// current focused project object, will update on click
let activeProjectIndex = 0;

// project constructor
function project(name) {
  this.name = name;
  this.tasks = [];
  this.completed = 0;
  this.completedTasksIndex = [];
}

project.prototype.deleteTask = function (taskIndex) {
  this.tasks.splice(taskIndex, 1);
};

project.prototype.pushTask = function (task) {
  this.tasks.push(task);
};

project.prototype.pushCompletedTask = function (taskIndex) {
  this.completedTasksIndex.push(taskIndex);
  this.completed += 1;
  updateProjectCompletedAmount();
};

project.prototype.removeCompletedTask = function (taskIndex) {
  // find where in array is the index located then remove
  const index = this.completedTasksIndex.indexOf(taskIndex);
  this.completedTasksIndex.splice(index, 1);
  this.completed -= 1;
  if (this.completed < 0) {
    this.completed = 0;
    this.completedTasksIndex = [];
  }
  updateProjectCompletedAmount();
  // updateMyStorage();
};

function deleteProject(index) {
  projectsArr.splice(index, 1);
}

function addProject(pro) {
  projectsArr.push(pro);
}

function addDeleteEvent() {
  const index = projectsArr.length - 1;
  const element = document.getElementById(`${index}`);
  element.addEventListener('click', (e) => {
    // console.log(e.target.nextSibling.parentElement.id); //gets project name

    const parentCard = document.getElementById(e.target.nextSibling.parentElement.id);
    parentCard.remove();
    let cardIndex = parseInt(e.target.id);

    // remvoe project from main projects array
    deleteProject(cardIndex);
    // update localstorge
    updateMyStorage();

    removeTasks();

    // correct the index of the following project cards trash icon
    while (document.getElementById(`${cardIndex + 1}`) !== null) {
      // fix trash can index
      const nextElement = document.getElementById(`${cardIndex + 1}`);
      nextElement.id = `${cardIndex}`;
      // fix project index
      const nextProjectElement = document.getElementById(`${cardIndex + 1}-project`);
      nextProjectElement.id = `${cardIndex}-project`;
      // fix number of lists index
      const nextNumList = document.getElementById(`${cardIndex + 1}-numList`);
      nextNumList.id = `${cardIndex}-numList`;
      // fix num completed index
      const nextNumCompleted = document.getElementById(`${cardIndex + 1}-complete`);
      nextNumCompleted.id = `${cardIndex}-complete`;
      cardIndex++;
    }
  });
}

function addActiveProjectEvent() {
  const index = projectsArr.length - 1;
  const element = document.getElementById(`${index}-project`);
  element.addEventListener('click', (e) => {
    // focus on clicked project not the trash icon
    let projectId = '';
    if (e.target.parentElement.id !== '' && e.target.className !== 'trash__icon') {
      projectId = e.target.parentElement.id;
      const startingNum = parseInt(projectId.split('')[0]);
      activeProjectIndex = startingNum;
    } else if (e.target.id !== '' && e.target.className !== 'trash__icon') {
      projectId = e.target.id;
      const startingNum = parseInt(projectId.split('')[0]);
      activeProjectIndex = startingNum;
    } else if (e.path[2].id !== '' && e.target.className !== 'trash__icon') {
      projectId = e.path[2].id;
      const startingNum = parseInt(projectId.split('')[0]);
      activeProjectIndex = startingNum;
    }

    if (e.target.className !== 'trash__icon') {
      // remove all other border decoration
      removeBorderStyling();
      // set the current active project to have border style
      document.getElementById(projectId).style.border = '1px solid white';
      // render all that projects tasks to display
      displayProjectTasks(projectsArr[activeProjectIndex]);
    }
  });
}

function removeBorderStyling() {
  for (let i = 0; i < projectsArr.length; i++) {
    // console.log(i);
    document.getElementById(`${i}-project`).style.border = '';
  }
}

function renderProject(project) {
  const project_box = document.createElement('div');
  project_box.className = 'project__box';
  project_box.id = `${projectsArr.length - 1}-project`;

  const project__title = document.createElement('div');
  project__title.className = 'project__title';
  project__title.innerText = project.name;
  project_box.appendChild(project__title);

  const trash = new Image();
  trash.src = trashIcon;
  trash.className = 'trash__icon';
  trash.id = `${projectsArr.length - 1}`;
  project_box.appendChild(trash);

  const listcontainer = document.createElement('div');
  listcontainer.className = 'list';

  // list icon
  const list = new Image();
  list.src = listIcon;
  list.className = 'list__icon';
  listcontainer.appendChild(list);

  const numLists = document.createElement('div');
  numLists.className = 'list__num';
  numLists.id = `${projectsArr.length - 1}-numList`;
  numLists.innerText = project.tasks.length;
  listcontainer.appendChild(numLists);

  project_box.appendChild(listcontainer);

  const completeContainer = document.createElement('div');
  completeContainer.className = 'complete';

  // checkmark icon
  const check = new Image();
  check.src = checkMark;
  check.className = 'checkmark__icon';
  completeContainer.appendChild(check);

  const numCompleted = document.createElement('div');
  numCompleted.className = 'completed__tasks';
  numCompleted.id = `${projectsArr.length - 1}-complete`;
  numCompleted.innerText = project.completed;
  completeContainer.appendChild(numCompleted);

  project_box.appendChild(completeContainer);

  // append to project sidebar
  project_sidebar.appendChild(project_box);

  // add event listener for trash icon to delete a project
  addDeleteEvent();
  addActiveProjectEvent();
}

function createProject(pro) {
  addProject(pro);
  renderProject(pro);
  // update localstorge
  updateMyStorage();
  // console.log(projectsArr)
}

function changeCompletedTaskStyle(index) {
  const parentElement = document.getElementById(`${index}-task`);
  parentElement.style.transform = 'scale(0.97)';
  parentElement.style.opacity = '0.4';
}

function displayProjectTasks(pro) {
  // first remove all previous project tasks
  removeTasks();
  // interate through tasks list and display each one
  for (let i = 0; i < pro.tasks.length; i++) {
    renderTask(pro.tasks[i], i, pro);
  }
  // fix styling of completed tasks
  for (let i = 0; i < pro.completedTasksIndex.length; i++) {
    changeCompletedTaskStyle(pro.completedTasksIndex[i]);
  }
}
function updateProjectList() {
  const listamount = document.getElementById(`${activeProjectIndex}-numList`);
  // projectsArr[activeProjectIndex].completed += 1;
  listamount.innerText = projectsArr[activeProjectIndex].tasks.length;
}

function updateProjectCompletedAmount() {
  // update the projects completed task amount
  const completedAmount = document.getElementById(`${activeProjectIndex}-complete`);
  completedAmount.innerText = projectsArr[activeProjectIndex].completed;
}

function createTask(title, description, dueDate) {
  // create task object push it into active project object and render
  const newTask = new task(title, description, dueDate);
  projectsArr[activeProjectIndex].pushTask(newTask);
  const taskIndex = projectsArr[activeProjectIndex].tasks.length - 1;
  const workingProject = projectsArr[activeProjectIndex];
  renderTask(newTask, taskIndex, workingProject);
  updateProjectList();
  // update localstorge
  updateMyStorage();
}

function clearAllTasks() {
  // remove all tasks from project object and clear task window
  if (projectsArr.length !== 0) {
    projectsArr[activeProjectIndex].tasks = [];
    projectsArr[activeProjectIndex].completedTasksIndex = [];
    projectsArr[activeProjectIndex].completed = 0;
    removeTasks();
    updateProjectList();
    updateProjectCompletedAmount();
    // update localstorge
    updateMyStorage();
  }
}

function updateMyStorage() {
  myStorage.setItem('projectsArr', JSON.stringify(projectsArr));
  // console.log('set local storage')
}

function getLocalStorage() {
  const getStorage = myStorage.getItem('projectsArr');
  return JSON.parse(getStorage);
}

function setProjectsArrAsLocal() {
  // if local storage is not null set projects array as local storge;
  // projectsArr = getLocalStorage();
  const restoredprojectArr = getLocalStorage();
  projectsArr = [];
  // local storage only stores string and not the member functions
  // create new project objects with the values in local storage and append to projects array
  for (let i = 0; i < restoredprojectArr.length; i++) {
    const currProject = new project(restoredprojectArr[i].name);
    currProject.tasks = restoredprojectArr[i].tasks;
    currProject.completed = restoredprojectArr[i].completed;
    currProject.completedTasksIndex = restoredprojectArr[i].completedTasksIndex;
    // add the project to projects array
    addProject(currProject);
    // render the project card in the project sidebar
    renderProject(projectsArr[i]);
  }
  // display active project tasks
  displayProjectTasks(projectsArr[activeProjectIndex]);
}

export {
  project, createProject, addProject, setProjectsArrAsLocal, createTask,
  clearAllTasks, updateProjectList, updateMyStorage, getLocalStorage,
};
