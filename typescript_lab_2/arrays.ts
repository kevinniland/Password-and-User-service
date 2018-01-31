let array: Array<string> = [];

function addTask(tasks: string): number
{
    let counter: number = array.push(tasks);

    console.log(tasks + " was added to the array.");

    return counter;
}

function listAllTasks()
{
    /*array.forEach(function (tasks)
    {
        console.log(tasks)
    })  >> Alternate way of listing items in an array */

    for (let i of array)
    {
        console.log(i);
    }
}

function deleteTask(tasks: string): number
{
    let index: number = array.indexOf(tasks);

    if (index > -1)
    {
        array.splice(index, 1);

        console.log(tasks + " has been deleted.");
    }

    return array.length;
}

addTask("Hello");
let x: number = addTask("World!");
console.log(x);

listAllTasks();

let counter: number = deleteTask("Hello");