/*

    Funciones en javascript son definidas con la palabra reservada "function"

    Puedes usar una declaracion de funcion o una expresion de funcion

*/

//  Declaracion de funciones

function nameOfFunction(){
    //code to be executed
}

//  Funciones declaradas no son ejecutadas de inmediato, son guardadas para despues y son ejecutadas
// una vez que son invocadas

//  Function Expressions

/*
    Una funcion de javascript tambien puede ser declarada en una funcion.

    Una expresion de javascript puede guardarse en una variable.

*/

var x = function (a,b) {return a*b};

//despues de que una funcion fue guardada en una variable puede utilizarse

var z = v(1,3); //z = 3

//la funcion de arriba es llamada una funcion anonima (una funcion sin un nombre)

//funciones guardadas en variables no necesitan tener nombre, por que son invocadas siempre con el nombre de su variable

//  La function() constructor

/*
    Como hemos visto anteriormente, las funciones de javascript son definidas con la palabra function.

    Las funciones tambien pueden ser definidas con un built-in javascript function called Function().

*/

// Ejemplo: 

var myFunction = new Function("a","b","return a * b");

var x = myFunction(3,4) // x = 12

// el ejemplo de abajo es lo mismo que el de arriba 

var myFunction = function (a, b) {return a * b};

var x = myFunction(4, 3);

// Function Hoisting

/*

    El concepto hoisting  fue pensado como una manera general de referise
    a como funcionan los contextos de ejecucion en javascript (especificamente
    las fases de creacion y ejecucion). 

    Sin embargo, el concepto puede ser un poco confuso al principio.

    Conceptualmente, una estricta definicion de hoisting sugiere que 
    declaraciones de variables y funciones son fisicamente movidas
    al comienzo del codigo, pero esto no es lo que ocurre en realidad.

    Lo que sucede es que las declaraciones de variables y funciones 
    son asignadas en memoria durante la fase de compilacion, pero 
    quedan exactamente en donde las has escrito en el codigo.

*/

//EJEMPLO VERGAS

var x = 5;

(function () {
    console.log("x:", x); // no obtenemos '5' sino 'undefined'
    var x = 10;
    console.log("x:", x); // 10
}());

/*

    Como la declaracion de variables se procesa antes de ejecutar cualquier codigo,
    declarar una variable en cualquier parte del codigo es igual a declararla 
    al inicio del mismo.

    Lo que pasa aqui es que hipoteticamente la variable se "eleva"  y pasa 
    a declararse al inicio de su contexto, en este caso la funcion que lo contiene.

*/


//  El ejemplo anterior se entiende implicimante como esto:

var x = 5;

(function () {
    var x; // Se elevo la declaración
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());

// Se elevan las declaraciones, no se elevan las asignaciones

/*

    Function Hoisting

    Hosting aplica a declaracion de variables y de funciones tambien.

    Gracias a esto, las funciones de javascript pueden ser llamadas antes de ser declaradas.

*/

    myFunction(5); //25

    function myFunction(y) {
    return y * y;
    }

    //Funciones definidas usando una expresion no son elevadas

/*

    Funciones que se invocan a si mismas

    Las expresiones de funciones pueden hacerse "self-invoking"

    Una "self-invoking" expresion es llamada automaticamente, sin ser llamada.

    Las funciones expresion seran ejecutadas automaticamente si la expresion
    es seguida por ().

    Tu no puedes auto invocar a una declaracion de funcion.

    Tienes que añadir parentesis al rededor de la funcion para indicar que es una funcion expresion

*/

    (function (){
        var x = "Hello";
    })();

// la funcion de arriba es una funcion anonima 

/*

    Las funciones pueden usarse como valores 

*/

    //  Example

    