//DOM

var cal = 0;
var puntaje = "F";

function calificacion(cal) {

if (cal >= 90)
    return puntaje = 'A';
if(cal >= 80 )
    return puntaje = 'B';
if(cal >= 70)
    return puntaje = 'C';
else
  return (puntaje = "F");

}

console.log(calificacion(69));
