let studentSet = new Set();

function addStudent(zachetkaNumber, group, fullName) {
  const student = { zachetkaNumber, group, fullName };
  
  if ([...studentSet].some(s => s.zachetkaNumber === zachetkaNumber)) {
    console.log(`Студент с номером зачетки ${zachetkaNumber} уже существует.`);
  } else {
    studentSet.add(student);
    console.log(`Студент "${fullName}" добавлен.`);
  }
}

function removeStudentByZachetka(zachetkaNumber) {
  const studentArray = [...studentSet];
  const index = studentArray.findIndex(student => student.zachetkaNumber === zachetkaNumber);
  
  if (index !== -1) {
    studentSet.delete(studentArray[index]);
    console.log(`Студент с номером зачетки ${zachetkaNumber} удален.`);
  } else {
    console.log(`Студент с номером зачетки ${zachetkaNumber} не найден.`);
  }
}

function filterByGroup(group) {
  const filteredStudents = [...studentSet].filter(student => student.group === group);
  
  console.log(`Студенты из группы ${group}:`, filteredStudents);
  return filteredStudents;
}

function sortByZachetkaNumber() {
  const sortedStudents = [...studentSet].sort((a, b) => a.zachetkaNumber - b.zachetkaNumber);
  
  console.log('Студенты, отсортированные по номеру зачетки:', sortedStudents);
  return sortedStudents;
}


addStudent(101, 'A1', 'Иванов Иван Иванович');
addStudent(102, 'A1', 'Петров Петр Петрович');
addStudent(103, 'B2', 'Сидоров Сидор Сидорович');
addStudent(104, 'B2', 'Михайлов Михаил Михайлович');
addStudent(101, 'A1', 'Иванов Иван Иванович'); 

removeStudentByZachetka(102);  

filterByGroup('A1');  

sortByZachetkaNumber();
