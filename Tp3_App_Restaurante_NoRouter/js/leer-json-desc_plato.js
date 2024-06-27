//Conectamos con el json
fetch("js/restaurantes.json")

.then(response => {
    return response.json()
})

.then(data =>{
    console.log(data)
    const params = new URLSearchParams(window.location.search);
    const id_resto = params.get('idResto');
    const id_plato = params.get('idPlato');
    document.querySelector('.mainResto').innerHTML += `
        <section class="linkResto">
            <div class="picResto">
                <img src="${data[id_resto].platos[id_plato].src}" alt="">
            </div>
            <div class="nameResto">
                <div class="vaina">
                    <h2>${data[id_resto].platos[id_plato].titulo}</h2>
                    <h5 class="gris_txt">${data[id_resto].name}</h5>
                </div>
            </div>
            <div class="puntoResto">${data[id_resto].platos[id_plato].precio}</span></div>
        </section>
        <br><br>
        <section class="descResto ">
            <p class="p10">
                ${data[id_resto].platos[id_plato].comentario}
            </p>
        </section>
    `
})

