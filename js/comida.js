// change the world my final message... goodbye

// que onda bandita
// clikear hamburguesa y que aparezcan los datos de hamburguesas
// clickear carne asada y que aparezcan los datos de carne asada

async function getData() {
  const response = await fetch("http://localhost:3000/api/datos", {
    mode: "cors"
  });
  const data = await response.json();

  // guardar los datos en un local storage
  localStorage.setItem("datos", JSON.stringify(data));
}

//obtener datos
getData();
let guardado = localStorage.getItem("datos");
let datos = JSON.parse(guardado);
console.log(datos);

// mostrar datos

let carneBtn = document.getElementById("carneBtn");
let hamburguesasBtn = document.getElementById("hamburguesasBtn");

// carneBtn.addEventListener("click", () => {
//   console.log("platillo:",datos[0].comidas.carne_asada.id);
//   console.log("ingrediente principal:",datos[0].comidas.carne_asada.arrachera.id);
//   console.log("bebida:",datos[0].bebidas.refresco.id);
//   console.log("botana:",datos[0].botanas.churros.id);
//   console.log("desechables:", datos[0].desechables.baratos.id)
// });

// hamburguesasBtn.addEventListener("click", () => {
//   console.log("platillo:",datos[0].comidas.hamburguesas.id);
//   console.log("ingrediente principal:",datos[0].comidas.hamburguesas.hamburguesa_de_res.id);
//   console.log("bebida",datos[0].bebidas.refresco.id);
//   console.log("botana",datos[0].botanas.churros.id);
//   console.log("desechables", datos[0].desechables.baratos.id)
// });

carneBtn.addEventListener("click", () => {
  platillo = desechables = datos[0].comidas.carne_asada;
  ingredientePrincipal = datos[0].comidas.carne_asada.arrachera;
  bebida = datos[0].bebidas.refresco;
  botana = datos[0].botanas.churros;
  desechables = datos[0].desechables.baratos;

  //setear los elementos
  elementos = [platillo, ingredientePrincipal, bebida, botana, desechables_]

});

hamburguesasBtn.addEventListener("click", () => {
  platillo = datos[0].comidas.hamburguesas;
  ingredientePrincipal = datos[0].comidas.hamburguesas.hamburguesa_de_res;
  bebida = datos[0].bebidas.refresco;
  botana = datos[0].botanas.churros;
  desechables = datos[0].desechables.baratos;

  //setear los elementos 
  elementos = [platillo, ingredientePrincipal, bebida, botana, desechables_]
});

// setear los datos
/*
let platillo = undefined;
let ingredientePrincipal = undefined;
let bebida = undefined;
let botana = undefined;
let desechables = undefined;
*/
// mostrar los datos con boton

let boton = document.getElementById("mostrar")

//poner todos los elementos en un array para poder iterar mas facil entre ellos

boton.addEventListener("click", () => {
  console.log(platillo.id, ingredientePrincipal.id, bebida.id, botana.id, desechables_.id);
  console.log(ingredientePrincipal.precio, bebida.precio,botana.precio,desechables_.precio)
  suma = 0;
  elementos.forEach((item)=>{
    if("precio" in item){
      suma += item.precio
    }
  })
  console.log("precio total", suma)
  console.log(d)
})

// poner en default los valores
// quiero que el default sean los valores de una carne asada

let platillo = datos[0].comidas.carne_asada
let ingredientePrincipal = datos[0].comidas.carne_asada.arrachera
let bebida = datos[0].bebidas.refresco
let botana = datos[0].botanas.churros
let desechables_ = datos[0].desechables.baratos

// suma

let suma = 0

let elementos = [platillo, ingredientePrincipal, bebida, botana, desechables_]

// fecha 

let d = new Date();