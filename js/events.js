/*
    Eventos en javascript

    Los eventos en HTML son "cosas" que le pasan a elementos html.

    Cuando javascript es usado en paginas HTML, javascript puede "reaccionar" a esos eventos.

    HTML EVENTS

    Un html event puede ser algo que el navegador haga, o algo que el usuario haga.

    Aqui unos ejemplos 

    - Una pagina html a acabado de cargar
    - Un campo input ha sido llenado
    - Un boton en html ha sido clickeado

    Seguido, cuando un evento ocurre, quieres que haga algo.

    Javascript te permite ejecutar codigo cuando un evento es detectado.

    HTML permite tener atributos de manejador de eventos, con codigo JS, para ser añadido a los elementos HTML.
*/

    // con comillas simples

    <element event='some JavaScript'></element>;

    // con comillas dobles

    <element event="some JavaScript"></element>;



    // En el siguiente ejemplo, un atributo onclick con codigo, es añadido
    // al <button> element:
    
    <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>;

    // en el ejemplo de arriba el codigo cambia el contenido del elemento html con el id 'demo'

    // En el siguiente ejemplo el codigo cambia el contenido de su mismo elemento  usando this.innerHTML 

    <button onclick="this.innerHTML = Date()">The time is?</button>;
    
    // El codigo que contienen los eventos casi siempre es mayor, por eso es mas comun llamar a funciones en el 
    // elemento HTML.

    <button onclick="displayDate()">The time is?</button>



