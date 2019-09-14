/* 

Las interfaces de programacion de aplicaciones (APIS) son construcciones disponibles 
en los lenguajes de programacion que permiten a los desarrolladores crear funcionalidades
complejas de una manera simple.

Estas abstraen el codigo mas complejo para proveer una sintaxis mas simple de usar en su lugar.

Piensa en el suministro electrico de tu casa, si quieres usar un electrodomestico, simplemente 
lo conectas en un enchufe y funciona. No intentas conectarlo directamente a la fuente de alimentacion
del poste (hacerlo seria muy ineficiente y tendrias que ser electricista a parte de ser peligroso).

De la misma manera, si quisieras hacer graficos 3D usarias una aplicacion escrita en un lenguaje 
de alto nivel como javascript o phyton en lugar de intentar escribir codigo de bajo nivel que controle
directamente la gpu. Sería ineficiente broder. 

Javascript del lado del cliente tiene muchas APIs disponibles -estas no son parte del lenguaje en si
si no que estan construidas sobre el nucleo de este lenguaje de programacion, proporcionandote 
superpoderes adicionales para usar en tu codigo. Por lo general se dividen en dos categorias:

Las Apis del navegador: estas estan integradas en tu navegador web y pueden exponer datos del navegador
y del entorno informatico circundante y hacer cosas complejas y hacer cosas complejas y utiles con el.
como la api de geolocalización proporciona algunas construcciones simples de javascript para obtener 
datos de ubicacion con los que podemos por ejemplo trazar tu ubicacion en un mapa de google. Realmente
el navegador está haciendo codigos complejos de bajo nivel con c++ para comunicarse con el gps del dispositivo, 
recuperar los datos y mostrarlos en el navegador. el punto es que la API se encarga de la complejidad.

Las APIS de terceros: no estan por defecto incluidas en el navegador, y por lo general es necesario 
obtener el codigo e informacion desde algun lugar de la web. EJEMPLO: la api de twitter permite 
hacer cosas como mostrar tus ultimos tweets en un sitio web. Proporciona un conjunto especial de construcciones
que puedes usar para consultar el servicio de twitter y devolver informacion especifica.

Javascript: es un lenguaje de alto nivel integrado en los navegadores para añadir interactividad a paginas web
y apps. javascript tambien esta en otros entornos de programacion como por ejemplo node

APIs de navegador: Contrucciones integradas con el navegador creadas con el lenguaje de javascript y que 
permiten incrementar funcionalidad mucho mas facilmente 

APIs de terceros: Construccines integradas en apis de terceros por ejemplo fb o tw que permiten usar 
algunas de las funcionalidades de esa plataforma en tus paginas web (como por ejemplo mostrar tus 
ultimos tweets)

Librerias de javascript: Por lo general uno o mas archivos JavaScript que contienen funciones personalizadas
que puedes añadir a tu pagina web para acelerar o habilitar la escritura de funcionalidades comunes, Ejemplo 
JQuery REACT

Frameworks JS: El siguiente paso de las librerias son los frameworks javascript como Angular y Ember, suelen
ser paquetes de HTML CSS y JS y otras tecnologias que se instalan y luego se usan para escribir una aplicacion 
web completa desde cero. La diferencia clave entre una libreria y un framework es la "inversion del control".
Cuando se llama a un metodo desde una libreria el desarrollador tiene el control. Con un framework el control
se invierte el framework llama al codigo del desarrolllador.

Apis mas usadas.- 
Apis para manipular documentos: la mas concocida es la API DOM, que permite manipular CSS y HTML 

Apis para obtener datos del servidor: estas apis son utilizadas en pequeñas secciones de la pagina 
para que este cambiando automaticamente sin necesidad de recargar la pagina. Las apis hacen esto 
gracias a que incluyen XMLHHttpRequest y la Fetch Api. También puede encontrar el termino AJAX 

Apis para dibujar y manipular graficos: las mas populares son Canvas y WebGL que permite manipular
cada pixel sobre el canvas para poder dibujar escenas  3D y 2D

Apis de video y audio.

Apis de dispositivo: ejemplo la geolocalizacion de google y vibracion Api y notificacion api pueden ser
otras.


*/ 