function Book(title, author) {
    this.title = title;
    this.author = author;
  
     this.getTitle = function () {
      return this.title;
    };
  
     this.getAuthor = function () {
      return this.author;
    };
  }
  
  const book1 = new Book("Kniga1", "Author1");
  const book2 = new Book("Kniga2", "Author2");
  
  console.log(book1.getTitle());  
  console.log(book1.getAuthor());  
  
  console.log(book2.getTitle()); 
  console.log(book2.getAuthor()); 
  