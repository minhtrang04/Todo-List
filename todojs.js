const inputBox= document.getElementById("input-box");
const taskList = document.getElementById("task-list");

var inputErr = document.getElementById('input-err');

function addTask(){

    const taskInput = inputBox.value.trim(); 
    if(taskInput ===''){
       inputErr.innerHTML="This field cannot empty!";
    }
    else{
        inputErr.innerHTML = "";
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        taskList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML="\u00d7";//\u00d7 là mã Unicode của ký tự
        span.style.cursor = "pointer";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

taskList.addEventListener("click",function(e){
if(e.target.tagName === 'LI'){
    e.target.classList.toggle("task-item");
    saveData();
}
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
}

},false)

function saveData() {
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML=localStorage.getItem("data");
}
showTask();