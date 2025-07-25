const todos = [
    { title: "Do Module 10 Assignment", done: true },
    { title: "JavaScript Code Practice", done: true },
    { title: "Update resume", done: false },
    { title: "Join Support Class", done: true },
    { title: "Morning exercise", done: false },
    { title: "Submit assignment", done: false }
];

const completedTasks = todos.filter(todo => todo.done === true);
const ongoingTasks = todos.filter(todo => todo.done === false);

console.log("Done: ");
completedTasks.forEach((task, index)=>{console.log(`${index + 1}. ${task.title}`)});

console.log("\nOngoing: ");
ongoingTasks.forEach((task, index)=>{console.log(`${index + 1}. ${task.title}`)});
