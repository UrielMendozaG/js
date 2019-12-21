// async wait

/* 
    Que es async/wait

    Es una funcionalidad de javascript que nos permite escribir codigo asincrono, que es muy parecido a 
    codigo sincrono, viene con el poder de promesas.

*/

const getFirstName = async userId => {
  //let's say this takes a few seconds
  return "first name";
};

const getLastName = async userId => {
  //let's say this takes a few seconds
  return "last name";
};

const getUserFullName = async userId => {
  const firstName = await getFirstName(userId);
  const lastName = await getLastName(userId);

  return `${firstName} ${lastName}`;
};

/*
    Esto de arriba sera referido como funciones asincronas, y hay unos detalles sintacticos a tener en cuenta:

    1. async is added al principio de la definicion de la funcion

    2. Nada especial es hecho con el return

    3. Funciones asincronas pueden usar otras funciones asincronas.

    4. Para tener el resultado de una funcion asincrona usar await, notar que await solo se puede usar dentro de funciones asincronas solamente.

    Puedes tonar que la funcio ngetUserFullName lee los datos muy parecido a codigo sincrono de js, y se comporta muy similar a este
    tambien.

    Usar await causa que el hilo de javascript se pare y espere por el resultado de getfirstname antes de continuar a la siguiente linea.
    y luego espera otra vez a esperar ala funcion getLastName 

*/

const getLatestPostActivity = async userId => {
  const posts = await getPosts(userId);
  const latestPost = posts[0];
  const comments = await getComments(latestPost.id);
  const likes = await getLikes(latestPost.id);

  return { comments: comments, likes: likes };
};