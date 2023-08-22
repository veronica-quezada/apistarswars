const URL_BASE = "https://swapi.dev/api/";
const URL_PEOPLE = URL_BASE + "/people/";
let contenido = document.getElementById("contenido");
let carta;

function tabla(datos) {
    console.log("contenido:", contenido);
    contenido.innerHTML = "";

    for (let temp of datos) {
        console.log("temp:", temp);
        contenido.innerHTML += `<tr>
            <th scope="row">${temp.name}</ th> 
            <td><img width="80px" height="80px" src="${temp.img}"></td> 
            <td>${temp.level}</td>
        </tr> `;
        if (temp.id == 10) {
            break;
        }
    }
}

function tarjeta(data) {
    carta.innerHTML = "";
    for (let temp of data) {
        carta.innerHTML += ` 
      <div id="tarjSola" class="card mb-3 container" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${temp.img}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">"NOMBRE: ${temp.people}"</h5>
      <p class="card-text">ESTATURA: "${temp.estatura}"</p>
     </div>
  </div>
</div>
</div>
 `;
    }
}

$(document).ready(function () {
    contenido = document.getElementById("contenido");
    carta = document.getElementById("carta");

    fetch(URL_PEOPLE)
        .then((response) => response.json())
        .then((datos) => {
            console.log(datos);
            tabla(datos.results);
        });
});
