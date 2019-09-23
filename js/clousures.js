/*

    Las variables en javascript pueden pertenecer al global scope, o local scope

    Las variables globales pueden hacerse locales (privadas) con clousures. 

*/

//  Global variables

//Una funcion puede acceder a todas las variables definidas dentro de la funcion, asi:

function myFunction(){
    var a = 4;
    return a*a;
}

//  Pero una funcion puede acceder tambien a variables fuera de una funcion, asi: 

var a = 4;
function myFunction(){
    return a*a;
}

//En el anterior ejemplo a es una variable global

