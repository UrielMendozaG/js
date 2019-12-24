// local storage

/*

La propiedad de solo lectura localStorage te permite
acceder al objeto local Storaege, los datos persisten
almacenados entre de las diferentes sesiones de 
navegacion.

Ñpcañ stprage es similar a sessionStorage La unica diferencia
es que mientras los datos almacenados en localStorage no tienen
fecha de expiracion los datos almacenados en localStorage no tienen
fecha de expiracion, los datos almacenados en sessionStorage son
eliminados cuando finaliza la sesion de navegacion. lo cual ocurre
cuando se cierra la pagina.

Con session Storage los datos persisten solo en la ventana tab que los 
creo, mientras que local storage los datos persisten entre ventanas/tabs
con el mismo origen.

*/

miStorage = window.localStorage;

miStorage.setItem("miGato","Juan");

console.log(miStorage.getItem("miGato"))

/*

guardar un json en local storage
    
*/

var miObjeto = { 'marcado': 'html5', 'estilo': 'css3', 'comportamiento': 'js' };

// Guardo el objeto como un string
localStorage.setItem('datos', JSON.stringify(miObjeto));

// Obtengo el string previamente salvado y luego
var guardado = localStorage.getItem('datos');

console.log('objetoObtenido: ', JSON.parse(guardado));
