// LLAVES OLVIDADAS DE COFLA


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

for (var i = 1; i <= 3; i++) {
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




const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';  //   EL endpoint es images/search 

async function reload(){
    const res = await fetch(API_URL)  ///llamado asincrono de async
    const data = await res.json();    // js entiende el json ... reemplaza .then(res => res.json()) en async

    console.log(data)
    const img1 = document.getElementById('img1');   //llama a 3 elementos
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');

    img1.src = data[0].url;   //cambia atributo src para poner automatico
    img2.src = data[1].url;
    img3.src = data[2].url;
}
reload();  // para que al inicio aparezca imagen
