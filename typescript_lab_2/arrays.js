"use strict";
var array = [];
function addTask(tasks) {
    var counter = array.push(tasks);
    console.log(tasks + " was added to the array.");
    return counter;
}
function listAllTasks() {
    /*array.forEach(function (tasks)
    {
        console.log(tasks)
    }) */
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        console.log(i);
    }
}
function deleteTask(tasks) {
    var index = array.indexOf("World!");
    if (index > -1) {
        array.splice(index, 1);
        console.log(tasks + " has been deleted.");
    }
    return array.length;
}
addTask("Hello");
var x = addTask("World!");
console.log(x);

listAllTasks();

var counter = deleteTask("Hello");