import {
  project,
  createProject,
  createTask,
  clearAllTasks,
  updateMyStorage,
  getLocalStorage,
  setProjectsArrAsLocal,
} from "./project";
import { getTime } from "./date";

// update time every 1000ms
setInterval(getTime, 1000);

const add_project_modal = document.getElementById("modal-bg");
const add_project_modal_close = document.getElementById("closeBtn");
const projectName = document.getElementById("name");
const projectSubmit = document.getElementById("submitButton");

// modal the contains the form to create a new task.
const add_task_modal = document.getElementById("modal-bg-task");
const task_title = document.getElementById("title-task");
const task_description = document.getElementById("description-task");
const task_date = document.getElementById("date-task");
const task_submit = document.getElementById("submitButton-task");
const task_close_btn = document.getElementById("closeBtn-task");

// close button for add project modal
add_project_modal_close.addEventListener("click", () => {
  add_project_modal.style.display = "none";
});

// event listener for submitting project name
projectSubmit.addEventListener("click", () => {
  if (projectName.value !== "") {
    createProject(new project(projectName.value));
    add_project_modal.style.display = "none";
  }
});

// open modal to fill in task information
const add_task_btn = document.querySelector(".add__task");
add_task_btn.addEventListener("click", () => {
  // createTask('test', 'testing', 'now');
  add_task_modal.style.display = "flex";
  task_title.value = "";
  task_description.value = "";
  task_date.value = "";
});

// create a new task if submit btn is pressed
task_submit.addEventListener("click", () => {
  const taskName = task_title.value;
  const taskDescritpion = task_description.value;
  const taskDate = task_date.value.split("-");

  if (taskName && taskDescritpion && taskDate) {
    createTask(
      taskName,
      taskDescritpion,
      `${taskDate[1]}-${taskDate[2]}-${taskDate[0]}`
    ); // formart the date to be mm/dd/yyyy
  }
});

// close the task modal is x is pressed
task_close_btn.addEventListener("click", () => {
  add_task_modal.style.display = "none";
});

// remove all tasks for current project and clear active task window
const clear_all_btn = document.querySelector(".clear__all");
clear_all_btn.addEventListener("click", () => {
  clearAllTasks();
});

// open project modal to input project name
const add__project__btn = document.querySelector(".add__project__btn");
add__project__btn.addEventListener("click", () => {
  add_project_modal.style.display = "flex";
  projectName.value = "";
});

if (getLocalStorage() === null) {
  // Example project and tasks
  createProject(new project("Complete TOP"));
  createTask(
    "Javascript Section",
    "complete all Javascript tasks and projects",
    "N/A"
  );
  createTask(
    "HTML and CSS",
    "complete all HTML and CSS tasks and projects",
    "N/A"
  );
  createTask("Node JS", "complete all Node JS tasks and projects", "N/A");
  updateMyStorage();
} else {
  setProjectsArrAsLocal();
  // displayAllProjects();
}
