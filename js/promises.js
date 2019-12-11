/*
    Semanticamente una promesa representa una tarea asincrona que será completada pero potencialmente estará incompleta.
    El ejemplo de abajo es una estructura de una promesa.
*/

const flipACoin = new Promise((resolve, reject) => {});

/*

    Una promesa es una clase, y su constructor toma un solo argumento, una funcion llamada "funcion ejecutora".
    
    La funcion ejecutora tiene dos parametros resolve, and reject.

    El codigo de la funcion corre y llamas resolve() cuando hayas acabado y reject por si algo falla.

*/

const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    resolve();
  } else {
    reject();
  }
});

/*
    Context with the javascript promises.

*/

console.log("I'm about to flip a coin!");

const flipACoin = new Promise((resolve, reject) => {
  console.log("I'm flipping the coin!");

  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    console.log("Here is the coin flip result!", flipResult);
    resolve();
  } else {
    reject();
  }
});

console.log("I have flipped the coin.");

/*
        El orden de los outputs es :
        1. I am about to flip a coin
        2. I am flipping the coin
        3. I have flipped the coin
        4. Here is the coin flip result, heads

        El codigo que sigue despues de una peticion asincrona fuera de la promesa se seguira ejecutando, mientras
        que el codigo asincrono espera a ser resuelto.

  */

/*

    Waiting for a promise to finish
    
    Para llamar codigo o funciones despues de que una promesa termine de ejecutarse se utilizan ciertas funciones,
    en el primer caso vamos a usar .then(), que es automaticamente llamada despues de que la promesa ejecute resolve().

  */

console.log("I'm about to flip a coin!");

const flipACoin = new Promise((resolve, reject) => {
  console.log("I'm flipping the coin!");

  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    console.log("Here is the coin flip result!", flipResult);
    resolve();
  } else {
    reject();
  }
}).then(() => {
  console.log("I have flipped the coin.");
});

/*
    el orden de salida de este codigo es:

    1. I'm about to flip a coin
    2. I'm flipping the coin
    3. Here is the coin flip result
    4. I have flipped the coin

    Recordar que la funcion .then() se ejecutara solamente cuando resolve() sea llamada.
 
 */

/*
    .then() es una funcion de una promesa, que toma lugar como una funcion que sera 
    ejecutada despues de que el codigo dentro de la funcion ejecutora de la promesa
    llame a resolve().

    El contenido de la funcion .then es solamente ejecutado, despues de resolve(),
    osea que solamente pasa despues de que "Here is the coin flip result!, tails" es
    imprimido en consola, hemos esperado exitosamente a que la promesa se ejecute para 
    hacer algo.

 */

/*
    Otras funciones que puedes llamar en promesas
 */

const flipACoin = new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    //use `.then()` to do something after `resolve()` has been called
  })
  .catch(() => {
    //use `.catch()` to do something after `reject()` has been called
  })
  .finally(() => {
    //use `.finally()` to do something either way
  });

/*

  Callbacks vs Promises

  Cuando tienes codigo asincrono que depende de otro codigo asincrono puedes llegar al mito conocido como callback hell.

*/

/*

  Retornando valor afuera de las promesas 

  Esperar a una promesa es util, pero es mucho mejor ser capaz de decirle al codigo al rededor de la promesa el valor
  esperado de esa promesa.

  1. resolve() should take in an argument
  2. the function in .then() should take in a parameter

*/

const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    resolve(flipResult);
  } else {
    reject();
  }
}).then(flipResult => {
  console.log(`The result was ${flipResult}`);
});

/*
    Using a promise later
*/

const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    resolve(flipResult);
  } else {
    reject();
  }
});

//...
//do other things
//...

console.log("Wait did I flip the coin?");

flipACoin.then(flipResult => {
  console.log("Oh I did!");
});

console.log("Double checking...");

flipACoin.then(flipResult => {
  console.log("Okay I definitely did!");
});

//new promise

const promise = new Promise((resolve, reject) => {
  console.log("a punto de hacer la promesa");
  let resultado = hasAlgo(); // suponemos que esto puede fallar

  if (resultado) {
    resolve(resultado);
  } else {
    reject(resultado);
  }
})
  .then(resultado => {
    console.log(resultado);
  })
  .catch(resultado => {
    console.log(resultado);
  });

// other way

const promise = new Promise((resolve, reject) => {
  const result = result(); // lets say flip takes 2 seconds

  if (resultado) {
    resolve();
  } else {
    reject();
  }
});

// do other things

promise.then(() => {
  console.log("checando a la bandita desde lejos");
});

/*
    una vez que creas una promise puedes añadirle .then o .catch en cualquier parte de tu codigo.
*/

/*
    Chaining promises
    
    Una de las caracteristicas de las promises es que las puedes encadenar

*/

const flipACoin = new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    doSomething();
  })
  .then(() => {
    doSomethingElse();
  })
  .then(() => {
    doAnotherThing();
  });

/* 
  
  
*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
})
  .then(result => {
    document.getElementById("then1").innerHTML = "Done!";
  })
  .then(result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById("then2").innerHTML = "Done!";
        resolve();
      }, 3000);
    });
  })
  .then(() => {
    document.getElementById("then3").innerHTML = "Done!";
  });

  /*
        Un .then no espera al otro a menos que codifiques algo parecido al de arriba

  */