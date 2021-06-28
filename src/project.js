import checkMark from '/images/icons8-checkmark-64.png';
import listIcon from '/images/icons8-list-64.png';
import trashIcon from '/images/icons8-trash-can-24.png';


let project_sidebar = document.querySelector('.project__sidebar');
let projectsArr = [];

//project constructor
function project(name) {
    this.name = name;
    this.tasks = [];
    this.completed = 0;
}

project.prototype.deleteTask = function(taskIndex) {
    this.tasks.splice(taskIndex,1);
}

function deleteProject(index) {
    projectsArr.splice(index, 1);
}

function addProject(pro) {
    projectsArr.push(pro);

}


function addDeleteEvent() {
    let index = projectsArr.length - 1;
    let element = document.getElementById(`${index}`);
    element.addEventListener('click', (e) => {
        //console.log(e.target.nextSibling.parentElement.id); //gets project name

        let parentCard = document.getElementById(e.target.nextSibling.parentElement.id);
        parentCard.remove();
        let cardIndex = parseInt(e.target.id);
       
        //remove the element from DOM
        //projectName.remove();
        //remvoe project from main projects array
        deleteProject(cardIndex);

        //correct the index of the following project cards trash icon
        while(document.getElementById(`${cardIndex + 1}`) !== null) {
            let nextElement =  document.getElementById(`${cardIndex + 1}`)
            nextElement.id = `${cardIndex}`;
            cardIndex++;
    }

        //console.table(projectsArr)
    })

} 


function renderProject(project) {
    let project_box = document.createElement('div');
    project_box.className = "project__box";
    project_box.id = project.name;

    let project__title = document.createElement('div');
    project__title.className = "project__title";
    project__title.innerText = project.name;
    project_box.appendChild(project__title);

    let trash = new Image();
    trash.src = trashIcon;
    trash.className = "trash__icon";
    trash.id =`${projectsArr.length - 1}`;
    project_box.appendChild(trash);

    let listcontainer =  document.createElement('div');
    listcontainer.className = "list";

    //list icon
    let list = new Image();
    list.src = listIcon;
    list.className = "list__icon";
    listcontainer.appendChild(list);

    let numLists = document.createElement('div');
    numLists.className = "list__num";
    numLists.innerText = project.tasks.length;
    listcontainer.appendChild(numLists);

    project_box.appendChild(listcontainer);

    let completeContainer = document.createElement('div');
    completeContainer.className = "complete";

    //checkmark icon
    let check = new Image();
    check.src = checkMark;
    check.className = "checkmark__icon";
    completeContainer.appendChild(check);

    let numCompleted = document.createElement('div');
    numCompleted.className = "completed__tasks";
    numCompleted.innerText = project.completed;
    completeContainer.appendChild(numCompleted);

    project_box.appendChild(completeContainer);

    //append to project sidebar
    project_sidebar.appendChild(project_box);
    
    //add event listener for trash icon to delete a project
    addDeleteEvent();
}


function createProject(pro) {
    addProject(pro);
    renderProject(pro);
    //console.log(projectsArr)
}

export {project, createProject, addProject, projectsArr};