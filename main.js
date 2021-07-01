(()=>{"use strict";var e={438:(e,t,n)=>{e.exports=n.p+"9677749013a2024d8807.png"},23:(e,t,n)=>{e.exports=n.p+"c44da5770bb7631c448f.png"},709:(e,t,n)=>{e.exports=n.p+"444e4de64a6e5c3235b9.png"},321:(e,t,n)=>{e.exports=n.p+"fa588ac6510b7b63ce2c.png"}},t={};function n(l){var s=t[l];if(void 0!==s)return s.exports;var c=t[l]={exports:{}};return e[l](c,c.exports,n),c.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(438),t=n(709),l=n(321),s=n(23);let c=document.getElementById("modal-display-task"),d=document.querySelector(".active_task_title"),a=document.querySelector(".active_task_description"),o=document.querySelector(".active_task_date"),i=document.getElementById("closeActive-task"),r=document.querySelector(".task__area");function m(e,t,n){this.title=e,this.description=t,this.dueDate=n}function p(){let e=document.querySelector(".task");for(;null!==e;)e.remove(),e=document.querySelector(".task")}function u(t,n,l){let i=document.createElement("div");i.className="task",i.id=`${n}-task`;let m=document.createElement("div");m.className="task__description",m.innerText=`${t.title}`,i.appendChild(m);let p=document.createElement("div");p.className="right__side";let u=document.createElement("div");u.className="task__date",u.innerText=`${t.dueDate}`,p.appendChild(u);let g=new Image;g.src=e,g.className="checkmark__icon",g.id=`${n}-check`,p.append(g);let k=new Image;k.src=s,k.className="delete__icon",k.id=`${n}-del`,p.append(k),i.appendChild(p),i.style.transform="none",i.style.opacity="1",r.appendChild(i),function(e,t){document.getElementById(`${t}-del`).addEventListener("click",(t=>{let n=parseInt(t.target.id.split("")[0]);document.getElementById(`${n}-task`).remove(),e.deleteTask(n),function(e,t){for(let n=0;n<e.completedTasksIndex.length;n++)if(e.completedTasksIndex[n]===t)return!0;return!1}(e,n)&&e.removeCompletedTask(n);for(let t=0;t<e.completedTasksIndex.length;t++)e.completedTasksIndex[t]>n&&(e.completedTasksIndex[t]-=1);for(;null!==document.getElementById(`${n+1}-del`);)document.getElementById(`${n+1}-del`).id=`${n}-del`,document.getElementById(`${n+1}-task`).id=`${n}-task`,document.getElementById(`${n+1}-check`).id=`${n}-check`,n++;T(),N()}))}(l,n),function(e,t){document.getElementById(`${t}-check`).addEventListener("click",(t=>{let n=parseInt(t.target.id.split("")[0]),l=document.getElementById(`${n}-task`);"none"==l.style.transform?(l.style.transform="scale(0.97)",l.style.opacity="0.4",e.pushCompletedTask(n)):(l.style.transform="none",l.style.opacity="1",e.removeCompletedTask(n)),N()}))}(l,n),function(e,t){document.getElementById(`${t}-task`).addEventListener("click",(n=>{if("checkmark__icon"!==n.target.className&&"delete__icon"!==n.target.className){let n=e.tasks[t];c.style.display="flex",d.innerText=n.title,a.innerText=n.description,o.innerText=n.dueDate}}))}(l,n)}i.addEventListener("click",(()=>{c.style.display="none"}));let g=window.localStorage,k=document.querySelector(".project__sidebar"),y=[],h=0;function f(e){this.name=e,this.tasks=[],this.completed=0,this.completedTasksIndex=[]}function E(e){y.push(e)}function I(n){let s=document.createElement("div");s.className="project__box",s.id=y.length-1+"-project";let c=document.createElement("div");c.className="project__title",c.innerText=n.name,s.appendChild(c);let d=new Image;d.src=l,d.className="trash__icon",d.id=""+(y.length-1),s.appendChild(d);let a=document.createElement("div");a.className="list";let o=new Image;o.src=t,o.className="list__icon",a.appendChild(o);let i=document.createElement("div");i.className="list__num",i.id=y.length-1+"-numList",i.innerText=n.tasks.length,a.appendChild(i),s.appendChild(a);let r=document.createElement("div");r.className="complete";let m=new Image;m.src=e,m.className="checkmark__icon",r.appendChild(m);let u=document.createElement("div");u.className="completed__tasks",u.id=y.length-1+"-complete",u.innerText=n.completed,r.appendChild(u),s.appendChild(r),k.appendChild(s),function(){let e=y.length-1;document.getElementById(`${e}`).addEventListener("click",(e=>{document.getElementById(e.target.nextSibling.parentElement.id).remove();let t=parseInt(e.target.id);for(function(e){y.splice(e,1)}(t),N(),p();null!==document.getElementById(`${t+1}`);)document.getElementById(`${t+1}`).id=`${t}`,document.getElementById(`${t+1}-project`).id=`${t}-project`,document.getElementById(`${t+1}-numList`).id=`${t}-numList`,document.getElementById(`${t+1}-complete`).id=`${t}-complete`,t++}))}(),function(){let e=y.length-1;document.getElementById(`${e}-project`).addEventListener("click",(e=>{let t="";if(""!==e.target.parentElement.id&&"trash__icon"!==e.target.className){t=e.target.parentElement.id;let n=parseInt(t.split("")[0]);h=n}else if(""!==e.target.id&&"trash__icon"!==e.target.className){t=e.target.id;let n=parseInt(t.split("")[0]);h=n}else if(""!==e.path[2].id&&"trash__icon"!==e.target.className){t=e.path[2].id;let n=parseInt(t.split("")[0]);h=n}"trash__icon"!==e.target.className&&(function(){for(let e=0;e<y.length;e++)document.getElementById(`${e}-project`).style.border=""}(),document.getElementById(t).style.border="1px solid white",x(y[h]))}))}()}function _(e){E(e),I(e),N()}function v(e){let t=document.getElementById(`${e}-task`);t.style.transform="scale(0.97)",t.style.opacity="0.4"}function x(e){p();for(let t=0;t<e.tasks.length;t++)u(e.tasks[t],t,e);for(let t=0;t<e.completedTasksIndex.length;t++)v(e.completedTasksIndex[t])}function T(){document.getElementById(`${h}-numList`).innerText=y[h].tasks.length}function B(){document.getElementById(`${h}-complete`).innerText=y[h].completed}function $(e,t,n){let l=new m(e,t,n);y[h].pushTask(l),u(l,y[h].tasks.length-1,y[h]),T(),N()}function N(){g.setItem("projectsArr",JSON.stringify(y))}function S(){let e=g.getItem("projectsArr");return JSON.parse(e)}f.prototype.deleteTask=function(e){this.tasks.splice(e,1)},f.prototype.pushTask=function(e){this.tasks.push(e)},f.prototype.pushCompletedTask=function(e){this.completedTasksIndex.push(e),this.completed+=1,B()},f.prototype.removeCompletedTask=function(e){let t=this.completedTasksIndex.indexOf(e);this.completedTasksIndex.splice(t,1),this.completed-=1,this.completed<0&&(this.completed=0,this.completedTasksIndex=[]),B()};let b=document.querySelector(".date__time");setInterval((function(){let e=(new Date).toLocaleString();b.innerText=e}),1e3);let w=document.getElementById("modal-bg"),C=document.getElementById("closeBtn"),L=document.getElementById("name"),j=document.getElementById("submitButton"),q=document.getElementById("modal-bg-task"),A=document.getElementById("title-task"),J=document.getElementById("description-task"),D=document.getElementById("date-task"),O=document.getElementById("submitButton-task"),H=document.getElementById("closeBtn-task");C.addEventListener("click",(()=>{w.style.display="none"})),j.addEventListener("click",(()=>{""!==L.value&&(_(new f(L.value)),w.style.display="none")})),document.querySelector(".add__task").addEventListener("click",(()=>{q.style.display="flex",A.value="",J.value="",D.value=""})),O.addEventListener("click",(()=>{let e=A.value,t=J.value,n=D.value.split("-");e&&t&&n&&$(e,t,n[1]+"-"+n[2]+"-"+n[0])})),H.addEventListener("click",(()=>{q.style.display="none"})),document.querySelector(".clear__all").addEventListener("click",(()=>{0!==y.length&&(y[h].tasks=[],p(),T(),N())})),document.querySelector(".add__project__btn").addEventListener("click",(()=>{w.style.display="flex",L.value=""})),null===S()?(_(new f("Complete TOP")),$("Javascript Section","complete all Javascript tasks and projects","N/A"),$("HTML and CSS","complete all HTML and CSS tasks and projects","N/A"),$("Node JS","complete all Node JS tasks and projects","N/A"),N()):function(){let e=S();y=[];for(let t=0;t<e.length;t++){let n=new f(e[t].name);n.tasks=e[t].tasks,n.completed=e[t].completed,n.completedTasksIndex=e[t].completedTasksIndex,E(n),I(y[t])}x(y[h])}()})()})();