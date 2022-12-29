// modificar childs
/*
const contenedor = document.querySelector(".contenedor");

const hijos = contenedor.childNodes;
console.log(hijos)


const hijos1 = contenedor.children;
for (hijo in hijos1){   // in numero  ///  of el valor
    console.log(hijo)
}
*/



/*
// metodos de childs

const contenedor = document.querySelector(".contenedor");
   
const parrafo = document.createElement("P").innerHTML = "Parrafo"
const h2 = document.createElement("H2").innerHTML = "Titulo";


h2_antiguo = document.querySelector(".h2");   // h2 tiene hijos? R/SI
//contenedor.removeChild(h2_antiguo)
let respuesta = h2_antiguo.hasChildNodes();
if (respuesta) {
    document.write("El elemento tiene hijos <br><br>");
} else {
    document.write("El elemento NO tiene hijos <br><br>")
}


const h3 = document.createElement("H3").innerHTML = "Titulo"; 
h3_antiguo = document.querySelector(".h3");
//contenedor.removeChild(h2_antiguo)
let respuesta3 = h3_antiguo.hasChildNodes();  //h3 tiene hijos? R/NO
if (respuesta3) {
    document.write("El elemento tiene hijos <br><br>");
} else {
    document.write("El elemento NO tiene hijos <br><br>");
}
*/


/*
// METODOS DE LOS PADRES   -- QUIEN ES TU PADRE? 
const contenedor = document.querySelector(".contenedor");
   
const parrafo = document.createElement("P").innerHTML = "Parrafo"
const h2_nuevo = document.createElement("H2").innerHTML = "Titulo";
h2_antiguo = document.querySelector(".h2");   

console.log(h2_antiguo.parentElement);  //padre es <div class="contenedor"></div>
console.log(contenedor.parentElement);  // padre de contendor es el body porque lo contiene
console.log(h2_nuevo.parentElement);
*/


// PROPIEDADES DE SIBLINGS * HERMANOS ESTAN EN LA MISMA LINEA
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parafo";
const h2_nuevo = document.createElement("H2");

const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.previousSibling)  //muestra #text en consola

//NODOS CLOSEST - SELECCIONA ELEMENTO ASCENDENTE MAS CERCANO CON CLASE DIV
const div = document.querySelector(".div-3");

console. log(div.closest(".div"))   // "DIV 2" el contenedor mas cercano.

