




let task = ["study", "assigment", "reading", "workout", "buyVegitable"]

console.log("The first task list is : ", task)

for (let i = 1; i < task.length; i++) {
    task[i - 1] = task[i]
}
task.length = task.length - 1
console.log("Task list after removing first element :", task)

newLength = task.length + 2
let newTask = new Array(newLength)
newTask[0] = "play cricket"
newTask[1] = "Go to market"

for (let i = 0; i < task.length; i++) {
    newTask[i + 2] = task[i]
}
console.log("The two new high Priority task after adding :", newTask)

newTask[newTask.length - 1] = "Attend Classes"

console.log("After replacing the last task :", newTask)



console.log("the final list after all the operations: ", newTask)

