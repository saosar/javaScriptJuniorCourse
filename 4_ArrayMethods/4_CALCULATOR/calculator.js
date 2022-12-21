//- CALCULATOR

class Calculator {
    constructor(){
    }
    addition(num1,num2){    // Se quita el let, el igual y la flecha. pongo solo esto
        return parseInt(num1) + parseInt(num2); 
    }
    subtraction(num1, num2){
        return parseInt(num1) - parseInt(num2); //PARA PEDIR DATOS POR UN PROMPT
    } 
    division(num1, num2){
        return parseInt(num1) / parseInt(num2); //PARA PEDIR DATOS POR UN PROMPT
    } 
    multiplication(num1, num2){
        return parseInt(num1) * parseInt(num2); //PARA PEDIR DATOS POR UN PROMPT
    } 
    empowerment(num, exp){
        return num ** exp;
    }
    squareRoot(num){
        return Math.sqrt(num);
    }
    cubeRoot(num){
        return Math.cbrt(num);
    }
}

const calculator = new Calculator();  //LLAMAMOS OBJETO
 

alert("What operation do you wish to perform?");
let operation = prompt("1: addition, 2: subtraction, 3: division, 4: multiplication, 5: empowerment, 6: squareRoot, 7: cubeRoot");

if (operation == 1){
    let number1 = prompt("first number to add: ");
    let number2 = prompt("second number to add: ");
    answer = calculator.addition(number1, number2);  // pero se debe poner punto tal co OBJETO no Funcion
    alert(`your answer is ${answer}`);
} 
else if (operation == 2){
    let number1 = prompt("first number to subtract: ");
    let number2 = prompt("second number to subtract: ");
    answer = calculator.subtraction(number1, number2);
    alert(`your answer is ${answer}`);
}
else if (operation == 3){
    let number1 = prompt("first number to divide: ");
    let number2 = prompt("second number to divide: ");
    answer = calculator.division(number1, number2);
    alert(`your answer is ${answer}`);
}
else if (operation == 4){
    let number1 = prompt("first number to multiply: ");
    let number2 = prompt("second number to multiply: ");
    answer = calculator.multiplication(number1, number2);
    alert(`your answer is ${answer}`);
}
else if (operation == 5){
    let number1 = prompt("first number to empowerment: ");
    let number2 = prompt("second number exp: ");
    answer = calculator.empowerment(number1, number2);
    alert(`your answer is ${answer}`);
}
else if (operation == 6){
    let number1 = prompt("first number to squareRoot: ");
    answer = calculator.squareRoot(number1);
    alert(`your answer is ${answer}`);
}
else if (operation == 7){
    let number1 = prompt("first number to cubeRoot: ");
    answer = calculator.cubeRoot(number1);
    alert(`your answer is ${answer}`);
}

else {
    alert("is not a basic operation")
}