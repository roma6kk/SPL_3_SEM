function groupStudentsByAge(students) {
    return students
      .filter((student) => student.age > 17)
      .reduce((groups, student) => {
        if (!groups[student.groupId]) {
          groups[student.groupId] = [];
        }
        groups[student.groupId].push(student);
        return groups;
      }, {});
  }
  
  const students = [
    { name: 'Steve', age: 18, groupId: 1 },
    { name: 'Mary', age: 17, groupId: 1 },
    { name: 'Anton', age: 19, groupId: 2 },
    { name: 'Kirill', age: 16, groupId: 2 },
    { name: 'Stas', age: 19, groupId: 3 },
    { name: 'Sergey', age: 19, groupId: 8 },
  ];
  
  const result = groupStudentsByAge(students);
  console.log(result);
  