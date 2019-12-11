// window.onload(start());

    function clickDown(obj){
        animation(obj);
    }

    function clickUp(obj){
        animation2(obj);
    }

    function animation(obj){
        anime({
            targets: obj,
            width: ["5%","10%"],
            duration: 500,
            easing: "linear",
          });
    }

    function animation2(obj){
        anime({
            targets: obj,
            width: ["5%","5%"],
            duration: 1000,
            easing: "linear",
          });
    }

   


