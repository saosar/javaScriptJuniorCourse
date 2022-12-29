// HORARIO DE ESTUDIO DE COFLA. 
// 24 horas estudio. 24 hora practicos. 56 trabajar. 8 horas cosas casa. tiempo por tarea no supera 4 horas.
// 30 horas casa. 100 min trabajos 100 estudiar. 240 . 10 min descanso
let trabajo = "240 minutos de descanso";
let estudio = "100 minutos de estudio";
let tp = "100 minutos trabajo practico";
let homework = "30 min casa";
let descanso = "10 min descanso";


console.log("TAREAS");

for (var i = 0; i<14 ; i++){
    if (i == 0){
        console.group("semana 1")
    }
    console.group(`dia ${i+1}`)
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);

    console.groupEnd();
    if (i == 7){
            console.groupEnd();
            console.group("semana 2")
        }
    }
console.groupEnd();
console.groupEnd();