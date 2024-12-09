const user = {
    _firstName: '',
    _lastName: '', 
  
     get fullName() {
      return `${this._firstName} ${this._lastName}`;
    },
  
     set fullName(name) {
      const parts = name.split(' ');
      if (parts.length === 2) {
        this._firstName = parts[0];
        this._lastName = parts[1];
      } else {
        console.log("Полное имя должно состоять из имени и фамилии.");
      }
    }
  };
  
  user.firstName = 'Fname';
  user.lastName = 'Lname';
  
  console.log(user.fullName); 
  
   user.fullName = 'Full Name';
  console.log(user.fullName); 
  
   user.fullName = 'OnlyOneName';
  console.log(user.fullName);  
  