
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





