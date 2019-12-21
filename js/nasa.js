// mi objetivo es agarrar el titulo de la imagen ponerlo en el h2 
// y hacer lo mismo con la imagen

let title = document.getElementById("main");
let photo = document.getElementById("photo");
let p = document.getElementById("p");

async function setData(){
  const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=wSn5UGzdmez8uLrfHmAyexcKn5BXMfWfd8rlyaeG",{mode: 'cors'});
  const data = await response.json();

  // set data

  title.innerHTML = data.title;
  photo.src = data.url;
  p.innerHTML = data.explanation;

}

setData()