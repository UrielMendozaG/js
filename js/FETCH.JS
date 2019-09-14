// La api fetch nos permie acceder y manipular partes del
// canal HTTP, como peticiones y respuestas.

//ejemplo 1

fetch('https://api.datos.gob.mx/v2/sinaica')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });

//estamos recuperando un archivo json a traves de red e 
//imprimiendola en la consola 

//creando dos objeto JSON 

const uriel = {
  lastname: "mendoza" ,
  age: 19,
  city: "gdl"
}

const people = {
  uriel
}

//imprimiendo datos de uriel
console.log(people.uriel);
