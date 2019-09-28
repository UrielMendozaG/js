//Arrays function

//popping and pushing


// sort ()

/* 

    El metodo sort() organiza un arreglo alfabeticamente.

*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // organiza el arreglo de manera alfabeticamente

/*
    Dar marcha atras a un arreglo.

    El metodo reverse() revoca los elementos del arreglo.

    Lo puedes usar para ordenar una lista descendientemente. 
    
*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // First sort the elements of fruits
fruits.reverse();     // Then reverse the order of the elements


// Ordenar un arreglo de numeros de mayor a menor utilizando sort()

/* 
    Por defecto, la funcion sort() organiza los valores como strings.

    Esto funciona bien para ejemplos como ("apple" comes before "banana")

    Sin embargo, si los numeros son organizados como strings "25" es mayor que "100", por que
    2 es mayor que 1.

    Debido a esto, el metodo sort() causara errores al momento de organizar numeros.

    Puedes arreglar esto creando una funcion de comparacion.

*/

// ascendentemente
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); //1,5,10,25,40,100

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b- a}); //100,40,25,10,5,1




