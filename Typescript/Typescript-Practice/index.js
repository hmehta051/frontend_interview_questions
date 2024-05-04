// Calculator
function calculateExpression(a, b, type) {
    if (type === "add") {
        return a + b;
    }
    if (type === "mult") {
        return a * b;
    }
    if (type === "sub") {
        return a - b;
    }
    if (type === "div") {
        return a / b;
    }
    return -1;
}
console.log(calculateExpression(1, 2, "add"))
