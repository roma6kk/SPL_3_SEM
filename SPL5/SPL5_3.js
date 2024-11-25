var globalVar = "Глобальная переменная";
let globalLet = "Другая глобальная переменная";
const globalConst = "Постоянная глобальная переменная";

function globalFunction() {
  return "Глобальная функция";
}

console.log("globalVar:", window.globalVar);
console.log("globalLet:", window.globalLet);
console.log("globalConst:", window.globalConst);
console.log("globalFunction:", window.globalFunction());

window.globalVar = "Новое значение глобальной переменной var";
window.globalLet = "Новое значение глобальной переменной let";

console.log("Переопределенный globalVar:", window.globalVar);
console.log("Переопределенный globalLet:", window.globalLet);
