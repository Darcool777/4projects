const div = document.querySelector("#data");
let pokazanaData = true;

function pokazDate() {
    if (pokazanaData) {
        const dzisiaj = new Date();
        div.innerHTML = dzisiaj.toLocaleString();
        pokazanaData = false;
    } else {
        div.innerHTML = "Data już była ;3";
    }
}

function wyczyscPole() {
    div.innerHTML = '';
}

div.addEventListener("mouseover", pokazDate);
div.addEventListener("mouseleave", wyczyscPole);
