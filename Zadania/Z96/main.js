const liczba = document.querySelector('#liczba' );
const wynik = document.querySelector('#wynik' );
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    let dzien = parseInt(liczba.value);
    switch (dzien) {
        case 1: wynik.innerHTML = `${dzien} : styczeń <br>`; break;
        case 2: wynik.innerHTML = `${dzien} : luty <br>`; break;
        case 3: wynik.innerHTML = `${dzien} : marzec <br>`; break;
        case 4: wynik.innerHTML = `${dzien} : kwiecień <br>`; break;
        case 5: wynik.innerHTML = `${dzien} : maj <br>`; break;
        case 6: wynik.innerHTML = `${dzien} : czerwiec <br>`; break;
        case 7: wynik.innerHTML = `${dzien} : lipiec <br>`; break;
        case 8: wynik.innerHTML = `${dzien} : sierpień <br>`; break;
        case 9: wynik.innerHTML = `${dzien} : wrzesień <br>`; break;
        case 10: wynik.innerHTML = `${dzien} : październik <br>`; break;
        case 11: wynik.innerHTML = `${dzien} : listopad <br>`; break;
        case 12: wynik.innerHTML = `${dzien} : grudzień <br>`; break;

        default: wynik.innerHTML = `${dzien} : liczba nie należy do zakresu`;

    }

})