//Conectamos con el json
fetch("js/restaurantes.json")

.then(response => {
    return response.json()
})

.then(data =>{
    const params = new URLSearchParams(window.location.search);
    const id_resto = params.get('idResto');
    for (let i = 0; i < data[id_resto].resenias.length; i++) {
        console.log(data[id_resto].resenias[i].src)
        document.querySelector('.menuResenia').innerHTML += `
        <a href="#" class="plato">
            <div class="imagen_platillo">
                <img src="img/persona_1.jpg" alt="" height="100">
                <div class="precio_plato">${data[id_resto].resenias[i].puntuacion}
                    <i class="iconos">star</i>
                </div>
            </div>
            <div class="desc_platillo">
                <h3>${data[id_resto].resenias[i].autor}</h3>
                <span>${data[id_resto].resenias[i].comentario}</span>
            </div>
        </a>
        `
        document.querySelector('.menuInferior').innerHTML += `
            <a href="resto.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}" class="active">DETALLES</a>
            <a href="platillo.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}">MENU</a> 
            <a href="resena.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}">RESEÑA</a>  
        `
    }
    document.querySelector('.name_resto').innerHTML += `
            ${data[id_resto].name}
        `
})
