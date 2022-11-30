/*THIS CODE SHOWS ARRAYS, LOOPS AND ITERATIONS: 
INCLUDES: ARRAY - WHILE - DO WHILE - LOOP - FOR - FOR IN - FOR OF - LABEL -CONTINUE - BREAK */

//IF - SHOW number ONE
let number1 = 0;
if (number1 < 10){
    number1++;
    document.write("number with IF is: "+number1+"<br>")
}

// WHILE
let number2 = 0 ;
while (number2 < 10){
    number2++;
    document.write("number with WHILE is: "+number2+"<br>")
}

// DO WHILE
let number3 = 0;
do {
    number3++;
    document.write("number with DO WHILE is: "+number3+"<br>")
}
while (number3 <= 6)   //WHY RUN UNTIL NUMBER 7?

// LOOP - BREAK
let number4 = 0;
while (number4<1000){
    number4++;
    document.write("BREAK - stop! loop "+ number4 +"<br>");
    if(number4 == 10){
        break;
    }
}
document.write("end loop - with break <br>")

// FOR
for (let i=0 ; i<6; i++){
    document.write("FOR i ascent is: "+i+"<br>")
}

for (let i=6; i>=0; i--){
    document.write("FOR i descent is: "+i+"<br>")
}

//CONTINUE
for (let i=0; i<10; i++){
    if (i==6){  //SKIP 12//
        continue;
    }
    document.write("CONTINUE count without the 6: "+i+"<br>");
}

// FOR IN
let animals1 = ["cat", "dog", "tyrannosaurus rex"];
for (animal in animals1){
    document.write("FOR IN -Position of animal is: "+ animal + "<br>"); //SHOW NUMBERS
}

let animals2 = ["cat1", "dog1", "tyrannosaurus rex1"];
for (animal in animals2){
    document.write("FOR IN -Animal name is: " + animals2[animal]+"<br>"); //SHOW NAMES
}


//FOR OF
let animals3 = ["cat2", "dog2", "tyrannosaurus rex2"];
for (animal of animals3){
    document.write("FOR OF -Animal name is: "+ animal + "<br>"); //SHOW NAMES
}


//LABEL
array1 = ["maria","Josefa","Roberta"];
array2 = ["Pedro","Marcelo",array1,"Josefina"]
forRancio: //Name of cycle
for (let array in array2){   //FIRS ARRAY (ARRAY2)
    if (array ==2){    //POSITION #2 

        for (let array of array1){  //ANOTHER ARRAY (ARRAY1)
            document.write("LABEL data example array1 Inside: "+array + "<br>");
            //continue; //SKIP ONE TURN OF THE CYCLE
            //continue forRancio; //SKIP LOOP - COMPLETELY
            //beak; //END this cycle For (only one)
            //break forRancio; //BROKE ALLLL CYCLE (2 for-all)
            /*if (array == "maria"){
                continue;
            }
            document.write(array + "<br>"); */
        }
    } else{
        document.write("LABEL data example array2 Outside: "+array2[array]+"<br>");
    }
}