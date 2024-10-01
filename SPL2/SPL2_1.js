function basicOperation(operation, value1,value2)
{
    switch(operation) {
        case '+':
            return result = value1 + value2;
        case '-':
            return result = value1 - value2;
        case '*':
            return result = value1 * value2;
        case '/':
            return result = value1 / value2;
        default:
            return result = "Ошибка ввода оператора";
    }
}
console.log(basicOperation('+',5,10));