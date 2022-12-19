/// OBJETO MATH
document.write("<b style='color:blue'>* METODOS CON MATH *</b><br>");

let numero = Math.sqrt(25);
document.write("sqrt: "+numero+"<br>")

let numero1 = Math.cbrt(25);
document.write("cbrt: "+numero1+"<br>")

let numero2 = Math.max(25,50,1,2,4,10);
document.write("max: "+numero2+"<br>")
 
let numero3 = Math.min(25,50,1,2,4,10);
document.write("min: "+numero3+"<br>")

let numero4 = Math.random();  //num entra 0 y 1
document.write("random original: "+numero4+"<br>")

let numero5 = Math.random()*100;  
numero5 = numero5.toString(); //CONVERTIR A CADENA DE CARACTERES
num = numero5[0]+numero5[1];
if (numero[1]=="."){
    num = numero5[0];
}
document.write("random entre 0 y 100: "+numero5+"<br>")


let numero6 = Math.random()*100;  //num aleatorio entre 0 y 100
numero6 = Math.round(numero6);  //redondeo mas cercano
document.write("random y round: "+numero6+"<br>")


let numero7 = Math.random()*100;  //num aleatorio entre 0 y 100
numero7 = Math.floor(numero6);   //redondeo menor o igual 0 al 99
document.write("random y floor: "+numero7+"<br>")

// Reto : numero entre cero y 100 (sin el cero ni el 100)
for (var i=0; i<5; i++){    /// donde 5 es el numero de numeros aleatorios que no incluyen 0 ni 100
    let numero8 = Math.random()*99;
    numero8 = Math.floor(numero8+1);
    document.write("5# aleatorio entre 0 y 100 (sin incluirlos): " + numero8+"<br>")
}

let numero9 = Math.fround(9.4);
document.write("numero con fround (precisión simple - 4 bytes - 15 decimales): "+numero9+"<br>")

let numero10 = Math.trunc(9.4342953524256);
document.write("numero con trunc: "+numero10+"<br>")

/// PROPIEDADES
document.write("<br><b style='color:blue'>* PROPIEDADES *</b><br>");
document.write("<br><b style='color:blue'>* 1.Generales *</b><br>");

let numero11 = Math.PI;
document.write("Numero PI: "+numero11+"<br>")

let numero12 = Math.SQRT1_2;
document.write("Numero RAIZ 1/2: "+numero12+"<br>")

let numero13 = Math.SQRT2;
document.write("Numero RAIZ 2: "+numero13+"<br>")

document.write("<br><b style='color:blue'>* 2.Específicas *</b><br>");
let numero14 = Math.E;
document.write("Numero EULER 2: "+numero14+"<br>")

let numero15 = Math.LN2;
document.write("Numero LN2 : "+numero15+"<br>")

let numero16 = Math.LN10;
document.write("Numero LN10: "+numero16+"<br>")

let numero17 = Math.LOG2E;
document.write("Numero LOG2E (logaritmo de E con base 2): "+numero17+"<br>")

let numero18 = Math.LOG10E;
document.write("Numero LOG10E (logaritmo de E con base 10): "+numero18+"<br>")




