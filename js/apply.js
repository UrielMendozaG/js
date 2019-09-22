//  Method reuse 

/*
    Con el metodo apply(), puedes escribir un metodo que puede ser utilizado en diferentes 
    objetos.

    El metodo apply() es similar al metodo call().

    En este ejemplo el metodo fullName de person es aplicado en persona1:

*/

var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  person.fullName.apply(person1);  // Will return "Mary Doe"

  //como podemos ver son muy similares alv

  /*
    Diferencia entre call() y apply()

    La diferencia es: 

    El metodo call() toma argumentos de forma separada.

    El metodo apply() toma argumentos como un arreglo.

    El metodo apply es util cuando quieres usar un arreglo en lugar de una lista de argumentos.

  */

  // El metodo apply() con argumentos 

  // El metodo apply() acepta argumentos como array 

  // Example 

  var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  var person2 = {
      firstName: "Uri",
      lastName: "flow"
  }
  person.fullName.apply(person1, ["Oslo", "Norway"]);

  person.fullName.apply(person2, ["Guadalajara","Mexico"]);

  