function getMergedObject(...objects) {
  return Object.assign({}, ...objects);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };
const obj4 = { e: 6, f: 7 };
const obj5 = { g: 8, h: 9 };
const obj6 = { i: 10 };

console.log(getMergedObject(obj1, obj2, obj3, obj4, obj5, obj6));
