const productoContainer = document.querySelector ("[data-product]");

function createCard (name, precio, image, id){
    const card = document.createElement("card");
    card.classlist.add("card")

    card.innerHTML = `
     
            <img class="product__img" src="${image}" alt="${name}" />
            <h3 class="product__name">${name}</h3>
            <button data-delete class="product__button">
                <i class="bx bx-x"></i>
            </button>
    `
}
