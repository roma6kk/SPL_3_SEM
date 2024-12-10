const base = {
    stroke: "black",
};

const yellowSquare = {
    color: "yellow",
    type: "square",
    diametr: 6,
    __proto__: base
};

const whiteCircle = {
    color: "white",
    type: "circle",
    __proto__: yellowSquare,
};

const triangle1 = {
    type: "triangle",
    pattern: "strip",
    __proto__: whiteCircle
};

const littleYellowSquare = {
    __proto__: yellowSquare,
    diametr: 3
};

const greenCircle = {
    __proto__: whiteCircle,
    color: "green"
};

const triangle2 = {
    __proto__: triangle1,
    pattern: "3 strips"
};

console.log("Треугольник 2:");
console.log("Диаметр:", triangle2.diametr, "| Тип:", triangle2.type, "| Контур:", triangle2.stroke, "| Цвет:", triangle2.color);

console.log("\n Круг белый:");
console.log("Диаметр:", whiteCircle.diametr, "| Тип:", whiteCircle.type, "| Контур:", whiteCircle.stroke);

console.log("\n Квадрат желтый маленький:");
console.log("Тип:", littleYellowSquare.type, "| Цвет:", littleYellowSquare.color, "| Контур:", littleYellowSquare.stroke);

console.log("\n Треугольник 1:");
console.log("Цвет:", triangle1.color, "| Диаметр:", triangle1.diametr, "| Контур:", triangle1.stroke);

console.log("\n Собственные свойства зеленого круга:");
const greenCircleProperties = Object.keys(greenCircle);
console.log(greenCircleProperties);

console.log("\n Свойства треугольника 2 (собственные и унаследованные):");
for (let property in triangle2) {
    if (triangle2.hasOwnProperty(property)) {
        console.log(`${property}: собственное`);
    } else {
        console.log(`${property}: унаследованное`);
    }
}

console.log("\n Маленький квадрат имеет собственное свойство 'color':", littleYellowSquare.hasOwnProperty("color"));
