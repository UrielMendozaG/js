var dibujo = document.getElementsByClassName("dibujo");
var box = document.getElementsByClassName("box");


  TweenMax.staggerFrom(box, 1, { opacity:0, scale: 0, y:200,delay:0,rotation:360}, 0.2);
  TweenMax.staggerTo(box, 1, { opacity:0, delay:1, rotation:360, scale: 0, },.2,);

function complete() {
    alert("hola");
}

