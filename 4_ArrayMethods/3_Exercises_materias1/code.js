/// PROBLEMA DE COFLA
// Función que devuelva: profesor, nombre de alumnos
//Función que indique en cuantas clases esta cofla, nombre de clases y sus profesores.

// En cual materia se quiere inscribir. Si hay 20 inscritos negarle inscripción. Menos de 20 inscribir y añadir a lista.

const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","sara"],
        programacion: ["Rodriguez","pedro","pepito","juan"],
        logica: ["Hernandez","pedro","juan","pepito","cofla","sara"],
        quimica: ["Dalto","pedro","pepito","cofla","sara"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];   // 0 es "pedro","pepito"... // 1 es fisica: ...
    } else{
        return materias;
    }
}


const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);  ///imprimo
if (informacion !== false){
    let profesor = obtenerInformacion(materia)[0][0];
    let alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    document.write(`El profesor de <b> ${informacion[1]}</b>: <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b><br><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion(); 
    let clasesPresentes = [];   ///  -_- PARA CONOCER CLASES EN QUE ESTÁ
    let cantidadTotal = 0;
    for (info in informacion){
        //document.write(info)
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info);    ///  -_-
        }
    }
    return `<b style='color:blue'>${alumno}</b> está en: ${cantidadTotal} clases:
    <b style="color:green"> ${clasesPresentes}</b><br><br>
    `;
}

mostrarInformacion("fisica");    //profesor y alumnos
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));   // en cuantas clase esta
document.write(cantidadDeClases("sara"));
document.write(cantidadDeClases("pepito"));
document.write(cantidadDeClases("pedro"))

