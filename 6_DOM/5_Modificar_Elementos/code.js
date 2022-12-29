// MODIFICAR ELEMENTOS
/*
const titulo = document.querySelector(".titulo")

document.write(titulo.textContent+"<br>")  //no devuelve HTML

document.write(titulo.innerText+"<br>")    // NO SE USA MAS EXPLORER
document.write(titulo.outerText+"<br>")     //NO SE USA MAS

document.write(titulo.innerHTML+"<br>")     //
document.write(titulo.outerHTML+"<br>")     /// HTML COMPLETO
*/



// CREAR ELEMENTOS
/*
// CREAR DE MALA MANERA (para dentro de ciclos)
const contenedor = document.querySelector(".contenedor");

// const textDelItem = document.createTextNode("item de la lista");
// item.appendChild(textDelItem);
//document.write(item);

for (i=0; i<20; i++){   /// GASTA MUCHA MEMORIA: BORRA Y LUEGO CREA DE NUEVO.
    const item = document.createElement("LI"); // crear un elemento llamado LI
    item.innerHTML = "es in item"; // poner texto encima
contenedor.appendChild(item)
}
*/

// CREAR CON Create document fragment
const contenedor = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();
for (i=0; i<20; i++){   
    const item = document.createElement("LI"); 
    item.innerHTML = "es in item"; 
    fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);