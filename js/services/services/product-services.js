const productList = () => {
    return fetch ("http://localhost:3000/products")
            .then ((respuesta) => respuesta.json())
            .catch ((error) => console.log(error));
};

export const servisProducto = {
    productList,
}