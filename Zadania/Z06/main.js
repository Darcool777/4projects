const liczba_a = document.querySelector('#liczba_a' );
const liczba_b = document.querySelector('#liczba_b' );

const wynik = document.querySelector('#wynik' );
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);

    let p = (a + b + c) * 0.5
    let wynikS = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    wynik.innerHTML =
        `
        a = <b>${a}</b><br>
        b = <b>${b}</b><br>
        c = <b>${c}</b><br>
        wynik = <b>${wynikS}</b>
`
    
})