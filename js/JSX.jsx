/*

En programacion una expresion es: 

"Una combinacion de constantes, variables, o
funciones que es interpretada de acuerdo a las 
normas particulares de precedencia y asociación 
para un lenguaje de programacion en particular"

*/




const element = <h2> Hola Mundo </h2>

/* 

Lo basico de JSX:

JSX es una extension de la sintaxis de javascript. 
JSX produce elementos de React.

La logica de renderizado está instrisecamente unida 
a la logica de la interfaz de usuario, como se manejan 
los eventos, como cambia el estado con el tiempo y 
como se preparan los datos para su visualizacion. 

REACT separa INTERESES con unidades ligeramente
acopladas llamadas "COMPONENTES".

React no requiere usar JSX, sirve como ayuda visual cuando
trabaja con interfaz de usuario dentro del codigo JS.

*/

const name = 'Uriel';
const parrafo = <h2> My nombre es {name} </h2>

/*

Se puede poner cualquier tipo de expresion en las llaves, por ejemplo:
2+2, user.firstName, formatName(user) son todas expresiones validas
en javascript.


*/


function name(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: "uriel",
    lastName: "mendoza"
}        

const element = (
<h2> Hola {name(user)} </h2>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

/* 

    JSX tambien es una expresión.  

    Despues de compilarse, las expresiones JSX se convierten en 
    llamadas a funciones Javascript regulares y se evaluan 
    en objetos Javascript.

    Esto significa que puedes usar JSX dentro de declaraciones 
    if, y bucles for, asignarlo a variables, aceptarlo como 
    argumento y retornarlo desde dentro de funciones. 

*/

function saludo(usuario) {
    if(usuario){
        return <h2> Hola, {usuario} </h2>
    }
    return <h2> Hola, extraño </h2>
}


/*

Especificando atributos con JSX: 

*/

//se pueden usar comillas para especificar strings literales como artibutos
const element = <div tabIndex="0"></div>

//tambien puedes utilizar llaves para insertar una expresión Javascript en un atributo: 
const element = <img src={user.avatarURL} alt=""/>

/*
No pongas comillas rodeando llaves cuando insertes una expresión JavaScript en un atributo. 
Debes utilizar comillas (para los valores de los strings) o llaves (para las expresiones), pero no ambas en el mismo atributo.
*/

/*

Especificando hijos con JSX

Si una etiqueta está vacia puedes cerrarla inmediatamente con / como en XML

*/

const element = <img src={user.avatarURL} alt=""/>

/*

Etiquetas Javascript pueden contener hijos. 

*/

const element = (
    <div>
        <h2> Hello </h2>
        <h3> Glad to see you here :) </h3>
    </div>
);

/*

JSX previene ataques de inyección 


*/

const title = response.pontenciallyMaliciousInput;
//esto es seguro
const element = <h1>{title}</h1>

/*

    Por defecto, React DOM escapa cualquier valor insertado en JSX antes de renderizarlo.
    De este modo, se asegura de que nunca se pueda insertar nada que no esté explícitamente
    escrito en tú aplicación. Todo es convertido en un string antes de ser renderizado. 
    Esto ayuda a prevenir vulnerabilidades XSS (cross-site-scripting).

*/

/*

    JSX representa objetos 


*/

const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

//estos dos ejemplos son identicos

// Nota: Esta estructura está simplificada
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};


/*

Estos objetos son llamados “Elementos de React”. Puedes pensar en
ellos como descripciones de lo que quieres ver en pantalla.
React lee estos objetos y los usa para construir el DOM y mantenerlo actualizado.

*/

/*

Los elementos son los bloques mas pequeños de las aplicaciones de REACT.

Un elemento describe lo que quieres ver en pantalla 

*/

const elemento = <h2> Hola soy un elemento :B </h2>

/*

A diferencia de los elementos del DOM de los navegadores, los elementos de React son
objetos planos, y su creacion es de bajo costo. React DOM se encarga de actualizar 
el DOM para igualar los elementos de React.

Las aplicaciones construidas solamente utiizando react, generalmente tienen un unico nodo
llamado "root", dado el caso de que estes implementando react a una aplicacion existente
puedes tener tantos nodos raiz del dom aislados como quieras.

Para renderizar un elemento de react en un nodo raiz del DOM, pasa ambos a ReactDOM.render().
ejemplo: 
*/

//digamos que hay un div llamado root en algun archivo de tu html
// <div id="root"></div>

const elemento = <h2> soy un elemento </h2>;
ReactDOM.render(    //este codigo renderiza el div y el componente llamado element en tu div
    element,
    document.getElementById("root"),
)

/*

La diferencia entre componente y elemento en REACT:

Un componente esta conformado de uno o varios elementos,
un elemento es el bloque mas pequeño de una aplicacion en React.

Los elementos en react son inmutables, una vez creas un elemento no puedes
cambiar sus hijos o atributos. Un elemento es como un fotograma solitario 
en una pelicula este representa la interfaz de usuario en cierto punto en el tiempo.

React solo actualiza lo que es necesario, react dom solo actualiza el texto el texto 
del nodo cuyo contenido cambió. 

Pensar en como una interfaz de usuario deberia verse en momento dado, y no en como 
cambiarla en el tiempo, elimina toda una clase de errores.


*/



