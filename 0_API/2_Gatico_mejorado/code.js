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



    //const img = document.querySelector('img'); // ya no necesito 1 img, son 3 imagenes, no sirve el querySElector
    //img.src = data[0].url;   //url de la imagen
}
reload();  // para que al inicio aparezca imagen

