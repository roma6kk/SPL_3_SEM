 class Human {
    constructor(name, surname, birthYear, address) {
        this.name = name;           
        this.surname = surname;    
        this.birthYear = birthYear;
        this.address = address;    
    }

     get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

     set age(newAge) {
        const currentYear = new Date().getFullYear();
        this.birthYear = currentYear - newAge;
    }

     setAddress(newAddress) {
        this.address = newAddress;
    }
}

class Student extends Human {
    constructor(name, surname, birthYear, address, faculty, course, group, idNumber) {
        super(name, surname, birthYear, address);
        this.faculty = faculty;     
        this.course = course;       
        this.group = group;         
        this.idNumber = idNumber;   
    }

     setCourse(newCourse) {
        this.course = newCourse;
    }

     setGroup(newGroup) {
        this.group = newGroup;
    }

     getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

 class Faculty {
    constructor(name, numGroups, numStudents) {
        this.name = name;           
        this.numGroups = numGroups; 
        this.numStudents = numStudents; 
        this.students = [];        
    }

     setNumGroups(newNumGroups) {
        this.numGroups = newNumGroups;
    }

     setNumStudents(newNumStudents) {
        this.numStudents = newNumStudents;
    }

     addStudent(student) {
        this.students.push(student);
    }

     getDev() {
        return this.students.filter(student => student.idNumber[1] === '3').length;
    }

     getGroup(groupName) {
        return this.students.filter(student => student.group === groupName);
    }
}

const student1 = new Student('Имя1', 'Фамилия1', 2006, 'Минск', 'ФИТ', 2, '301-1', '731201001');
const student2 = new Student('Имя2', 'Фамилия2', 2005, 'Гомель', 'ФИТ', 3, '301-4', '732202003');

const fitFaculty = new Faculty('Факультет информационных технологий', 5, 100);

fitFaculty.addStudent(student1);
fitFaculty.addStudent(student2);

 console.log(student1.getFullName());
console.log(student1.age); 
console.log(fitFaculty.getDev());
console.log(fitFaculty.getGroup('301-3')); 
