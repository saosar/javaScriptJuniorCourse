//////////// METODOS DE CADENAS

/* 1
// concat
let cadena = "cadena de prueba";
let cadena2 = " cadena 2";
resultado = cadena.concat(cadena2);
document.write(resultado);
*/


/*2
// startsWith
let cadena = "cadena de prueba";
let cadena2 = "cadena";  //TRUE cadena=cadena
resultado = cadena.startsWith(cadena2);
document.write(resultado);
*/


/*3
// endsWith
let cadena = "cadena de prueba";
let cadena2 = "ba";  //TRUE ba=ba
resultado = cadena.endsWith(cadena2);
document.write(resultado);
*/


/*4
// includes
let cadena = "cadena de instagram";
let cadena2 = "instagram"; //TRUE 
resultado = cadena.includes(cadena2);
document.write(resultado);
*/

/*5
// indexOf
let cadena = "cadena de tarado prueba";
resultado = cadena.indexOf("tarado"); // # COMIENZA tarado en posicion 10
document.write(resultado); // 10 es posicion tarado
document.write(cadena[2]); // d es la 3ra letra de la cadena
*/


/*6
// lastIndexOf
let cadena = "cadena de tarado tarado prueba";
resultado = cadena.lastIndexOf("tarado"); //# ULTIMO tarado
document.write(resultado);
*/


/*7
// padStart
let cadena = "abc";
resultado = cadena.padStart(10,"1");  // 1111111abc
document.write(resultado)
*/


/*8
// padEnd
let cadena = "abc";
resultado = cadena.padEnd(10,"1234");  // abc1234123
document.write(resultado)
*/


/*9
// repeat
let cadena = "123";
resultado = cadena.repeat(4);  //123123123123
document.write(resultado)
*/


/*10
// split
let cadena = "Hola como estas";
resultado = cadena.split("como");  //Hola , estas
document.write(resultado)
*/

/*11
// substring
let cadena = "ABCDEFG";
resultado = cadena.substring(0,2);  // AB
document.write(resultado)
*/

/*12
// toLowerCase
let cadena = "ABCDEFG";
resultado = cadena.toLowerCase();  // abcdefg
document.write(resultado)
*/

/*13
// toUpperCase
let cadena = "El curso es chevere";
resultado = cadena.toUpperCase();  // EL CURSO ES CHEVERE
document.write(resultado)
*/

/*14
// toString
let cadena = "El curso es chevere";
let resultado = cadena.toString();  // EL CURSO ES CHEVERE
document.write(resultado)
*/

/*15
// length
let cadena = "     pedro";
let resultado = cadena;
document.write(resultado.length); //10
*/

/*16
// trim
let cadena = "     pedro";
let resultado = cadena.trim();
document.write(resultado.length); //5 letras sin espacios
*/



///////////// METODOS DE ARRAY 1.TRANSFORMADORES
/*1
//pop
let nombres = ["pedro","maria","jorge"];
document.write("Array original: <b>"+nombres+"</b><br>" )  //pedro,maria,jorge
let resultado = nombres.pop()     //jorge
document.write("Elemento removido: <b style='color:red'>"+ resultado + "</b><br>"); 
document.write ("Resultado: <b>"+nombres+"</b>")           //pedro,maria

/*2
//shift
let nombres = ["pedro","maria","jorge"];
document.write("Array original: <b>"+nombres+"</b><br>" )  //pedro,maria,jorge
let resultado = nombres.shift()     //pedro
document.write("Elemento removido: <b style='color:red'>"+ resultado + "</b><br>"); 
document.write ("Resultado: <b>"+nombres+"</b>")           ///maria,jorge

/*3
// reverse
let numeros = [1,2,3,4,5];
document.write("cadena de numeros: "+ numeros+"<br>");
numeros.reverse();
document.write("cadena numeros reverso: " + numeros)

// unshift
let numeros = [1,2,3,4,5];
document.write("cadena de numeros: "+ numeros+"<br>");
numeros.unshift(1,3);
document.write("cadena numeros con (1,3) al inicio: " + numeros)

// sort
let numeros = ["abecedario","manzana","bobo","muñeco"];
document.write("cadena de palabras: "+ numeros+"<br>");
numeros.sort();
document.write("cadena orden alfabetico: " + numeros)

// splice
let numeros = ["abecedario","manzana","bobo","muñeco"];
document.write("cadena de palabras: "+ numeros+"<br>");
numeros.splice(1,3,"roberto");  //elimina 3 elementos (excepto primero)
document.write("cadena elimina elementos y agrega uno: " + numeros)
// splice X2
let numeros = ["abecedario","manzana","bobo","muñeco"];
document.write("cadena de palabras: "+ numeros+"<br>");
numeros.splice(-1,1,"roberto","muñeco");  //elimina 3 elementos (excepto primero)
document.write("cadena elimina elementos y agrega uno: " + numeros)
*/

///////////////////  METODOS DE ARRAY 2.ACCESORES
/*

// join
let numeros = ["abecedario","manzana","bobo","muñeco"];
document.write("original: "+ numeros+"<br>");
let resultado = numeros.join(" - "); 
document.write("elemento: " + resultado)

//slice
let numeros = ["abecedario","manzana","bobo","muñeco"];
document.write("original: "+ numeros+"<br>");
let resultado = numeros.slice(0,-1); //elimina ultimo
document.write("elemento: " + resultado)

*/

//////////////////// METODOS DE REPETICION
/*
/// filter
let numeros = ["abecedario","manzana","bobo","muñeco"];
numeros.filter(numero => document.write(numero+"<br>"))

//forEach
let numeros = ["abecedario","manzana","bobo","muñeco"];
resultado = numeros.filter(numero => numero.length > 4);
document.write(resultado)
*/

// map

let numeros = [1,2,3];
let modificar = numeros.map(num => num*3);
document.write("map(): numero x 2 = " + modificar + "<br>");


let prefijos = ["super", "spider", "ant", "iron"]
let sufijo = "man";
let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);
document.write("formar palabras con map: " + nombresCompletos);