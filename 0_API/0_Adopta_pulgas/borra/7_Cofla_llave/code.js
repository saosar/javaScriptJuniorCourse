// LLAVES OLVIDADAS DE COFLA

// PONER BOTON COMPRAR EN MAYUSCULA (practicaraprendido, mejor cambia html)
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();


const contenedor = document.querySelector(".flex-container");
let contador = 0;
function crearLlave(nombre,modelo,precio){
    contador++;

    img = "<img class='llave-img' src='llave.png'>";

    nombre = `<h2>${nombre}</h2>`
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo, precio];
} 

// const llave = crearLlave("Llave1", "modelo X", "33");
// contenedor.innerHTML += llave[0] + llave[1] + llave[2];

const changeHidden =(number)=>{    //SOLUCION ERROR
    document.querySelector(".key-data"). value = number
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV") ;
    
    // SOLUCION DE ERROR
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});  

    //CUANDO DE CLICK A LA LLAVE, QUEDE SELECCIONADA (se puede asociar a css focus)
    div.tabIndex = i;

    div.classList.add(`item-${i}` ,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave [2] + llave[3];
    documentFragment.appendChild(div);
    //contenedor.innerHTML += llave;
}
contenedor.appendChild(documentFragment);