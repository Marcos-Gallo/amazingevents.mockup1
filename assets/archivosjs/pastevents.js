const contenedorCartas = document.getElementById("main-events")
let infocards = data.events;

for (let infocard of infocards) {
    if (infocard.date > data.currentDate) {
        contenedorCartas.innerHTML += `<div class="card" style="width: 15rem;">
<div class="card-body">
    <img src="${infocard.image}" alt="food-fest">
    <h5 class="card-title">${infocard.name}</h5>
    <p class="card-text">${infocard.description}</p>
    <h6 class="card-subtitle mb-2 text-muted">Price: $${infocard.price}</h6>
    <a href="./assets/details.html" class="card-link">More details</a>
</div>
</div>`}
}