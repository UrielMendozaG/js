
// El nivel mas basico de una pagina web es el de solamente un documento html, el navegador
// es un programa que interpreta ese html y css y renderiza el estilo, contenido y estructura
// dentro de la pagina que ves.

//El navegador en adicion de analizar el html y css, crea una representacion del documento
//conocida como "Document Object Model".
//Este modelo le permite a javascript acceder
//al contenido de texto y elementos del documento de la pagina web como objetos.



const text = document.querySelector(".text");
const button = document.querySelector(".button");

button.addEventListener('click', function(){
    text.classList.toggle("animation");
    
})



const elipse = document.querySelectorAll("#elipses .elipse");

elipse.forEach(function (elipse){
    elipse.addEventListener('mouseover', function(){
        elipse.style.cursor = "pointer";
    })
})


/*

    Con el html dom, javascript puede acceder y cambiar
    todos los elementos de un documento HTML.

    The HTML DOM (DOCUMENT OBJECT MODEL)

    Cuando una pagina web es cargada, el navegador crea
    el document object model de la pagina.

    El DOM HTML es construido como un arbol de objetos.

    Con el object model javacsript obtiene todo el poder
    que necesita para crear HTML dinamico.

    Javascript puede cambiar todos los elementos HTML de una pagina
    Javascript puede cambiar todos los atributos HTML de una pagina
    Javascript puede cambiar todos todos los estilos CSS de una pagina.
    Javascript puede eliminar elementos HTML y atributos existentes.
    Javascript puede añadir nuevos elementos HTML y atributos
    Javascript puede reaccionar a todos los eventos html de una pagina
    Javascript puede crear nuevos elementos HTML en la pagina

    Que aprenderemos?

        -Como cambiar contenido de elementos HTML
        -Como cambiar el estilo de elementos HTML
        -Como reaccionar a eventos del DOM
        -Como añadir y borrar elementos HTML

    Que es el DOM?

        El dom es un standard de la W3C World Wide Web Consortium

        El dom define un estandar para acceder a documentos:

        "El DOM es una plataforma y interfaz de lenguaje-neutral
        que permite a los programas y scripts acceder y actualizar
        dinamicamente el contenido, estructura, y estilo de un 
        documento"

    El estandar del DOM esta separado en 3 partes diferentes:


        Core DOM: un modelo estandar para todo tipo de documento
        XML DOM: modelo estandar para documentos XML
        HTML DOM: modelo estandar para documentos HTML
        
    Que es el HTML DOM?:

        El DOM HTML es un estandar object model y interfaz de programacion para HTML.
        Que define:

        - Los elementos HTML como objeto
        - Las propiedades de todos los elementos HTML
        - Los metodos para acceder a HTML
        - Los eventos de los elementos HTML

        En otras palabras: EL HTML DOM es un estandar de como obtener, cambiar
        añadir, o borrar elementos HTML.

    Javascript HTML DOM METHODS.

    HTML DOM methods son acciones que puedes realizar (en HTML elements).
    HTML DOM properties son valores (de elementos HTML) que puedes cambiar o poner.

    The DOM Programming Interface

    El HTML DOM puede ser accedido con javascript (y otros lenguajes de programacion)

    En el dom, todos los elementos HTML son definidos como objetos. 

    La interfaz de programacion son las propiedades y son los metodos de cada objeto.

    Una propiedad es un valor que tu puedes obtener, o fijar (como cambiar el contenido de un elemento HTML)

    Un metodo es una accion que puedes hacer (como añadir o borrar un elemento HTML)

*/


//  EXAMPLE 

// El siguiente ejemplo cambia el contenido (the innerHTML) del elemento <p> con el id="demo"


{/* <p id="demo"></p> */}

document.getElementById("demo").innerHTML = "Hello World!";

/*

    getElementById es un metodo.

    innerHTML es una accion.


*/

/*

    El metodo getElementbyId

    La forma mas comun de acceder a un elemento HTML es usar 
    el id del elemento.

    En el ejemplo de arriba, el metodo getElementById uso id="demo"
    para encontrar el elemento.

*/

/*

    La propiedad innerHTML

    La forma mas sencilla de obtener el contenido de un elemento 
    es usar la propiedad innerHTML.

    La propiedad innerHTML es util para obtener o remplazar el contenido
    de los elementos HTML.

    La propiedad innerHTML puede ser utilizada para obtener o cambiar
    cualquier elemento HTML, incluyendo <html> y <body>.

*/

/*

    Javascript HTML DOM Document

    El HTML DOM Document object es el dueño de todos los demas objetos de la pagina.

    El HTML DOM Document Object

    El document object representa tu pagina web.

    Si quieres acceder a cualquier elemento en una pagina HTML, 
    siempre deberas empezar acceciendo al document object.

    Abajo hay unos ejemplos de como puedes usar el document object
    para acceder y manipular HTML.

*/

/*
    Encontrar elementos HTML

    Metodos                                 Descripcion

    document.getElementById(id)             encuentra los elementos por id
    
    document.getElementsByTagName(name)     encuentra los elementos por nombre del tag

    document.getElementsByClassName(name)   encuentra los elementos por nombre de la clase
*/


/*
    Cambiando elementos HTML

    Propiedad                               Descripcion

    element.innerHTML = new html content    Cambia el interior de un elemento HTML

    element.attribute = new value           Cambia el valor del atributo de un elemento HTML

    element.style.property = new style      Cambia el estilo de un elemento en HTML

    Metodo 

    element.setAttribute(attribute, value)  Cambia el atributo de un elemento HTML
*/

/*
    Añadiendo y borrando elementos // borrar elementos

    Metodo                                Descripcion

    document.createElement(element)       Crea un elemento HTML
    
    document.removeChild(element)         Elimina un elemento HTML
    
    document.appendChild(element)         Añade un elemento HTML 
    
    document.replaceChild(new,old)        Remplaza un elemento HTML
    
    document.write(text)                  Escribe en HTML de salida
*/

/*
    Añadiendo manejadores de eventos                            Descripcion

    document.getElementById(id).onclick = function(){code}      Adding event handler code to an onclick event

*/

/*
    Encontrando objetos HTML

    El primer nivel del DOM HTML  (1998), definio 11 objetos HTML, coleccion de objetos
    y propiedades. Estos todavia son validos en HTML5

    Despues, en el DOM HTML nivel 3, mas objetos, colecciones y propiedades fueron
    añadidas.
*/

/*
    Propiedad 

    document.anchors	            Returns all <a> elements that have a name attribute	1
    document.applets	            Returns all <applet> elements (Deprecated in HTML5)	1
    document.baseURI	            Returns the absolute base URI of the document	3
    document.body	                Returns the <body> element	1
    document.cookie	                Returns the document's cookie	1
    document.doctype	            Returns the document's doctype	3
    document.documentElement	    Returns the <html> element	3
    document.documentMode	        Returns the mode used by the browser	3
    document.documentURI	        Returns the URI of the document	3
    document.domain	                Returns the domain name of the document server	1
    document.domConfig	Obsolete.   Returns the DOM configuration	3
    document.embeds	                Returns all <embed> elements	3
    document.forms	                Returns all <form> elements	1
    document.head	                Returns the <head> element	3
    document.images	                Returns all <img> elements	1
    document.implementation	        Returns the DOM implementation	3
    document.inputEncoding	        Returns the document's encoding (character set)	3
    document.lastModified	        Returns the date and time the document was updated	3
    document.links	                Returns all <area> and <a> elements that have a href attribute	1
    document.readyState	            Returns the (loading) status of the document	3
    document.referrer	            Returns the URI of the referrer (the linking document)	1
    document.scripts	            Returns all <script> elements	3
    document.strictErrorChecking	Returns if error checking is enforced	3
    document.title	                Returns the <title> element	1
    document.URL	                Returns the complete URL of the document	1

*/


/*
    Javascript HTML DOM Elements

    Ahora enseñare como encontrar y acceder a elementos HTML en una HTML page

    Encontrando elementos HTML

    A menudo, con javascript, quieres manipular elementos HTML.

    Para hacer eso, tienes que encontrar los elementos primero. 
    Hay varias maneras para hacer eso:
        
        -Encontrando elementos HTML por el id
        -por el tagname
        -class name
        -css selectors
        -html object collections

    Encontrando elemento HTML por el id

    La manera mas facil sin duda, es usar el id.

    Este ejemplo muestra de como encontrar un elemento con el id="uri"
*/

var elemento = document.getElementById("uri");

/*
    Si el elemento es econtrado, el metodo retornara el elemento como un objeto
    en la variable "elemento".

    Si el elemento no es encontrado, elemento tendra el valor de null.
*/

/*
    Encontrado elementos HTML por el tag name

    Este ejemplo encuentra todos los <p> elementos.

*/

var x = document.getElementsByTagName("p");

/*
    El ejemplo de abajo ecuentra el elemento con el id ="main",
    y luego encuentra todos los <p> dentro de este.

*/

    var x = document.getElementById("main");
    var y = x.getElementsByTagName("p");

/*
    Encontrando elementos por class name

    Si quieres encontar todos los elementos con la misma clase, use
    getElementsByClassName();

    El ejemplo de abajo obtiene todos los elementos en la clase intro.

*/

var x = document.getElementsByClassName("intro");

/*
    Encontrando elementos HTML por CSS selectors

    Si quieres encontrar elementos HTML que coincidad con un selector css
    especifico (id, class names, types, attributes, values of attributes, etc)
    use the querySelectorAll();

    Este ejemplo retorna una lista de todos los <p> con la clase " class= "intro" "
*/

var x = document.querySelectorAll("p.intro");

/*
    Encontrando elementos HTML by HTML Object Collections

    El ejemplo de abajo encuentra el form element con un id="frm1",
    en el forms collection, y muestra todos los valores del elemento.

*/

function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }

/*
    Los siquientes objectos HTML (y colecciones de objetos) son accesibles tmb:

    document.anchors
    document.body
    document.documentElement
    document.embeds
    document.forms
    document.head
    document.images
    document.links
    document.scripts
    document.title

*/

/*
    En javascript, document.write() puede ser usado para escribir directamente 
    al htlm output stream.

    <!DOCTYPE html>
    <html>
    <body>

    <script>
    document.write(Date());
    </script>

    </body>
    </html>

    Nunca uses document.write() despues de que el documento se haya cargado,
    por que esto sobreescribira el documento.

    Cambiado contenido HTML

    La forma mas facil para cambiar el contenido de un elemento en html,
    es usar la propiedad innerHTML.
    
    Para cambiar el contenido de un contenido HTMl usa esta sintaxis:
*/

    document.getElementById(id).innerHTML = new HTML

/*
    Este ejemplo cambia el contenido de un elemento p

    <html>
    <body>

    <p id="p1">Hello World!</p>

    <script>
    document.getElementById("p1").innerHTML = "New text!";
    </script>

    </body>
    </html>

    Ejemplo explicado:

    El html de arriba contiene un elemento con el id de "pi"
    Usamos el Dom para obtener el elemento con el id="p1"
    Javascropt cambia el contenido (innerHTML) de este elemento a "New Text"

    Este ejemplo cambia el contenido de un elemento h1

    <!DOCTYPE html>
    <html>
    <body>

    <h1 id="id01">Old Heading</h1>

    <script>
    var element = document.getElementById("id01");
    element.innerHTML = "New Heading";
    </script>

    </body>
    </html>

    El html de arriba contiene un elemnto con id="id01"
    Usamos el DOM para obtener id="id01"
    Javascript cambia el contenido (innerHTML) de ese elemento por "New Heading"

*/

/*

    Cambiando el valor de un atributo

    Para cambiar el valor de un atributo utiliza esta sintax:

    document.getElementById(id).attribute = new value

    El ejemplo de abajo cambia el valor del atributo src de un 
    elemento <img>
    
    <!DOCTYPE html>
    <html>
    <body>

    <img id="myImage" src="smiley.gif">

    <script>
    document.getElementById("myImage").src = "landscape.jpg";
    </script>

    </body>
    </html>

*/

/*

Dia 15

    Cambiando estilos HTML

    Para acmbiar estilos de los elementos usa esta sintaxis:

    document.getElementById(id).style.property = new style

    .property significa que tenes acceso a todas las propiedades
    css.

    document.getElementById("p2").style.color = "blue";
    document.getElementById("p2").style.fontFamily = "Arial";
    document.getElementById("p2").style.fontSize = "larger";

*/

/*
    Usando Eventos 

    HTML DOM permite ejecutar codigo cuando un evento ocurre.

    Eventos son generados en el navegador cuando algo pasa a los elementos HTML.

    - Un elemento ha sido clickeado
    - La pagina se ha cargado
    - campos de input han cambiado

    <button type="button" 
    onclick="document.getElementById('id1').style.color = 'red'">
    Click Me!</button>

    Este ejemplo cambia el estilo de un texto con id="id1" a color rojo.

*/

/*

    Javascript HTML DOM events

    HTML DOM permite reaccionar a eventos de los elementos HTML.

    Reaccionando a eventos 

    Codigo puede ser ejecutado cuando un evento ocurre, como cuando
    un usuario clickea un elemento HTML.

    Para ejecutar codigo cuando un usuario clickea en un elemento,
    añade javascript en un event atribute en html.

    onclick=javascript

    onclick=function();

    Ejemplos de eventos HTML: 

    - Cuando un usuario clickea 
    - Cuando una pagina web termina de cargar
    - Cuando una imagen ha sido cargada
    - Cuando un mouse pasa por encima de un elemento
    - Cuando un campo input ha sido llenado
    - Cuando un form HTML ha sido subido
    - Cuando un usario pulsa una tecla

    Ejemplo de cambiar un h1 cuando un usario pulsa un boton

        <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

        En el ejemplo de arriba le das click y se cambia el texto por 'ooops!'

    En este ejemplo, una funcion es llamada from te event handler

        <h1 onclick="changeText(this)">Click on this text!</h1>

        function changeText(id) {
        id.innerHTML = "Ooops!";
        }

    HTML event attributes
    
        Para asignar atributos a elementos HTML puedes utilizar atributos de evento.

        <button onclick="displayDate()">Try it</button>

        Este codigo ejecuta una funcion llamada displayDate();

    Asignar eventos usando el HTML DOM

        EL DOM HTML te permite asignar eventos a los elementos HTML usando javascript.

        document.getElementById("myBtn").onclick = displayDate;

        El codigo de arriba es un script que asigna el evento onclick a un elemento
        con id de "myBtn", cuando le des click al boton la fecha aparecerá.
    
    The onload and onunload Events

        The onload and onunload events are triggered cuando un usuario entra
        o sale de la pagina.

        The onload event puede ser usado para checar el tipo y version del navegador
        y cargar la version adecuada de la pagina de acuerdo a la version.

        The onload and onunload events pueden ser usado para trabajar con cookies.

    The onchange event es frecuentemente usado en combinacion con validacion
    para los input fields.

    Abajo hay un ejemplo de como utilizar the onchange event, la funcion upperCase() sera 
    llamada cuando un usuario cambie el contenido de un input field
    */

    //  Enter your name: <input type="text" id="fname" onchange="myFunction()">

   function myFunction() {
        var x = document.getElementById("fname");
        x.value = x.value.toUpperCase();
    }
   
   
   //1 de octubre es el dia 16