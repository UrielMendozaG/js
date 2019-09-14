//DOM

var cal = 0;
var puntaje = 'F';

switch (cal) {
    case cal>70:
        puntaje = 'C';
        break;

    case cal >= 80:
        puntaje = 'B';
        break;
        
    case cal >= 90:
        puntaje = 'A';
        break;

    default: 
        puntaje = 'F'; 
        break;
}

console.log(puntaje);