const url =
  "https://my-json-server.typicode.com/CaugustoG/api-challenge-aluraflix/videos";

function productList() {
  fetch(url)
    .then(Response => Response.json())
    .then(datosImagenes => {console.log(datosImagenes)})

    const card = document.querySelector("[data-ul]")
    datosImagenes.forEach(elemento => {
        const contenido =`
        <i class="bx bx-x">
            <img class="product__img" src="${elemento.photo}" alt="${elemento.tittle}" />
            <h3 class="product__name">${elemento.tittle}</h3>
            <button data-delete class="product__button"></button>
        </i>
    `  
    card.innerHTML = card.innerHTML + contenido 
    });
    
}

productList()
