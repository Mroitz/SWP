const tasks = [];
getHTMLTasks();

document.getElementById("Addtask").addEventListener("click",function(){
    let newtask = document.getElementById("textnewtask").value
    tasks.push(newtask);
    getHTMLTasks();
});

function getHTMLTasks(){
    let html = "";
    tasks.forEach(element => {
        html += "<li><input type='checkbox'/>" + element + "</li>";
    
    });
    document.getElementById("tasklist").innerHTML = html;
    console.log(html);
}
