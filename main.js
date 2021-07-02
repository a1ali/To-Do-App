(()=>{"use strict";var e={438:(e,t,n)=>{e.exports=n.p+"9677749013a2024d8807.png"},23:(e,t,n)=>{e.exports=n.p+"c44da5770bb7631c448f.png"},709:(e,t,n)=>{e.exports=n.p+"444e4de64a6e5c3235b9.png"},321:(e,t,n)=>{e.exports=n.p+"fa588ac6510b7b63ce2c.png"}},t={};function n(s){var c=t[s];if(void 0!==c)return c.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(438),t=n(709),s=n(321),c=n(23);const o=document.getElementById("modal-display-task"),l=document.querySelector(".active_task_title"),d=document.querySelector(".active_task_description"),a=document.querySelector(".active_task_date"),i=document.getElementById("closeActive-task"),r=document.querySelector(".task__area");function m(e,t,n){this.title=e,this.description=t,this.dueDate=n}function p(){let e=document.querySelector(".task");for(;null!==e;)e.remove(),e=document.querySelector(".task")}function u(t,n,s){const i=document.createElement("div");i.className="task",i.id=`${n}-task`;const m=document.createElement("div");m.className="task__description",m.innerText=`${t.title}`,i.appendChild(m);const p=document.createElement("div");p.className="right__side";const u=document.createElement("div");u.className="task__date",u.innerText=`${t.dueDate}`,p.appendChild(u);const g=new Image;g.src=e,g.className="checkmark__icon",g.id=`${n}-check`,p.append(g);const k=new Image;k.src=c,k.className="delete__icon",k.id=`${n}-del`,p.append(k),i.appendChild(p),i.style.transform="none",i.style.opacity="1",r.appendChild(i),function(e,t){document.getElementById(`${t}-del`).addEventListener("click",(t=>{let n=parseInt(t.target.id.split("")[0]);document.getElementById(`${n}-task`).remove(),e.deleteTask(n),function(e,t){for(let n=0;n<e.completedTasksIndex.length;n++)if(e.completedTasksIndex[n]===t)return!0;return!1}(e,n)&&e.removeCompletedTask(n);for(let t=0;t<e.completedTasksIndex.length;t++)e.completedTasksIndex[t]>n&&(e.completedTasksIndex[t]-=1);for(;null!==document.getElementById(`${n+1}-del`);)document.getElementById(`${n+1}-del`).id=`${n}-del`,document.getElementById(`${n+1}-task`).id=`${n}-task`,document.getElementById(`${n+1}-check`).id=`${n}-check`,n++;T(),N()}))}(s,n),function(e,t){document.getElementById(`${t}-check`).addEventListener("click",(t=>{const n=parseInt(t.target.id.split("")[0]),s=document.getElementById(`${n}-task`);"none"==s.style.transform?(s.style.transform="scale(0.97)",s.style.opacity="0.4",e.pushCompletedTask(n)):(s.style.transform="none",s.style.opacity="1",e.removeCompletedTask(n)),N()}))}(s,n),function(e,t){document.getElementById(`${t}-task`).addEventListener("click",(n=>{if("checkmark__icon"!==n.target.className&&"delete__icon"!==n.target.className){const n=e.tasks[t];o.style.display="flex",l.innerText=n.title,d.innerText=n.description,a.innerText=n.dueDate}}))}(s,n)}i.addEventListener("click",(()=>{o.style.display="none"}));const g=window.localStorage,k=document.querySelector(".project__sidebar");let y=[],h=0;function f(e){this.name=e,this.tasks=[],this.completed=0,this.completedTasksIndex=[]}function I(e){y.push(e)}function E(n){const c=document.createElement("div");c.className="project__box",c.id=y.length-1+"-project";const o=document.createElement("div");o.className="project__title",o.innerText=n.name,c.appendChild(o);const l=new Image;l.src=s,l.className="trash__icon",l.id=""+(y.length-1),c.appendChild(l);const d=document.createElement("div");d.className="list";const a=new Image;a.src=t,a.className="list__icon",d.appendChild(a);const i=document.createElement("div");i.className="list__num",i.id=y.length-1+"-numList",i.innerText=n.tasks.length,d.appendChild(i),c.appendChild(d);const r=document.createElement("div");r.className="complete";const m=new Image;m.src=e,m.className="checkmark__icon",r.appendChild(m);const u=document.createElement("div");u.className="completed__tasks",u.id=y.length-1+"-complete",u.innerText=n.completed,r.appendChild(u),c.appendChild(r),k.appendChild(c),function(){const e=y.length-1;document.getElementById(`${e}`).addEventListener("click",(e=>{document.getElementById(e.target.nextSibling.parentElement.id).remove();let t=parseInt(e.target.id);for(function(e){y.splice(e,1)}(t),N(),p();null!==document.getElementById(`${t+1}`);)document.getElementById(`${t+1}`).id=`${t}`,document.getElementById(`${t+1}-project`).id=`${t}-project`,document.getElementById(`${t+1}-numList`).id=`${t}-numList`,document.getElementById(`${t+1}-complete`).id=`${t}-complete`,t++}))}(),function(){const e=y.length-1;document.getElementById(`${e}-project`).addEventListener("click",(e=>{let t="";if(""!==e.target.parentElement.id&&"trash__icon"!==e.target.className){t=e.target.parentElement.id;const n=parseInt(t.split("")[0]);h=n}else if(""!==e.target.id&&"trash__icon"!==e.target.className){t=e.target.id;const n=parseInt(t.split("")[0]);h=n}else if(""!==e.path[2].id&&"trash__icon"!==e.target.className){t=e.path[2].id;const n=parseInt(t.split("")[0]);h=n}"trash__icon"!==e.target.className&&(function(){for(let e=0;e<y.length;e++)document.getElementById(`${e}-project`).style.border=""}(),document.getElementById(t).style.border="1px solid white",x(y[h]))}))}()}function _(e){I(e),E(e),N()}function v(e){const t=document.getElementById(`${e}-task`);t.style.transform="scale(0.97)",t.style.opacity="0.4"}function x(e){p();for(let t=0;t<e.tasks.length;t++)u(e.tasks[t],t,e);for(let t=0;t<e.completedTasksIndex.length;t++)v(e.completedTasksIndex[t])}function T(){document.getElementById(`${h}-numList`).innerText=y[h].tasks.length}function B(){document.getElementById(`${h}-complete`).innerText=y[h].completed}function $(e,t,n){const s=new m(e,t,n);y[h].pushTask(s),u(s,y[h].tasks.length-1,y[h]),T(),N()}function N(){g.setItem("projectsArr",JSON.stringify(y))}function S(){const e=g.getItem("projectsArr");return JSON.parse(e)}f.prototype.deleteTask=function(e){this.tasks.splice(e,1)},f.prototype.pushTask=function(e){this.tasks.push(e)},f.prototype.pushCompletedTask=function(e){this.completedTasksIndex.push(e),this.completed+=1,B()},f.prototype.removeCompletedTask=function(e){const t=this.completedTasksIndex.indexOf(e);this.completedTasksIndex.splice(t,1),this.completed-=1,this.completed<0&&(this.completed=0,this.completedTasksIndex=[]),B()};const b=document.querySelector(".date__time");setInterval((function(){const e=(new Date).toLocaleString();b.innerText=e}),1e3);const w=document.getElementById("modal-bg"),C=document.getElementById("closeBtn"),L=document.getElementById("name"),j=document.getElementById("submitButton"),q=document.getElementById("modal-bg-task"),A=document.getElementById("title-task"),J=document.getElementById("description-task"),D=document.getElementById("date-task"),O=document.getElementById("submitButton-task"),H=document.getElementById("closeBtn-task");C.addEventListener("click",(()=>{w.style.display="none"})),j.addEventListener("click",(()=>{""!==L.value&&(_(new f(L.value)),w.style.display="none")})),document.querySelector(".add__task").addEventListener("click",(()=>{q.style.display="flex",A.value="",J.value="",D.value=""})),O.addEventListener("click",(()=>{const e=A.value,t=J.value,n=D.value.split("-");e&&t&&n&&$(e,t,`${n[1]}-${n[2]}-${n[0]}`)})),H.addEventListener("click",(()=>{q.style.display="none"})),document.querySelector(".clear__all").addEventListener("click",(()=>{0!==y.length&&(y[h].tasks=[],y[h].completedTasksIndex=[],y[h].completed=0,p(),T(),B(),N())})),document.querySelector(".add__project__btn").addEventListener("click",(()=>{w.style.display="flex",L.value=""})),null===S()?(_(new f("Complete TOP")),$("Javascript Section","complete all Javascript tasks and projects","N/A"),$("HTML and CSS","complete all HTML and CSS tasks and projects","N/A"),$("Node JS","complete all Node JS tasks and projects","N/A"),N()):function(){const e=S();y=[];for(let t=0;t<e.length;t++){const n=new f(e[t].name);n.tasks=e[t].tasks,n.completed=e[t].completed,n.completedTasksIndex=e[t].completedTasksIndex,I(n),E(y[t])}x(y[h])}()})()})();