var taskList = ["web", "site", "class"];

console.log(taskList);


// var list = "<ul>";
// list += "<li>" + taskList[0] + "</li>";
// list += "<li>" + taskList[1] + "</li>";
// list += "</ul>";

// console.log(list)
// document.getElementById("test").innerHTML = list;



function load(){
    var list = "<ul>";
    for(i = 0; i < taskList.length; i++){
        list += "<li>" + taskList[i] + "</li>";
    }
    list += "</ul>"

    document.getElementById("test").innerHTML = list;
}

 document.getElementById("add").addEventListener('click', function(){
    taskList.push("work");
    console.log(taskList.length);
    console.log(taskList);
    load();
 })

 document.getElementById("todo").addEventListener('click', function(){
    var rand = Math.floor(Math.random() * taskList.length);
    console.log(rand);
    document.getElementById("dothis").innerHTML = taskList[rand];
 })

 load();