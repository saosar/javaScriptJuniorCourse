/*let fruits = ["banana", "apple","pear"];
document.write(fruits[2])*/

/*WHEN IS AN OBJECT*/
let pc1 = {
    names: "SOA",
    processor: "Intel core I7",
    ram: "16GB",
    space: "1TB"
};
//document.write(pc1["names"]) //SHOW SOA//

let names = pc1["names"];
let processor = pc1["processor"];
let ram = pc1["ram"];
let space = pc1["space"];

frase = `my pc name is: <b>${names}</b> <br>
processor is: <b>${processor}</b> <br>
ram memory is: <b>${ram}</b> <br>
disk space is: <b>${space}</b>`
document.write(frase)


//let pc2 = ["SOA", "Intel core I7", "16GB", "1TB"]; /*SHOW AN ARRAY*/
//document.write(pc2[0]) //SHOW SOA// 
