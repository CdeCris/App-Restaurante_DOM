//Conectamos con el json
fetch("js/restaurantes.json")

.then(response => {
    return response.json()
})

.then(data =>{
    console.log(data)
    const params = new URLSearchParams(window.location.search);
    const id_resto = params.get('idResto');
    document.querySelector('.mainResto').innerHTML += `
    <section class="linkResto">
        <div class="picResto">
            <img src="${data[id_resto].avatar.src}" alt="">
        </div>
        <div class="nameResto">
            <div class="vaina">
                <h2>${data[id_resto].name}</h2>
                <h5 class="gris_txt">${data[id_resto].direccion}</h5>
            </div>
            <div class="precio verde_txt">
                <i class="iconos verde_text">attach_money</i>
                <i class="iconos verde_text">attach_money</i>
                <i class="iconos gris_txt">attach_money</i>
            </div>
        </div>
        <div class="puntoResto">${data[id_resto].puntuacion}</div>
    </section>

    <section class="descResto ">
        <ul class="datos">
            <li class="btn-cat">
                <i class="iconos f28">place</i>${data[id_resto].rango}KM
            </li> 
            <li class="btn-cat">
                <i class="iconos f28">timer</i>${data[id_resto].horario}
            </li> 
            <li class="btn-cat">
                <i class="iconos f28">delivery_dining</i>Delivery
            </li> 

        </ul>
        <p>
            ${data[id_resto].bio}
        </p>
    </section>
    `
    document.querySelector('.menuInferior').innerHTML += `
        <a href="resto.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}" class="active">DETALLES</a>
        <a href="platillo.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}">MENU</a> 
        <a href="resena.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}">RESEÑA</a>  
    `
})

