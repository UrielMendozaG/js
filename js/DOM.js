
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
    Añadiendo y borrando elementos

    Metodo                                Descripcion

    document.createElement(element)       Crea un elemento HTML
    
    document.removeChild(element)         Elimina un elemento HTML
    
    document.appendChild(element)         Añade un elemento HTML 
    
    document.replaceChild(new,old)        Remplaza un elemento HTML
    
    document.write(text)                  Escribe en HTML de salida
*/



