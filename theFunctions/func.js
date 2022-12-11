/* FIRST FUNCTIONS CODE
// FIRST DECLARE
function Hello(){
    answer = prompt("Hi, ¿How do you do?: ");
if (answer == "good"){
    alert("I'm glad")
} else {
    alert("a pity")
}   
}

// AFTER PRINT 
Hello()

// ANOTHER ALTERNATIVE DECLARE AND PRINT
Hello1 = function(){
    answer = prompt("Hi, ¿How do you do today?: ");
    if (answer == "good"){
        alert("I'm glad ..")
    } else {
        alert("a pity..")
    }  
}
Hello1()
*/


/* EXAMPLE WITH RETURN
function Hello2 (){
    return "okay";
    alert("HI")
}
let SayHello = Hello2();
document.write(SayHello)
*/


/*
// DEFINE VARIABLE EASIER. WITHOUT let num1; ....etc
// EXAMPLE 1
function sum(num1,num2){
    let answer1 = num1 + num2;
    document.write(answer1);
    document.write("<br>")
}
sum(12,32)

//EXAMPLE 2
function sum(num1,num2){   // CREATE "addition" FUNCTION, CADA VEZ QUE LLAMA FUNCTION CREA 2 PARAMETROS
    let answer2 = num1 + num2; // additionR Y GUARDAR EN LA VARIABLE ANSWER2
    return answer2
}
let answer3 = sum(20,25) //RESULTADO ES addition ENTRE 2 VALORES
document.write(answer3)   //

//EXAMPLE 3 - SAY HELLO 
function Hello3(name){
    let sentence = `Hi ${name} How are u?`;  //Need this `` (tecla al lado de "P")
    document.write(sentence)
}
Hello3("Sara")

//EXAMPLE 3 - WITH ANOTHER OPTION
const Hello4 = function(name1){
    let sentence = `Hi ${name1} How are u?`;  
    document.write(sentence)
}
Hello4("Sara")
*/


/*
//// FUNCIONES FLECHA
//EXAMPLE 1
const Hello4 = (name1)=>{
    let sentence = `Hi ${name1} How are u?`;  
    document.write(sentence)
}
Hello4("Sara")

//EXAMPLE 2
let sentence = `Hi ${name5} How are u?`; 
const Hello5 = name5 => document.write(sentence);
Hello5("Saris")

////////////////////// COFLA PROBLEM: 
// 1ro - SIN TECHO: Dejar pasar solo a +18, el primero queentre despues de las 2 am no paga.
// 2do - Registar los ausentes y presentes y mostrar la situacion de assitencia, max 10% de faltas x semestre
// 3ro - calculadora

//1ro // FIRS EXAMPLE WITH COFLA  - DISCOTECA 2AM
let free = false;
const validCustomer = (time)=>{
    let age =  prompt("how old are you?");
    if (age > 18){
        if (time >= 2 && time < 7 && free == false){
            alert("get in for free, you are the first person after 2 a.m.");
            free = true;
        } else {
            alert(`it is ${time}:00 Hs. you can pass, but you must pay the entrance fee`);
        }
    } else{
        alert("you are a minor, you do not pass");
    }
}
validCustomer(23);
validCustomer(24);
validCustomer(0.2);
validCustomer(0.6);
validCustomer(1);
validCustomer(2);
validCustomer(2.4);
validCustomer(3);
*/
/*
// 2do // SECOND EXAMPLE WITH COFLA  - ASISTENTES CLASE
let quantity = prompt("how many students there are?");
let studentsTotal = [];  //CREATE IT ARRAY
// i equal a zero. i execute while "less than",  i is increased
for (i =0; i<quantity; i++){ 
    studentsTotal[i] = [prompt("Student Name " + (i+1)),0];
}  
const takeAttendance = (name5,p)=>{
    let presence = prompt(name5);
    if (presence == "p" || presence =="P"){
        studentsTotal[p][1]++;
    }
}

for (i=0; i<30; i++){
    for (student in studentsTotal){
        takeAttendance(studentsTotal[student][0],student)
    }
}

for (student in studentsTotal){
    let answer = `${studentsTotal[student][0]}:<br>
    __________present: <b> ${studentsTotal[student][1]}</b><br>
    __________absences: <b> ${30-studentsTotal[student][1]}</b>`;
    if (30 - studentsTotal[student][1] > 18){
        answer+= "<b style='color:red'> FAILED FOR NON-ATTENDANCE </b> <br><br>";     
    } else{
        answer += "<br><br>";
    }
    document.write(answer)
}

*/

// 3ro // THIRD EXAMPLE WITH COFLA - CALCULATOR
const addition = (num1, num2)=>{    ///FUNCTION OF ADD, SUB, DIV, MULT
    return parseInt(num1) + parseInt(num2); //PARA PEDIR DATOS POR UN PROMPT //parseInt : convierte a numero
} 
const subtraction = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2); //PARA PEDIR DATOS POR UN PROMPT
} 
const division = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2); //PARA PEDIR DATOS POR UN PROMPT
} 
const multiplication = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2); //PARA PEDIR DATOS POR UN PROMPT
} 
 

alert("What operation do you wish to perform?");
let operation = prompt("1: addition, 2: subtraction, 3: division, 4: multiplication");

if (operation == 1){
    let number1 = prompt("first number to add: ");
    let number2 = prompt("second number to add: ");
    answer = addition(number1, number2);
    alert(`your answer is ${answer}`);
} 
else if (operation == 2){
    let number1 = prompt("first number to subtract: ");
    let number2 = prompt("second number to subtract: ");
    answer = subtraction(number1, number2);
    alert(`your answer is ${answer}`);
}
else if (operation == 3){
    let number1 = prompt("first number to divide: ");
    let number2 = prompt("second number to divide: ");
    answer = division(number1, number2);
    alert(`your answer is ${answer}`);
}
else if (operation == 4){
    let number1 = prompt("first number to multiply: ");
    let number2 = prompt("second number to multiply: ");
    answer = multiplication(number1, number2);
    alert(`your answer is ${answer}`);
}
else {
    alert("is not a basic operation")
}