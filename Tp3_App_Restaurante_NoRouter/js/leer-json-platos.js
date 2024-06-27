//Conectamos con el json
fetch("js/restaurantes.json")

.then(response => {
    return response.json()
})

.then(data =>{
    const params = new URLSearchParams(window.location.search);
    const id_resto = params.get('idResto');
    for (let i = 0; i < data[id_resto].platos.length; i++) {
        console.log(data[id_resto].platos[i].src)
        document.querySelector('.menuResto').innerHTML += `
        <a href="plato.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}&idPlato=${encodeURIComponent(data[id_resto].platos[i].id_plato)}" class="plato">
            <div class="imagen_platillo">
                <img src="${data[id_resto].platos[i].src}" alt="" height="100">
                <div class="precio_plato">$${data[id_resto].platos[i].precio}</div>
            </div>
            <div class="desc_platillo">
                <h3>${data[id_resto].platos[i].titulo}</h3>
                <span>${data[id_resto].platos[i].comentario}</span>
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
        document.querySelector('.cruz').innerHTML += `
            <a href="resto.html?idResto=${encodeURIComponent(data[id_resto].id_resto)}" class="close iconos">close</a>
        `
})
