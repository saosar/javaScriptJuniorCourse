const rangoEtario = document.querySelector(".rangoEtario") // seleccion de clase con punto

document.write(rangoEtario.getAttribute("type")); //con get muestra el tipo de atributo html
rangoEtario.setAttribute("type","color") // cambio del tipo de atributo

valorDelAtributo = rangoEtario.setAttribute("type","text");
