//1
function multiply(x, y){
    return x*y;
}

//2
function isEven(num){
    if(num%2==0){
        return true;
    }
    return false;
}

//3
const difference = function subtract(a,b) {
    return b-a;
}

//4
const greeting = function(name){
    return `Hello ${name}`;
}

//5
function calculate(x,y){
    const sumOfSquares = function(x,y){
        return (x+y)^2;
    }
    return sumOfSquares(x,y);
}

//6
function average(num1, num2, num3){
    const average = function(x,y,z){
        return (x+y+z)/3;
    }
    return sumOfSquares(num1, num2, num3);
}

//7
multiply = (a,b) => a*b;

//8
greet = (name) => `Hello, ${name}`;

//9
square = (x) => x*x;

//10
isEven = (num) => num%2==0;

//11
findmAx = (numbers) => Math.max(...numbers);

//12
addTwoNumbers = (a,b) => a+b;