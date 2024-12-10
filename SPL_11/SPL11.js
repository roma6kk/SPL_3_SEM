class Task {
    constructor(id, name, isCompleted = false) {
        this.id = id;   
        this.name = name;
        this.isCompleted = isCompleted; 
    }

    rename(newName) {
        this.name = newName;
    }

    toggleStatus() {
        this.isCompleted = !this.isCompleted;
    }
}

class Todolist {
    constructor(id, title) {
        this.id = id;       
        this.title = title; 
        this.tasks = [];    
    }

     rename(newTitle) {
        this.title = newTitle;
    }

     addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        } else {
            console.log("Можно добавлять только объекты типа Task!");
        }
    }

     filterTasks(isCompleted) {
        return this.tasks.filter(task => task.isCompleted === isCompleted);
    }
}

 
const workList = new Todolist(1, "Работа");
const task1 = new Task(101, "Написать отчет");
const task2 = new Task(102, "Созвон с клиентами", true);
const task3 = new Task(103, "Проверить почту");

workList.addTask(task1);
workList.addTask(task2);
workList.addTask(task3);

const personalList = new Todolist(2, "Личное");
const task4 = new Task(201, "Сходить в магазин");
const task5 = new Task(202, "Позвонить другу", true);

personalList.addTask(task4);
personalList.addTask(task5);

console.log(`Все задачи списка "${workList.title}":`, workList.tasks);
console.log(`Выполненные задачи списка "${workList.title}":`, workList.filterTasks(true));

console.log(`Все задачи списка "${personalList.title}":`, personalList.tasks);
console.log(`Невыполненные задачи списка "${personalList.title}":`, personalList.filterTasks(false));



task1.toggleStatus(); 
workList.rename("Рабочие дела");

console.log(`Обновленный список "${workList.title}":`, workList.tasks);

const newList = new Todolist(10, "LIST2");
const task10 = new Task(10, "dsaf");
newList.addTask(task10);
console.log(newList);
task10.rename("task10");
console.log(newList);
