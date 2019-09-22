//  call .js ()

// With the call() method, you can write a method that can be used on different objects.

// Con el metodo call(), puedes escribir un metodo que puede ser usado en diferentes objetos

// Todas las funciones son metodos. 

/*   

    En javascript todas las funciones son metodos de objeto.

    Si una funcion no es un metodo de un objeto de javascript, es una funcion del objeto global. 

    El ejemplo de abajo crea un objeto con tres propiedades, firstName, lastName, fullName.

*/

//Example 

var person = {
    firstName = "Jhon",
    lastName = "Doe",
    fullName = function (){
        return this.firstName + " " + this.lastName;
    }
}

person.fullName(); //Regresara Jhon Doe 

//The this keyword

//En una definicion de una funcion, "this" se refiere al dueño de la funcion. 

/* 
    En el ejemplo de arriba this es el objeto persona que es dueño de la funcion fullName.
    
    En otras palabras, this.firstName significa la propiedad firstName del objeto.

*/



/*

    El metodo de javascript call().

    El metodo call() es un metodo predefinido de javascript.

    Puede ser usado para invocar (call) un metodo con un objeto dueño como parametro. 

    Con call() un objeto puede usar un metodo que le pertenece a otro objeto. 

*/

//El ejemplo de abajo llama el metodo fullName de person, usandolo en person1:

var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  var person3 = {
      firstName: "Uri",
      lastName: "Mendoza"
  }
  person.fullName.call(person1);  // Return "John Doe"

  person.fullName.call(person3); // Return "Uri Mendoza"

  // EL metodo call con argumentos 

  // El metodo call puede aceptar argumentos 

  // Ejemplo 

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
      firstName: "Uriel",
      lastName: "Mendoza"
  }

  person.fullName.call(person1, "Oslo", "Norway"); // Retorna Jhon Doe, Oslo, Norway
  
  person.fullName.call(person2, "guadalajara", "mexico"); // Retorna Uriel Mendoza guadalajara mexico

  

