/*

    Javascript Hosting 

    Hosting en es un comportamiento por defecto en javascript de mover las declaraciones hasta arriba.

    Las declaraciones en javascript son afectadas por el concepto hoisting

    En javascript, una variable puede ser declarada despues de ser usada.

*/

    // Ejemplo 1

    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element

    var x; // Declare x

    // Ejemplo 2

    var x; // Declare x
    x = 5; // Assign 5 to x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element


    /*

        hosting:

        Hoisting es un comportamiento por default de javascript de mover todas las declaraciones al principio
        del scope actual. (el principio del script actual, o de la funcion actual)


    */


    /*

        Variables y constantes declaradas con let y const no son afectadas por el comportamiento de hoisting.

    */

    /*

        Las inicializaciones de javascript no son afectadas por el comportamiento de hoisting.

        El ejemplo 1 no da el mismo resultado que el ejemplo 2.

    */

    // Ejemplo 1 

    var x = 5; // Initialize x
    var y = 7; // Initialize y

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y

    // Ejemplo 2 

    var x = 5; // Initialize x

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x and y

    var y = 7; // Initialize y

    // En el ejemplo 1 se muestran 5 y 7. 

    // En el ejemplo 2 se muestra 5 y undefined

    /*

        Esto es por que solamente la declaracion y es subida hasta el prinicipio, no la asignacion.

    */

    /*
        Declara las variables al principio!.

        Hoisting es para mucho desarrolladores un comportamiento desconocido en javascript.

        Si un desarrollador no entiende el concepto de hosting, los programas pueden contener errores.

        Para prevenir errores, siempre declara las variables al principio de cada scope.

        Como esta es la forma en la que javascript interpreta el codigo, parece buena regla.
        
    */