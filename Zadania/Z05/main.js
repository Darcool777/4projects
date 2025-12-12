const liczba_a = document.querySelector('#liczba_a' );
const liczba_b = document.querySelector('#liczba_b' );

const wynik = document.querySelector('#wynik' );
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);

    let suma = a + b;
    let roznica = a - b;
    let iloczyn = a * b;
    let iloraz = Math.floor(a / b);
    let reszta = a%b;

    wynik.innerHTML =
        `
        a = <b>${a}</b><br>
        b = <b>${b}</b><br>
        suma liczb = <b>${suma.toFixed(2)}</b><br>
        różnica liczb = <b>${roznica.toFixed(2)}</b><br>
        iloczyn liczb = <b>${iloczyn.toFixed(2)}</b><br>
        iloraz liczb = <b>${iloraz.toFixed(0)}</b><br>
        reszta z dzielenia = <b>${reszta.toFixed(0)}</b><br></br>

`


})