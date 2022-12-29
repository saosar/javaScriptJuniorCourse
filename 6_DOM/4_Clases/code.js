// CLASSLIST

const titulo = document.querySelector(".titulo")
titulo.classList.add("grande")

let valor = titulo.classList.item(1);
document.write(valor)

nombreClase = "ggg"
let valor1 = titulo.classList.contains(nombreClase);
if (valor1){
    document.write(`<br> la clase <b>${nombreClase}</b> existe`)
    titulo.classList.remove(nombreClase)  //si tiene la clase la elimina
} else {
    document.write(`<br> la clase <b>${nombreClase}</b> no existe`)
    titulo.classList.add(nombreClase)  // si no tiene la clase la agrega
}

titulo.classList.toggle("titulo") // borra titulo  en consola web o crea si no existe
titulo.classList.toggle("titulo",true) 

let valor3 = titulo.classList.replace("grande","chico")
