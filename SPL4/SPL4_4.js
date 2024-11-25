const cache = new WeakMap();

function cachedFunction(func) {
    return function (...args) {
        if (cache.has(args)) {
            console.log('Получение из кэша');
            return cache.get(args);
        } else {
            const result = func(...args);
            cache.set(args, result);
            return result;
        }
    }
}

function exampleFunction(a, b) {
    return a + b;
}

const cachedExampleFunction = cachedFunction(exampleFunction);

console.log(cachedExampleFunction(2, 3)); // Результат будет вычислен
console.log(cachedExampleFunction(2, 3)); // Результат будет взят из кеша
console.log(cachedExampleFunction(4, 5)); // Результат будет вычислен
console.log(cachedExampleFunction(4, 5)); // Результат будет взят из кеша