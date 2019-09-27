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

    function myFunction(a, b) {
        return a * b;
      }

      var x = myFunction(4, 3);

      // x = 12


/*

    Las funciones pueden ser usadas en expresiones

    Example
*/

    function myFunction(a, b) {
        return a * b;
    }
  
    var x = myFunction(4, 3) * 2;
    

/*

    Las funciones son objetos.

    El operador "typeof" en javascript retorna "function" en las funciones.
    
    PERO, las funciones en javascript pueden describirse como objetos.

    Las funciones de javascript tienen propiedades y metodos.

    La propiedad "arguments.length" retorna el numero de argumentos recibidos cuando 
    una funcion es invocada.

    Example

*/

    function myFunction(a, b) {
        return arguments.length; //aqui retorna el numero de argumentos recibidos
    }

    //si mandamos a llamar la myFunction(2,3) el resultado será 2

/*

    El metodo toString() retorna la funcion como un string

    Example
*/

    function myFunction(a, b) {
        return a * b;
    }
    
    var txt = myFunction.toString();

    //return function myFunction(a, b) { return a * b; }
    //extraño lo se :V

/*

    Una funcion definida como propiedad de un objeto, es definida
    como un metodo.

    Una funcion utilizada para crear mas objetos, es definida
    como un constructor.

*/

/*

    Funciones Flecha

    Las funciones flecha permiten una sintaxis corta para escribir funciones de expresion.
    
    No se necesita la palabra clave "function" ni "return" ni los corchetes.

    Example

*/

    // ES5
    var x = function(x, y) {
        return x * y;
    }
    
    // ES6
    const x = (x, y) => x * y;

    x(2,3);

    console.log(x) //6

/*

    Las funciones flechas no tienen su propio "this".

    No son bien situadas para definir metodos de objeto.

    Las funciones flechas are not hoisted, debes de declarlas antes de usarlas.

    Usar "const" es mas seguro que usar "var", por que una expresion de funcion es siempre constante.

    Solamente puedes omitir return y los corchetes si la funcion tiene una sola declaracion, debido
    a esto es un buen habito siempre tenerlos.

*/

    const x = (x, y) => { return x * y };

/*
    
        Parametros de la funcion

        Los parametros de la funcion son los nombres listados en la definicion de la funcion.
    
        Los argumentos son los valores reales que son pasados (y recibidos) a la funcion.
*/

   function functionName(parameter1, parameter2, parameter3) {
        // code to be executed
    }


/*

    Reglas de los parametros.

    Las funciones de javascript no especifican tipos de datos para los parametros.

    Tampoco checan datos en los argumentos pasados.

    Tampoco checan el numero de argumentos recibidos.

*/

/* 

    Parametros por default

    Si una funcion es llamada y faltan argumentos, los valores que faltan son definidos como:
    "undefined".

    Esto a veces es aceptable, pero tambien a veces es mejor asignar un valor por default al 
    parametro.

*/

function myFunction(x, y) {
    if (y === undefined) {
      y = 0;
    }
  }

//ECMAESCRIPT 2015 permite declarar valores por default en la funcion

// function (a=1, b=1) {
//     // function code
//   }

/*

  El objeto de los argumentos.

  Las funciones de javascript tienen un objecto built-in llamado objeto de los argumentos.

  El objeto argumento contiene un arreglo de los argumentos usados cuando la funcion fue invocada.

  De esta simple forma puedes usar una funcion para encontrar (por ejemplo) el mayor valor de una lista
  de numeros.

*/

numeroMaximo(5,6,7,1); //retorna 7

function numeroMaximo(){
    // arguments = [ 5 , 6 , 7 , 1 ]
    var max = -Infinity
    var i;

    for(i = 0; i<arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

// crear una simple funcion para sumar todos los valores 

x = sumaTodo(5,5,5,5);

function sumaTodo(){
    var suma = 0;
    var i = 0;

    for(i = 0; i<arguments.length; i++){
        suma += arguments[i];
    }

    return suma;
}

/*
  
    Si una funcion es invocada con muchos argumentos (mas de los declarados) estos argumentos
    pueden ser accedibles usando el objeto de los argumentos.

    objeto de los argumentos: 

    El objeto de los argumentos contiene un arreglo de todos los argumentos listados cuando
    la funcion fue invocada.

 */


 /*
 

    Los argumentos son pasados por valor.

    Los parametros, en una llamada a funcion, son los argumentos de la funcion.

    Los argumentos en javascript son pasados por valor, la funcion solo llega a conocer
    los valores, no las locaciones de los argumentos.

    Si una funcion cambia el valor de algun argumento, no cambia el valor original del parametro.

    Los cambios a los argumentos no son visibles (reflejados) afuera de la funcion.
 
 */

 /*
    Los objetos son pasados por referencia.

    En javascriot, la referencia de los objetos son valores.

    Debido a esto, los objetos se comportaran como fueron pasados por referencia:

    Si una funcion cambia una propiedad del objeto, se cambia el valor original.

    Cambios a las propiedades del objeto son reflejadas fuera de la funcion.
 
 */

 /*
 
    Javascript invocacion de funciones

    El codigo dentro de una funcion en javascript sera ejecutado cuando algo lo invoque.

    Invocando una funcion en javascript:

    El codigo dentro de una funcion no es ejecutado cuando es declarada.

    El codigo dentro de una funcion es ejecutado cuando la funcion es invocada.

    Es comun usar el termino "llamar a una funcion" en vez de "invocar a una funcion"

    Tambien es comun decir "llama una funcion", "empieza una funcion", "ejecuta una funcion"

    En este tutorial, usaremos invocar porque una funcion en javascript puede ser invocada sin ser llamada.

 */

 /*
 
    Invocado una funcion como una funcion :V

    EJEMPLO

 */

    function myFunction(a, b) {
        return a * b;
    }
    myFunction(10, 2);           // Will return 20

/* 
    La funcion de arriba no pertenece a ningun objeto.

    PERO en javascript siempre hay un objeto global por default.

    En html, el objeto global por default es la pagina html por si misma,
    asi que la funcion de arriba pertenece a la pagina html.

    En un navegador, el objeto de la pagina es la ventana del navegador.

    La funcion de arriba automaticamente se convierte en una window function.

    myFunction() y window.myFunction() es la misma funcion.

*/

    function myFunction(a, b) {
        return a * b;
    }
    window.myFunction(10, 2);    // Will also return 20

/* 
    Esta es una forma comun de invocar una funcion en javascript, pero no es una buena
    practica.

    Variables, metodos, o funciones globales pueden crear conflictos con los nombres y 
    bugs en el objeto global.

*/

/*

    Palabra reservada "this"

    En javascript la palabra reservada this, es el objeto al que le pertenece el codigo actual.

    El valor de this cuando es usado en una funcion, es el objeto al que le pertenece la funcion actual.

    THIS no es una variable, es una palabra clave, no puedes cambiar el valor de this.

*/

/*

    El objeto global.

    Cuando una funcion es llamada sin un objeto dueño, el valor de this se convierte en el objeto global.

    En un navegador web el objeto global es la ventana del navegador.

    Este ejemplo retorna el window object como el valor de this.

*/

    var x = myFunction();            // x will be the window object

    function myFunction() {
    return this;
    }

/*
    Invocar una funcion como una funcion global, causa que el valor de this sea el objeto global. 
    o sea window object.

    Usar el window object como una variable facilmente puede crashear tu programa.

*/

/*

    Invocar una funcion como un metodo.

    En javascript puedes definir funciones como metodos de un objeto.

    El siguiente ejemplo crea un objeto (myObject), con dos propiedades (firstName, lastName), y un 
    metodo (fullName).

*/

//ejemplo

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  myObject.fullName();         // Will return "John Doe"

/* 

  El metodo fullName es una funcion, la funcion le pertenece al objeto, myObject es el dueño de la funcion.

  La cosa llamada this, es el objeto al que le pertenece el codigo javascript, en este caso el valor
  de this es myObject. 

  En el ejemplo de abajo cambiamos fullName para que retorne this y veamos a quien le pertence el objeto.

*/

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }
  myObject.fullName();          // Will return [object Object] (the owner object)

/*

  Invocar una funcion como metodo de un objeto, causa que el valor de this sea el objeto en si mismo.

*/

/* 

  Invocar una funcion con una funcion constructor

  Si una invocacion de una funcion es precedida con la palabra "new", es una invocacion constructor.

  Parece que creaste una nueva funcion, pero como las funciones en javascript son objetos creaste un 
  nuevo objeto.

  EJEMPLO

*/

// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  
  // This creates a new object
  var x = new myFunction("John", "Doe");
  var uriel = new myFunction("Uriel","Mendoza");

  x.firstName;                             // Will return "John"
  uriel.lastName; //retorna Mendoza

  /* 
  
    Una invocacion al constructor crea un nuevo objeto, que hereda 
    las propiedades y los metodos de su constructor.

    La palabra this en el constructor no tiene un valor.
    El valor de this sera el nuevo objeto creado cuando la funcion sea invocada.
  
  */
