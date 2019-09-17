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

/*

Componentes y propiedades 

Los componentes permiten separar la interfaz de usuario en piezas independientes,
reutilizables y pensar en cada pieza de forma aislada.

conceptualmente, los componentes son como las funciones en javascript. Aceptan
entradas arbitrarias (llamadas "props") y devuelven a React elementos que 
describen lo que debe aparecer en pantalla 

Componentes funcionales y de clase

La forma mas sencilla de definir un componente es escribir una funcion en javascript 

*/

function welcome(props) {
    return <h2>hola bienvenido, {props.name} </h2>
}

//esta funcion es un componente de react valido por que recibe un solo argumento
//props que viene de propiedades y devuelve un elemento de react. llamamos a estos
//componentes funcionales por que literalmente son funciones JavaScript.


/*

Ejemplo componente funcional

*/

function Welcome(props) {
    return <h2> Bienvenido,  {props.name} </h2>
}

const element = <Welcome name="Uriel" />

ReactDOM.render(
    element,
    document.getElementById("root")
)

// 1.- mandamos a ReactDOM.render nuestro elemento
// 2.- React manda a llamar al componente Welcome, con {name: "uriel"} como props
// 3.- nuestro componente Welcome devuelve un elemento <h2> Bienvenido Uriel </h2> como resultado
// 4.- React Dom actualiza eficientemente el DOM para que coincida con <h2> Bienvenido Uriel </h2>

//nota: empieza siempre los nombres de los componentes con letra mayuscula. 

//crear un componente llamado app que renderiza Welcome muchas veces

function Welcome(props){
    return <h2> Bienvenido {props.name} </h2>
}

function App(){
    return (
        <Welcome name="uriel" />,
        <Welcome name="sara" />,
        <Welcome name="mine" />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)


//ejemplo extraccion de componentes 

function Comment(props) { //no tengas miedo de dividir componentes en otros mas pequeños 
    return (
      <div className="Comment">     
         <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  function Avatar(props){
      return(
            <img className="Avatar"
            src={props.user.avatarURL}
            alt={props.user.name} />
      );
  }

  function UserInfo(props){
      <div className="userInfo">
          <Avatar user={props.user}/>
          <div className="UserInfo-name">
            {props.user.name}
          </div>
      </div>
  }

/*

    Las props son de solo lectura

    Ya sea que declares un componente como una funcion o como una clase, 
    este nunca debe modificar sus props. 

    Ejemplo
*/

function suma(a,b) {
    return a+b;
}

/*

    Tales funciones son llamadas "puras", por que no tratan de cambiar sus entradas, 
    y siempre devuelven el mismo resultado para las mismas entradas

    En contraste, la siguiente funcion es impura por que cambia su propia entrada

*/

function withdraw(account, amount) {
    account.total -= amount;  //cambia el valor de sus props por eso es impura
  }


//REGLA ESTRICTA:
//todos los componentes de react deben actuar como funciones PURAS con respecto a sus props.

//convertir un componente funcional a uno de clase

/*

Crear una clase ES6 con el mismo nombre que herede de React Component

Agregar un unico metodo vacio render()

Mover el cuerpo de la funcion al metodo render().

Remplazar 'props' por 'this.props' en el cuerpo de render.

Borrar el resto de la declaracion ya vacia

EJEMPLO pero sin borrar xD


*/

function clock(props){  //componente funcional
    return(
        <h2> It's {props.date} </h2>
    );
}

//esta clase de abajo es lo mismo que arriba :V

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h2> It's {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

function tick(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById("root")
    )
}

setInterval(tick,1000); //esto hace que se actualice la interfaz de usuario 

//soo, entonces podemos hacer lo de arriba de una manera que clock se renderice
//asi misma.

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

//para implementar esto, necesitamos agregar "estado" al componente Clock.

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h2> It's {this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

//clock se define ahora como una clase y no como una funcion


/*

Estado y ciclo de vida de REACT

El estado le permite a los componentes de React cambiar su salida a lo largo
del tiempo en respuesta a acciones de usuario, respuestas de red, 
y cualquier otra cosa sin violar la regla de las funciones puras.

El estado es similar a las props, pero es privado y está completamente 
controlado por el componente.


*/

//agregar estado local a una clase

//  1.- Reemplazar "this.props.date" por "this.state.date" en el metodo render()

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h2> It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

// 2.- Añadir un constructor de clase que asigne el this.state inicial:

class Clock extends React.Component {

    constructor(props){
        super(props);   // los componentes siempre deben invocar al constructor base con props
        this.state = {date: new Date()}; 
    }

    render() {
        return (
            <div>
                <h2> It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

//de esta forma podemos renderizar el componente asi

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

//ahora haremos que clock configure su propio temporizador y se actualice cada segundo

/*

    Agregar metodos de ciclo de vida a una clase

    En aplicaciones con muchos componentes, es muy importante liberar recursos 
    tomados por los componentes cuando se destruyen.

    Queremos configurar un temporizador cada vez que Clock se renderice en el DOM
    por primera vez. Esto se llama "montaje" en React.

    Tambien queremos borrar ese temporizador cada vez que el Dom producido por Clock
    se elmine. Esto se llama "desmontaje" en React.

    Podemos declarar metodos especiales en la clase del componente para ejecutar
    algun codigo cuando un componente se monta y se desmonta.


*/

class Clock extends React.Component {

    constructor(props){
        super(props);   // los componentes siempre deben invocar al constructor base con props
        this.state = {date: new Date()}; 
    }

    componentDidMount() { //montaje 
        
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    thick(){   //metodo tick encargado de actualizar el estado a uno nuevo
        this.setState({
            date: new Date()
        });
    }
  
    componentWillUnmount() { //desmontaje
        clearInterval(this.timerID);
    }

    //estos metodos son llamados "metodos de ciclo de vida"

    render() {
        return (
            <div>
                <h2> It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById("app")
)

/*


    El metodo componentDidMount() se ejecuta despues que la salida del
    componente ha sido renderizada en el DOM. 

    Eliminaremos el temporizador en componentWillUnmount()


    1.- Cuando se pasa Clock a react render, React invoca al constructor del componente
    Clock. Ya que clock necesita mostrar la hora actual, inicializa "this.state" con un
    objeto que incluye la hora actual. luego actualizaremos ese estado.

    2.- React invoca entonces el metodo render() del componente Clock. Asi es como react
    sabe que es lo que tiene que mostrar en pantalla. React entonces actualiza el DOM
    para que coincida con la salida del renderizado de Clock.

    3.- Cuando la salida de Clock se inserta en el DOM, React invoca al metodo de ciclo
    de vida ComponentDidMount(), dentro de el, el componente Clock le pide al navegador
    que configure un temporizador para invocar al metodo tick() del componente una 
    vez por segundo.

    4.- Cada segundo el navegador invoca al metodo thick(). Dentro de él, el componente Clock
    planifica una actualizacion de la interfaz de usuario al invocar setState() con un objeto
    que contiene la hora actual. Gracias a la invocacion a setState(), React sabe que el estado
    cambió e invoca de nuevo al metodo render() para saber que debe de estar en la pantalla.
    Esta vez, this.state.date en el metodo render() será diferente, por lo que el resultado
    del renderizado incluirá la hora actualizada. Conforme a eso React actualizará el dom.

    5.- Si el componente Clock se elimina en algun momento del DOM, react invoca al metodo
    de ciclo de vida componentWillMount(), por lo que el temporizador se detiene.

    

*/
