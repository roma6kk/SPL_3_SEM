function* moveObject() {
    let x = 0;
    let y = 0;
  
    while (true) {
      const direction = prompt("Введите команду: left, right, up, down");
  
      for (let i = 1; i <= 10; i++) {
        switch (direction) {
          case "left":
            x -= 1;
            break;
          case "right":
            x += 1;
            break;
          case "up":
            y += 1;
            break;
          case "down":
            y -= 1;
            break;
          default:
            console.log("Неизвестная команда");
            return;
        }
  
        console.log(`Шаг ${i}: (${x}, ${y})`);
        yield { x, y };
      }
    }
  }
  
  const mover = moveObject();
  
  for (let i = 0; i < 30; i++) {
    mover.next();
  }
  