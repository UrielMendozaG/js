/*

    Scope Javascript 

    El scope determina la accesibilidad (visibilidad) de las variables.

    Javascript Funcion Scope. 

    En javascript hay dos tipos de scope:

    - Local 
    - Global

    Javascript tiene function scope: cada funcion crea un nuevo scope.

    El scope determina la accesibilidad (visibilidad) de las variables.

    Local Javascript Variables 

    Variables declaradas en una funcion, se convierten en LOCALes a la funcion.

    Local variables tienen un scope function: solamente pueden ser accedidas
    a ellas dentro de la funcion.

*/

    // EXAMPLE

    //codigo aqui no puede usar carname

    function myFunction(){
        var carName = "volvo"; //carName tiene scope LOCAL

        //codigo aqui si puede utilizar carname
    }

// como las variables locales solamente son reconocidas dentro de la funcion
// variables con el mismo nombre pueden ser usadas en diferentes funciones.

// variables locales son creadas cuando una funcion empieza, y borradas cuando
// la funcion acaba

/*

    Global Javascript Variables

    Una variable declarada fuera de una funcion, se convierte en variable Global.

    Una variable global tiene global scope: todos los scripts de la pagina 
    pueden acceder a ella.

    Ejemplo

*/

var carName = "Volvo"; //carName tiene scope GLOBAL

// codigo aqui puede utilizar carName

function myFunction() {

  // codigo aqui puede utilizar carName

}

/*

    Javascript Variables

    En javascript, objetos y funciones son variables.

    Scope determina la accesibilidad de las variables, objetos
    y funciones de diferentes partes del codigo.

    Automaticamente Global

    Si asignas un valor a una variable que todavia no es declarada,
    automaticamente se convertira en una variable global.

    El codigo de abajo como ejemplo declarara una variable global
    llamada carName.

*/

myFunction();

//codigo aqui puede utilizar volvo por que carName es global.

function myFunction(){
    carName = "volvo";
}

// Usando javascript en strict mode las variables globales
// no se crearan automaticamente

/*
    Global variables en HTML

    Con js, el scope global es el entorno completo de javascript.

    En HTML, el global scope es el window object, todas las variables
    globales pertenecen al window object.

    EJEMPLO:
*/

var carName ="volvo";
var uriflow = "mendoza";

// codigo aqui se puede acceder como window.carName

// mi apellido se puede acceder con window.uriflow

/*

    Warning 

    No crees variables globales a menos que lo requieras.

    Tus variables globales (o funciones) pueden sobreescribir 
    window variables or functions.

    Cualquier funcion, incluyendo window object, puede sobreescribir
    tus variables globales y funciones.

*/

/*

    The lifetime of javascript variables

    El ciclo de vida de una variable en javascript comienza cuando es declarada.

    Variables locales son borradas cuando una funcion es completada.

    En un web browser, variables globales son borradas cuando tu cierras la ventana
    del navegador, pero permanecen disponibles para paginas nuevas cargadas dentro
    de la misma ventana.

    Functions Arguments

    Los argumentos de funcion (parametros) trabajan como variables locales dentro
    de la funcion.
 

*/