const cardsConteiner = document.getElementById("main-events");
const dataEvents = data.events;

//cartas

cardsCreate(dataEvents);
function cardsCreate(dataEvents) {
    let card = "";
    for (let evento of dataEvents) {
        card += `<div class="card" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top p-2" alt="...">
    <div class="card-body">
    <h5> ${evento.name} </h5>
    <p class="card-text" id="textoParrafo"> ${evento.description} </p>
    <div id="boton1">
    <p> Price: $ ${evento.price} </p>
    <a href="./details.html?id=${evento._id}&nombre=${evento.name}" class="btn btn-primary" id="move">Details</a>"
    </div>
    </div>
</div>`
    }
    cardsConteiner.innerHTML = card;
}

//checks

const check = document.getElementById("checksPad");
const categFilt = [... new Set(dataEvents.map(categorie => categorie.category))];

function createCheck(categFilt, elemento) {
    let aux = "";
    categFilt.forEach(element => {
        aux += ` <div class="d-flex  gap-3">
        <div class="form-check-inline">
        <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
        <label class="form-check-label" for="${element}">
        ${element}
        </label>
        </div> `
    });
    elemento.innerHTML = aux;
}
createCheck(categFilt, check);

function filterChecks(evento) {
    let tiltCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map(check => check.value);
    if (tiltCheck.length === 0) {
        return evento;
    }
    return evento.filter((filterCheck) => tiltCheck.includes(filterCheck.category));
}


check.addEventListener("change", () => {
    let aux = filterChecks(dataEvents);
    cardsCreate(aux);
});

//buscador

const buscador = document.getElementById("formSearch");

function filterForSearch(search, dataEvents) {
    let filteredSearch = dataEvents.filter(buscadorInterno => buscadorInterno.name.toLowerCase().includes(search))
    if (filteredSearch.length === 0) {

    }
    return filteredSearch;
}

buscador.addEventListener('keyup', (e) => {
    e.preventDefault()
    let search = buscador.value.toLowerCase();
    let fnFiltered = filterForSearch(search, dataEvents);
    let filtCheckCard = filterChecks(fnFiltered);
    cardsCreate(filtCheckCard)
});
