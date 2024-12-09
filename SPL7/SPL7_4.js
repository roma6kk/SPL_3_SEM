const team = {
    players: [
      { name: "Игрок1", position: "Нападющий" },
      { name: "Игрок2", position: "Защищающий" },
      { name: "Игрок3", position: "Вратарь" }
    ],
  
    displayPlayers() {
      this.players.forEach((player) => {
        console.log(`Имя: ${player.name}, Позиция: ${player.position}`);
      });
    }
  };
  
  team.displayPlayers();  