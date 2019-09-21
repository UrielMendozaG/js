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

    El ejemplo de abajo llama el metodo 

*/