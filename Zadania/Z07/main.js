const tempInput = document.querySelector('#temp');
const wynikDiv = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {

    const celsius = parseFloat(tempInput.value);

    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;


    wynikDiv.innerHTML = `
        Temperatura w Kelwinach: <b>${kelvin.toFixed(3)} K</b><br>
        Temperatura w Fahrenheitach: <b>${fahrenheit.toFixed(3)} &deg;F</b>
    `

    ;
});