/*

    Fecha en javascript.

    El objeto Date en javascript nos permite utilizar fechas.

*/

// EJEMPLO 

var d = new Date();

/* 

    Javascript date output 

    Por defecto, javascript utilizara la zona horaria del navegador y mostrará como
    un string.

    Fri Sep 27 2019 14:15:24 GMT-0500 (hora de verano central) //ejemplo

*/

/*

    Creando data objects

    los Date Objects son creados utilizando new Date() constructor.

    Hay 4 formas de crear un nuevo date object.

    - new Date()
    - new Date(year, month, day, hours, minutes, seconds, milliseconds)
    - new Date(miliseconds)
    - new Date(date string)

*/

var d = new Date();

// Los Date Objects son estaticos, el tiempo de la computadora sigue, pero
// el del objeto no.

/*

    new Date(year, month)

    crea un nuevo date object con un tiempo y fecha especifico.


    7 numeros especifican  año, mes, dia, hora, minuto, segundo y milisegundo. 
    6 numeros especifican  año, mes, dia, hora, minuto y segundo.
    5 numeros especifican  año, mes, dia, hora y minuto.
    4 numeros especifican  año, mes, dia y hora.
    3 numeros especifican  año, mes y dia.
    2 numeros especifican  año y mes.

    No se puede omitir mes, si haces esto se interpretara como milisegundos.

    ejemplo

*/

    var d = new Date(2000, 9, 27, 10, 33, 30, 0); // mi cumpleaños :V
    //return Fri Oct 27 2000 10:33:30 GMT-0500 (hora estándar central)

/*

    Nota: javascript cuenta los numeros empezando de 0
    
    diciembre es 11, enero es 0.

*/

/*

    Fecha del siglo pasado.

    Uno y dos digitos seran interpretados como 19xx.

*/

//ejemplo

var d = new Date(99, 4, 29);  //cumpleaños de mi hermana mayor

//return Sat May 29 1999 00:00:00 GMT-0500 (hora de verano central)

var d = new Date(9, 11, 24);


