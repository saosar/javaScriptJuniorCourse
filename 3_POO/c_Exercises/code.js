/// EXAMPLE A
// Cofla comprar 3 celulares, 
// con color, peso, resolución, cámara, memoria RAM
// Debe prender, reiniciar, tomar fotos y grabar
// EXAMPLE B 
// Cel alta gama : camara lenta, reconocimiento facial y cámara extra
// EXAMPLE C
// Download 2 de 7 app . cantidad de descargas, puntuación y peso


//EXAMPLE A - COMPRAR 3 CELULARES
/*
class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular apagado");
            this.encendido = true;
        } else {
            alert("celular apagado")
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
            this.encendido = false;
        }
    }
    tomarFoto(){
        alert(`foto tomada en resolución de: ${this.rdc}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.rdc}`);
    }
    mobileInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de la Cámara: <b>${this.rdc}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        `;
    }
}

celular1 = new Celular("rojo","150g","5","full hd","1GB");
celular2 = new Celular("negro","155g","5.4","full hd","2GB");
celular3 = new Celular("blanco","1504g","6","full hd","2GB");

document.write(`
${celular1.mobileInfo()} <br>
${celular2.mobileInfo()} <br>
${celular3.mobileInfo()} <br>
`)

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();
*/

// EXAMPLE B - MEJORAR CELULARES ALTA GAMA
/*
class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("celular apagado");
            this.encendido = true;
        } else {
            alert("celular apagado")
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
            this.encendido = false;
        }
    }
    tomarFoto(){
        alert(`foto tomada en resolución de: ${this.rdc}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.rdc}`);
    }
    mobileInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de la Cámara: <b>${this.rdc}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        `;
    }
}

class CelularAltaGama extends Celular{ //HERENCIA
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.rdce = rdce
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de Camara Extra: ${this.rdce}`
    }
}

celular1 = new CelularAltaGama("rojo","130g","5.2","4k","3GB","full hd");
celular2 = new CelularAltaGama("negro","142g","6","4k","4GB","full hd");

// CAMBIAR LO QUE SE MUESTRA, DESDE LO NUEVO DE LA HERENCIA
document.write(`
${celular1.infoAltaGama()} <br><br>
${celular2.infoAltaGama()} <br>
`)
*/

// EXAMPLE C - DOWNLOAD 2 DE 7 APLICACIONES
class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false; //inicia sin instalarse
        this.instalada = false;
    }
    instalar(){
        if (this.instalada== false){
            this.instalada = true;
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente")
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada")
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada")
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}
//  app.instalar();
//  app.abrir();
//  app.cerrar();
//  app.desinstalar();

app = new App("16000","5 estrellas","900 mb");
app2 = new App("1000","4 estrellas","400 mb");
app3 = new App("6000","4.5 estrellas","100 mb");
app4 = new App("23000","4.8 estrellas","1 gb");
app5 = new App("900","5 estrellas","250 mb");
app6 = new App("17","3.7 estrellas","522 mb");
app7 = new App("4200","2.9 estrellas","723 mb");

document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`);