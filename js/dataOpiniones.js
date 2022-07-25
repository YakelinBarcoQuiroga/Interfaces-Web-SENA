let opiniones = [
    { active: "active", star1: "fa-solid fa-star", star2: "fa-solid fa-star", star3: "fa-solid fa-star", star4: "fa-solid fa-star", star5: "fa-regular fa-star", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae, excepturi libero numquam quaerat facilis architecto dignissimos dolore a, officia laboriosam molestias laudantium, tenetur inventore iure. Facere quo commodi modi.", img: "/imagenes/retrato-joven-sonriente-gafas_171337-4842.png", nombre: "Federico G."},
    { star1: "fa-solid fa-star", star2: "fa-solid fa-star", star3: "fa-solid fa-star", star4: "fa-solid fa-star", star5: "fa-regular fa-star", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae, excepturi libero numquam quaerat facilis architecto dignissimos dolore a, officia laboriosam molestias laudantium, tenetur inventore iure. Facere quo commodi modi.", img: "/imagenes/retrato-joven-sonriente-gafas_171337-4842.png", nombre: "Federico G."},
    { star1: "fa-solid fa-star", star2: "fa-solid fa-star", star3: "fa-solid fa-star", star4: "fa-solid fa-star", star5: "fa-regular fa-star", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae, excepturi libero numquam quaerat facilis architecto dignissimos dolore a, officia laboriosam molestias laudantium, tenetur inventore iure. Facere quo commodi modi.", img: "/imagenes/retrato-joven-sonriente-gafas_171337-4842.png", nombre: "Federico G."},
    { star1: "fa-solid fa-star", star2: "fa-solid fa-star", star3: "fa-solid fa-star", star4: "fa-solid fa-star", star5: "fa-regular fa-star", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae, excepturi libero numquam quaerat facilis architecto dignissimos dolore a, officia laboriosam molestias laudantium, tenetur inventore iure. Facere quo commodi modi.", img: "/imagenes/retrato-joven-sonriente-gafas_171337-4842.png", nombre: "Federico G."},
    { star1: "fa-solid fa-star", star2: "fa-solid fa-star", star3: "fa-solid fa-star", star4: "fa-solid fa-star", star5: "fa-regular fa-star", texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestiae, excepturi libero numquam quaerat facilis architecto dignissimos dolore a, officia laboriosam molestias laudantium, tenetur inventore iure. Facere quo commodi modi.", img: "/imagenes/retrato-joven-sonriente-gafas_171337-4842.png", nombre: "Federico G."}
];

function generateOpiniones(opiniones){
    let htmlopiniones = "";

    for(let i = 0; i < opiniones.length; i++) {
        htmlopiniones += `<div class="carousel-item ${opiniones[i].active}" id="carousel">
                            <div class="testi-target">
                                <div class="estrellas">
                                <i class="${opiniones[i].star1}"></i>
                                <i class="${opiniones[i].star2}"></i>
                                <i class="${opiniones[i].star3}"></i>
                                <i class="${opiniones[i].star4}"></i>
                                <i class="${opiniones[i].star5}"></i>
                                </div>
                                <p>${opiniones[i].texto}</p>
                                <div class="img-testi">
                                    <img src="${opiniones[i].img}" alt="">
                                </div>               
                                <h5>${opiniones[i].nombre}</h5>
                            </div>
                        </div>`;
    }
    const containerOpiniones = document.getElementById("opiniones");
    containerOpiniones.innerHTML = htmlopiniones;
}

generateOpiniones(opiniones);