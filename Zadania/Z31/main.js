function obliczPole() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const x3 = parseFloat(document.getElementById('x3').value);
    const y3 = parseFloat(document.getElementById('y3').value);

    const resultDiv = document.getElementById('wynik');

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
        resultDiv.innerHTML = '<strong>Błąd:</strong> Wszystkie współrzędne muszą być liczbami.';
        resultDiv.className = 'error';
        return;
    }

    const pole = 0.5 * Math.abs(
        x1 * (y2 - y3) +
        x2 * (y3 - y1) +
        x3 * (y1 - y2)
    );

    if (pole === 0) {
        resultDiv.innerHTML = '<strong>Uwaga:</strong>Podane wartości nie są prawidłowe!';
        resultDiv.className = 'error';
    } else {
        resultDiv.innerHTML = `<strong>Pole trójkąta wynosi:</strong> ${pole.toFixed(2)}`;
        resultDiv.className = 'success';
    }
}