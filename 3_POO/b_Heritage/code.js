/* 1
/// ABTRACTION, MODULARITY AND HIERARCHY

class Animal {
    constructor(specie,age,color){
        this.specie = specie;
        this.age = age;
        this.color = color;
        this.info = `Im ${this.specie}, Im ${this.age} years old, and Im ${this.color}`;
    }

    //METHOD: FUNCTION
    seeInformation(){   //DONT TO USE FLECHA NOOO! DONT CAN TO USE
        document.write(this.info + "<br>") 
    }
    // bark(){   //LADRAR  -- POLYMORPHISM : ONLY DOG BARK BUT ALL APEAR
    //     if (this.specie == "dog"){
    //         document.write("Waw! <br>");
    //     } else {
    //         document.write("cannot bark, it is a " + this.specie + "<br>");
    //     }
    // }
}

//HERENCIA = extends
class Dog extends Animal {  //HERENCIA, NO ES NECESARIO EL THIS NI LO OTRO---
    constructor(specie,age,color,race){  //HEREDA DE OTROS R INCLUYE RAZA
        super(specie,age,color);
        this.race = race; //AÑADIMOS HERENCIA SOLO A PERRO
    }
    bark(){
        alert("¡WAW WAW!")  //ONLY DOG BARK
    }
}

const dog = new Dog("dog",5,"brown","doberman");  //CLASS SE DEFINEN CON CONST
const cat = new Animal("cat",2,"black");
const bird = new Animal("bird",1,"green");

dog.seeInformation(); // ES UN OBJETO, NO PUEDE TENER EL MISMO NOMBRE QUE LA CLASE (Clase:Mayus) (objeto:minus)
cat.seeInformation();
bird.seeInformation();

dog.bark();
cat.bark();
bird.bark();
*/




/* 2 
// STATIC METHOD = static
class Animal {
    constructor(specie,age,color){
        this.specie = specie;
        this.age = age;
        this.color = color;
        this.info = `Im ${this.specie}, Im ${this.age} years old, and Im ${this.color}`;
    }

    //METHOD: FUNCTION
    seeInformation(){   //DONT TO USE FLECHA NOOO! DONT CAN TO USE
        document.write(this.info + "<br>") 
    }
    // bark(){   //LADRAR  -- POLYMORPHISM : ONLY DOG BARK BUT ALL APEAR
    //     if (this.specie == "dog"){
    //         document.write("Waw! <br>");
    //     } else {
    //         document.write("cannot bark, it is a " + this.specie + "<br>");
    //     }
    // }
}
class Dog extends Animal {  //HERENCIA, NO ES NECESARIO EL THIS NI LO OTRO---
    constructor(specie,age,color,race){  //HEREDA DE OTROS R INCLUYE RAZA
        super(specie,age,color);
        this.race = race; //AÑADIMOS HERENCIA SOLO A PERRO
    }
    static bark(){
        alert("¡WAW WAW!")  //ONLY DOG BARK
    }
}

Dog.bark();   /// CLASE Dog, dont exist dog:objeto .ANOTHER FORM OF SAY WAW WAW
*/






// METHODS ACCESORES
// GETTERS (OBTENER VALOR) AND SETTERS (MODIFICAR O DEFINIR VALOR)
// STATIC METHOD = static
////////////////-----------WITHOUT METHODS (GETTERS - SETTERS) NO DEBERÌA HACERSE
/* 3
class Animal {
    constructor(specie,age,color){
        this.specie = specie;
        this.age = age;
        this.color = color;
        this.info = `Im ${this.specie}, Im ${this.age} years old, and Im ${this.color}`;
    }

    //METHOD: FUNCTION
    seeInformation(){   //DONT TO USE FLECHA NOOO! DONT CAN TO USE
        document.write(this.info + "<br>") 
    }
    // bark(){   //LADRAR  -- POLYMORPHISM : ONLY DOG BARK BUT ALL APEAR
    //     if (this.specie == "dog"){
    //         document.write("Waw! <br>");
    //     } else {
    //         document.write("cannot bark, it is a " + this.specie + "<br>");
    //     }
    // }
}
class Dog extends Animal {  
    constructor(specie,age,color,race){  
        super(specie,age,color);
        this.race = null; //RAZA ES NULA
    }
    modifyRace(){
        this.raza = "Bulldogcito"
    }
}

const dog = new Dog("dog",5,"brown","doberman");
const cat = new Animal("cat",2,"black");
const bird = new Animal("bird",1,"green");

dog.modifyRace();
document.write(dog.raza)   ////PRINT Bulldogcito
*/

class Animal {
    constructor(specie,age,color){
        this.specie = specie;
        this.age = age;
        this.color = color;
        this.info = `Im ${this.specie}, Im ${this.age} years old, and Im ${this.color}`;
    }
    seeInformation(){   
        document.write(this.info + "<br>") 
    }
}
class Dog extends Animal {  
    constructor(specie,age,color,race){  
        super(specie,age,color);
        this.race = null; //RAZA ES NULA
    }
    set setRace(newName){  ///SETTERS!! MODIFICA VALOR
        this.race = newName;
    }
    get getRace(){    //GETTERS!! OBTENER UN VALOR
        return this.race;
    }
}

const dog = new Dog("dog",5,"brown","doberman");
const cat = new Animal("cat",2,"black");
const bird = new Animal("bird",1,"green");

dog.setRace = "Bulldogcito";   //modifica
document.write(dog.getRace)  //obtener //PRINT Bulldogcito
