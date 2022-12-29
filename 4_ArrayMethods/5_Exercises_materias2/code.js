/// PROBLEMA DE COFLA - MATERIAS ·2
//

let materias = {
    fisica: ["Perez","pedro","pepito","cofla","sara"],
    programacion: ["Rodriguez","pedro","pepito","juan"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","sara"],
    quimica: ["Dalto","pedro","pepito","cofla","sara"] 
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];  //permite ingresar a materias
    let alumnos = personas;   // alumnos son solo los alumnos
    if (personas.length >= 21) {
        document.write(`lo siento <b> ${alumno} </b>, las clases de <b> ${materia} </b> ya están llenas <br>`);
    } else{
        personas.push(alumno);   //agregarlo a la lista de personas
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "programacion"){
            materias = {
                fisica: materias["fisica"],
                programacion: personas,
                logica: materias["logica"],
                quimica: materias["quimica"]
            }
        }
        else if (materia == "logica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: personas,
                quimica: materias["quimica"]
            }
        }
        else if (materia == "quimica"){
            materias = {
                fisica: materias["fisica"],
                programacion: materias["programacion"],
                logica: materias["logica"],
                quimica: personas
            }
        }
        document.write(`¡felicidades ${alumno}! te has inscrito a ${materia} correctamente. <br>`)
    }
}
document.write(materias["fisica"] + "<br>")
inscribir("pedrito","fisica");
inscribir("juan","fisica");
inscribir("pablo","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("pedro","fisica");
inscribir("pedrito","fisica");
inscribir("pablo","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("pedro","fisica");
inscribir("pedrito","fisica");
inscribir("juanchito","fisica");
inscribir("juan","fisica");

document.write("<br>" + materias["fisica"] + "<br>")