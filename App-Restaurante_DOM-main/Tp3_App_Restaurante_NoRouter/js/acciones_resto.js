//CODIGO PARA AGREGAR AL CARRITO

let cantidad = document.getElementById("cantidad")
let btn_restar = document.getElementById("restar")
let btn_sumar = document.getElementById("sumar") 
let subTotal = document.getElementById("subtotal")

let cant = 1;cantidad.innerHTML=cant

let unit = document.querySelector(".puntoResto").innerText
let precioUnitario = document.querySelector(".puntoResto")
precioUnitario.innerText = '$'+unit;subtotal.innerText = '$'+unit*cant;

function restar(){
    if (cant>=2) {
        btn_sumar.innerText = 'add'
        btn_sumar.style.backgroundColor = 'aqua'
        btn_sumar.style.cursor = 'pointer'
        cant = cant - 1;
        cantidad.innerHTML=cant
        subtotal.innerText = '$'+unit*cant;
    }if(cant==1){
        btn_restar.innerText = 'block'
        btn_restar.style.backgroundColor = 'gray'
        btn_restar.style.cursor = 'unset'
    }
}
function sumar(){
    if (cant<=4) {
        btn_restar.innerText = 'remove'
        btn_restar.style.backgroundColor = 'aqua'
        btn_restar.style.cursor = 'pointer'
        cant = cant + 1;
        cantidad.innerHTML=cant
        subtotal.innerText = '$'+unit*cant;
    }if(cant==5){
        btn_sumar.innerText = 'block'
        btn_sumar.style.backgroundColor = 'gray'
        btn_sumar.style.cursor = 'unset'
    }
}

// EVENTOS 

let carrito = document.querySelector(".btnAgregar")

carrito.addEventListener("click", function () {
    console.log("BOTON CARRIO AGREGADO")
    //cartButton.style.backgroundColor = "red";
 
});


