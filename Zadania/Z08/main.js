const sekundy = document.querySelector('#sekundy' );


const wynik = document.querySelector('#wynik' );
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    const date = new Date(null);
    date.setSeconds(sekundy);
    const wynik = date.toISOString().slice(11, 19);
    new wynik(sekundy * 1000).toISOString().slice(11, 19);


    wynik.innerHTML =
        `
        wynik = <b>${wynik}</b>
`
    
})