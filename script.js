let i = 0;

function addTask(){
    i++;
    let task = document.getElementById("taskName").value;
    let div = document.createElement("div");
    let p = document.createElement("p");
    div.className = "tasks";
    p.textContent = task;
    div.appendChild(p);
    div.innerHTML += `<input type="button" id="${i}" value="Done" onclick="delTask(${i})">`;
    document.getElementById("inferior").appendChild(div);
}

function delTask(id){
    let task2 = document.getElementById(id);
    task2.parentElement.style.animationName = "slideToRight";
    setTimeout(function(){
        task2.parentElement.remove();
    }, 800);
}