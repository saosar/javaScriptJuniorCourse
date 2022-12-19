//MI FIRST CLASS : 
class animal {
    constructor(specie,age,color){
        this.specie = specie;
        this.age = age;
        this.color = color;
        this.info = `Im ${this.specie}, Im ${this.age} years old, and Im ${this.color}`;
    }
    seeInformation(){   //DONT TO USE FLECHA NOOO! DONT CAN TO USE
        document.write(this.info + "<br>") /// this only use it INSIDE CLASS !!!!  IMPORTANT 
        // THIS IS A METHOD: A FUNCTION USE IT INSIDE A CLASS - MAKE IT FOR REPLACE: """document.write(dog.color + "<br>")""""
        // ONLY ITS NECESSARY TO PUT : DOG.seeInformation <3
    }
}
let dog = new animal("dog",5,"brown");
let cat = new animal("cat",2,"black");
let bird = new animal("bird",1,"green");

//console.log(dog)  //SHOW IN CONSOLE
// document.write(dog.color + "<br>")  /// SHOW "RED" IN WEB PAGE
// document.write(cat.color + "<br>")
// document.write(bird.color + "<br>")
dog.seeInformation();
cat.seeInformation();
bird.seeInformation();