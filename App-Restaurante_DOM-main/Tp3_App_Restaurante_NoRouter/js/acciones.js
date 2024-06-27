console.log("Conexion: ON")
// El archivo .js tiene prioridad sobre el estilo, un habiendo css indicando al mismo elemento
//ATRIBUTOS:
//  .innerText  --> Devuelve el texto del nodo
//  .innerHTML  --> Devuelve la estructura HTML con el texto del nodo
//
// querySelector()
//  Consigue el valor del primer nodo coincidente con el argumento 
//  Puede ser como argumento una Etiqueta, una Clase o un ID
//  Para indicar que es una clase se usa un punto (.class)
//  Para indicar que es un ID se usa una almohadilla (#id)
//
// querySelectorAll()
//   Tiene las mismas caracteristicas que el querySelector(), pero no te devuelve solo el primer nodo, sino un arreglo de todos los nodos coincidentes con el argumento
//   Se puede indicar el espacio del arreglo para obtener el valor --> array.[x].innerText
//   
// ---------------------- PRUEBAS ----------------------------

//CONSIGUE EL TEXTO DEL NODO CON ID="comida" (Solo devuelve un unico elemento)
let comida = document.getElementById('#comida').innerText
console.log("document.getElementById('#comida') : \n"+comida+"\n \n")

//CONSIGUE EL TEXTO DEL PRIMER NODO COINCIDENTE A LA ETIQUETA li
let lista = document.querySelector('li') 
console.log("document.querySelector('li') : \n"+lista.innerText+"\n \n")

//CONSIGUE UN ARRAY DE TODOS LOS NODOS COINCIDENTES A LA ETIQUETA li, CADA UNO CON SUS TEXTOS
let listas = document.querySelectorAll('li') 
console.log("document.querySelectorAll('li')  : \n"+listas[2].innerText+"\n \n")

//CONSIGUE UN ARRAY DE TODOS LOS NODOS COINCIDENTES A LA CLASE "first_food"
let claselistas = document.getElementsByClassName('first_food') 
console.log("document.getElementsByClassName('first_food') : \n"+claselistas[0].innerText+"\n \n")

//CONSIGUE UN ARRAY DE TODOS LOS NODOS COINCIDENTES A LA ETIQUETA li
let taglistas = document.getElementsByTagName('li') 
console.log("document.getElementsByTagName('li') : \n"+taglistas[0].innerText+"\n \n")

//CONSIGUE UN ARRAY DE TODOS LOS NODOS COINCIDENTES A LA ETIQUETA li DENTRO DE UNA ETIQUETA ul Y LOS MUESTRA ELEMENTO A ELEMENTO UTILIZANDO UN forEach
const listaElementos = document.querySelectorAll("ul > li");
console.log("listaElementos.forEach((elemento) => {console.log(elemento); }); : \n")
console.log("------INICIO FOREACH----")
listaElementos.forEach((elemento) => {
  console.log(elemento.innerText);
});
console.log("------FIN FOREACH----")

//INSERTA UN span EN listaElemento[2] Y LO EDITA TAMBIEN EN EL HTML
listaElementos[2].innerHTML = "<span>Pizza</span>"

//-----------COMO CREAR, AGREGAR Y ELIMINAR ELEMENTOS DE NODOS------------

//CREA EL ELEMENTO ul MEDIANTE EL METODO createElement
let listaDesordenada = document.createElement("ul");
//AGREGAMOS EL ELEMENTO ul AL NODO body MEDIANTE EL METODO appendChild
document.body.appendChild(listaDesordenada);

//CREAMOS EL ELEMENTO li MEDIANTE EL METODO createElement
let listaElemento1 = document.createElement("li");
//AL ELEMENTO li LE ASIGNAMOS UN TEXTO MEDIANTE EL METODO textContent
listaElemento1.textContent = "Es Simple";

//AGREGAMOS EL ELEMENTO li AL NODO ul MEDIANTE EL METODO appendChild
listaDesordenada.appendChild(listaElemento1);

//Ejemplo
let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Es Claro!";
listaDesordenada.appendChild(listaElemento2);

//ELIMINMOS EL ELEMENTO listaElemento2 DEL NODO listDesordenada
//listaDesordenada.removeChild(listaElemento2);

function borrar(){
    listaDesordenada.removeChild(listaElemento1);
    listaDesordenada.removeChild(listaElemento2);
}

//---------ESTILOS CON JAVASCRIPT----------------

let h1 = document.querySelector("h1");
// h1.style.backgroundColor = "red";
// h1.style.color = "blue";
// h1.style.fontSize = "12pt";


//--------------ASIGNAR Y ELIMINAR CLASES (ya credas)--------------

h1.classList.add('icono')
console.log(h1.classList)

//TOGGLE -> si la tiene la saca, si no la tiene la pone
//h1.classList.toggle('icono')

//background-color --> backgroundColor | En javascript, no hy guiones, con estilos se usa el CamelCase