const URL_BASE = "https://swapi.dev/api/";
const URL_PEOPLE = URL_BASE + "people/";

async function fetchData(URL_PEOPLE) {
    try {
        const response = await fetch(URL_PEOPLE);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

async function fetchPeopleData() {
    const peopleData = await fetchData(URL_PEOPLE);
    return peopleData.results;
}

async function init() {
    const spinner = document.getElementById("spinner");
    const contenido = document.getElementById("contenido");

    spinner.style.display = "block";
    contenido.style.display = "none";
    try {
        const people = await fetchPeopleData();
        tabla(people);
        tarjeta(people);
    } catch (error) {
        console.error('Error al cargar la data:', error);
    } finally {
        spinner.style.display = "none";
        contenido.style.display = "block";
    }
}

let contenido = document.getElementById("contenido");

function tabla(datos) {
    console.log("contenido:", contenido);
    contenido.innerHTML = "";
    for (let temp of datos) {
        contenido.innerHTML += `
        <div class="card" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title">${temp.name}</h5>
                <div style="display:flex; flex-direction:column;">
                    <p class="card-text">Estatura: ${temp.height}</p>
                    <p class="card-text">Peso: ${temp.mass}</p>
                </div>
            </div>
        </div>
        `;
    }
}


document.addEventListener('DOMContentLoaded', init);