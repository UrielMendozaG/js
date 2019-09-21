//higher order functions are more elegant an simple that will be you look a better programmer

//map()

//el metodo map crea un nuevo array con los resultados de la llamada a la funcion
//indicada aplicados a cada uno de sus elementos.

/*

    Array.prototipe.map(); 

    El metodo map nos permite devolver un nuevo arreglo partiendo de un arreglo, 
    dicho así, no mutamos los datos del arreglo original, ahora tenemos
    un nuevo arreglo con los valores resultantes.

    Pongamos un problema y solucionemos con el metodo map().

    Tenemos  una lista de productos que comprara un usuario y queremos obtener
    solamente los nombres de los productos a comprar. 

*/

/*

    Para entender un poco más el ejemplo vamos a resolverlo sin el metodo map()
    para ello vamos a utilizar el metodo for().

*/

const products = [
    { id: "1", name: "shirt", category: "clothing" },
    { id: "2", name: "Sports Tennis", category: "accessories" },
    { id: "3", name: "Casual shoes", category: "footwear" },
    { id: "4", name: "skirt", category: "clothing" },
    { id: "5", name: "tie", category: "clothing" }
]

let nameOfProducts = [];

for (let i = 0; i < products.length; i++) {
    nameOfProducts.push(products[i].name);
}


console.log(nameOfProducts); // ["shirt","Sports Tennis","Casual shoes","skirt","tie"]

/*

    Ahora resolveremos este ejercicio con el metodo map().

    map() recibe como parametro una funcion la cual recibe tres parametros:

    elemento actual
    indice del elemento actual
    arreglo original
*/

//sintaxis
    arreglo.map(function(elementoActual, indice, arregloOriginal) {  /* codigo */ });


const products = [
    { id: "1", name: "shirt", category: "clothing" },
    { id: "2", name: "Sports Tennis", category: "accessories" },
    { id: "3", name: "Casual shoes", category: "footwear" },
    { id: "4", name: "skirt", category: "clothing" },
    { id: "5", name: "tie", category: "clothing" }
]

let nameOfProducts2 = products.map((product, index, array) => {
    // Cómo solo queremos los nombres, retornamos "name".
    return product.name;
})

console.log(nameOfProducts2); // ["shirt", "Sports Tennis", "Casual shoes", "skirt", "tie"]


