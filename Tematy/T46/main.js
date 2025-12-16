const div = document.querySelector("#data");
let dataBylaPokazana = false;

function pokazDate() {
    if (!dataBylaPokazana) {
        const dzisiaj = new Date();
        div.innerHTML = dzisiaj.toLocaleString();
        dataBylaPokazana = true;
    } else {
        div.innerHTML = "Data już była ;)";
    }
}

function wyczyscPole() {
    div.innerHTML = '';
}

div.addEventListener("mouseenter", pokazDate);
div.addEventListener("mouseleave", wyczyscPole);
