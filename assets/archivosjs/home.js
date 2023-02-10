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
    <a href="./assets/details.html?id=${evento._id}&nombre=${evento.name}" class="btn btn-primary" id="move">Details</a>"
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
















































































// const cardsContainer = document.getElementById("main-events")
// const infoCards = data.events
// const datos = infoCards.map(infoCard => infoCard.category
// )
// // createCards(InfoCards)
// //      function createCard (infoCards) {
// //     let card = "";
// //     for (let infoCard of infoCards) {
// //         card += `<div class="card" style="width: 15rem;">
// //     <div class="card-body">
// //     <img src="${infoCard.image}" alt="food-fest">
// //     <h5 class="card-title">${infoCard.name}</h5>
// //     <p class="card-text">${infoCard.description}</p>
// //     <h6 class="card-subtitle mb-2 text-muted">Price: $${infoCard.price}</h6>
// //     <a href="./assets/details.html" class="card-link">More details</a>
// //      </div>
// //      </div>`
// //     }
// //     cardsContainer.innerHTML = card
// // }


// //Buscador
// const formSearch = document.querySelector('#formSearch')
// const buttonSearch = document.querySelector('#buttonSearch')
// // const resultSearch = document.querySelector('#resultSearch')
// const resultSearch = document.querySelector('#main-events')

// const searchFilter = () => {
//     resultSearch.innerHTML = "";
//     let texto = formSearch.value.toLowerCase();
//     for (let infoCard of data.events) {
//         let name = infoCard.name.toLowerCase();
//         if (name.indexOf(texto) !== -1) {
//             resultSearch.innerHTML += `<div class="card" style="width: 15rem;">
//             <div class="card-body">
//                 <img src="${infoCard.image}" alt="food-fest">
//                 <h5 class="card-title">${infoCard.name}</h5>
//                 <p class="card-text">${infoCard.description}</p>
//                 <h6 class="card-subtitle mb-2 text-muted">Price: $${infoCard.price}</h6>
//                 <a href="./assets/details.html" class="card-link">More details</a>
//             </div>
//             </div>`
//         }
//     } if (resultSearch.innerHTML === "") {
//         resultSearch.innerHTML += `<li> Comand not found...</li>`
//     }
// }
// // buttonSearch.addEventListener('click', searchFilter)
// formSearch.addEventListener('keyup', searchFilter)
// searchFilter()

// //checks

// const checks = document.getElementById("checksPad")
// const filtCategories = [... new Set(infoCards.map(categorie => categorie.category))]
// console.log(filtCategories)

// function checksCreate(filtCategories, elemento) {
//     let aux = " "
//     filtCategories.forEach(element => {
//         aux += ` <div class="d-flex  gap-3">
//             <div class="form-check-inline">
//             <input class="form-check-input" type="checkbox" value="${element}" id="${element}">
//             <label class="form-check-label" for="${element}">
//             ${element}
//             </label>
//             </div> `
//     });
//     elemento.innerHTML = aux
// }
// checksCreate(filtCategories, checks)

// function filtroCheck(evento) {
//     let marcarCheck = [...document.querySelectorAll(),].map(check => checks)
// }









// const categoriesFilter = [... new Set(infoCards.map(cat => cat.category))];






























// buttonSearch.addEventListener("click", searchFilter)
// formSearch.addEventListener("keyup", searchFilter)
// function filterOfSearcher(buscar, infoCards) {
//     let f
// }

// formSearch.addEventListener('keyup', (e) => {
//     e.preventDefault()
//     let buscar = formSearch[0].value.toLowerCase();
//     let funcionFiltrado = filtradoDeBuscador(buscar, dataEventos);
//     let checkCardFiltro = filtroCheck(funcionFiltrado);
//     crearCards(checkCardFiltro)
// });

// const check = document.getElementById("checks");



// function createCheck(categoriesFilter, elemento) {
//     let aux = "";
//     categoriesFilter.forEach(element => {
//         aux += ` <div class="input-checks">
//         <input type="checkbox" id="${element}" value="${element}">Food Fair
//         </div>`
//     });
//     elemento.innerHTML = aux;
// }
// createCheck(categoriesFilter, check);

// function filCheck(evento) {
//     let marcarCheck = [...document.querySelectorAll("input[type='checkbox']:checked"),].map((check) => check.value);
//     if (marcarCheck.length === 0) {
//         return evento;
//     }
//     return evento.filter((filterCheck) => marcarCheck.includes(filterCheck.category));
// }
// check.addEventListener("change", () => {
//     let aux = filCheck(infoCards);
//     createCards(aux);
// });


