const liczba_a = document.querySelector("#liczba_a");
const liczba_b = document.querySelector("#liczba_b");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener('click', function () {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        wynik.innerHTML = "<b>Podane wartości nie są liczbami całkowitymi.</b>";
        return;
    }

    if (b === 0) {
        wynik.innerHTML = "<b>Nie można dzielić przez 0!</b>";
        return;
    }

    let wynikDzielenia = a / b;

    wynik.innerHTML = `
        a = <b>${a}</b><br>
        b = <b>${b}</b><br><br>
        Wynik dzielenia: <b>${a} / ${b} = ${wynikDzielenia}</b>
    `;
});