// APROBACION DE COFLA. 
//Al menos 90% de las materias. Pormedio de al menos 7/10. al menos 75% de trabajos entregados


const materias = {
    fisica: [90,6,3,"fisica"],  //%asistencia, promedio, 4 trabajos totales
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],  //base de datos
    algebra: [100,10,4,"algebra"]
}

const aprobo = ()=>{
    for (materia in materias){

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]); // mostrar nombre de la materia

        if (asistencias >= 90){
            console.log("%c   Asistencias en orden","color:green");
        } else {
            console.log("%c   faltas de asistencia","color:red");
        }
        if (promedio >= 7){
            console.log("%c promedio en orden", "color:green");
        } else {
            console.log("%c promedio desaprobado", "color:red");
        }
        if (trabajos >= 3){
            console.log("%c trabajos practicos en orden", "color:green")
        } else {
            console.log("%c faltan trabajos practicos", "color:red")
        }
    }
}
aprobo()