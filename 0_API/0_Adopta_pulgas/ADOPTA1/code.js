// LLAVES OLVIDADAS DE COFLA

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3';  //   EL endpoint es images/search 

const contenedor = document.querySelector(".flex-container");
let contador = 0;
function crearLlave(nombre,modelo,precio){
    contador++;


    async function reload(){
        const res = await fetch(API_URL)  ///llamado asincrono de async
        const data = await res.json();    // js entiende el json ... reemplaza .then(res => res.json()) en async
    
        console.log(data)
        let img1 = document.getElementById('img1');   //llama a 3 elementos    
        img1.src = data[0].url;   //cambia atributo src para poner automatico
        
    }
    reload();  // para que al inicio aparezca imagen
    
    //img = "<img class='llave-img' src='llave.png'>";
    
    img1 = "<img class='imagen' src='reload'>"
   
    nombre = `<h2>${nombre}</h2>`
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img1,nombre,modelo, precio];
} 



let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 1; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let gato = crearLlave(`GATO ${i}`, `modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV") ;  

    //CUANDO DE CLICK A LA LLAVE, QUEDE SELECCIONADA (se puede asociar a css focus)
    div.tabIndex = i;

    div.classList.add(`item-${i}` ,'flex-item');
    div.innerHTML = gato[0] + gato[1] + gato [2] + gato[3];
    documentFragment.appendChild(div);
    //contenedor.innerHTML += llave;
}
contenedor.appendChild(documentFragment);





