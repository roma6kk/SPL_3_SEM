function getPyramid(height) {
  let tower = [];
  for (let i = 0; i < height; i++) {
    let spaces = ' '.repeat(height - i - 1);
    let symbol = '*'.repeat(2 * i + 1);
    tower.push(spaces + symbol + spaces);
  }
  return tower;
}

console.log(getPyramid(4));
