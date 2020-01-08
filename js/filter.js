import Eventos from "./data.js"

let nombre = "Posada"

const array = Eventos.filter(item => item.nombre == nombre)

const comidasPrincipales = array[0].principal

console.log(array)
console.log(comidasPrincipales)

