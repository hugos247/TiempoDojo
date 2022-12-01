function removeCookies(element) {
    let cookies = document.querySelector(".cookies");
    cookies.remove();
}

function celsiusToFahrenheit(tempCelsius) {
    let fahrenheitTemp = ( 9 / 5) * tempCelsius + 32;
    let roundedFTemp = Math.round(fahrenheitTemp);
    return roundedFTemp;
}

function fahrenheitToCelsius (tempFahrenheit) {
    let celsiusTemp = (5 * (tempFahrenheit - 32)) / 9;
    let roundedCTemp = Math.round(celsiusTemp);
    return roundedCTemp;
}   



/* Using i<9 because there are 2 "pronostications" on every day, in total 8 */
//for (let i = 0; i < 9; i++) {

    let selectElement = document.querySelector("#temp-control");
    selectElement.addEventListener('change', (event) => {
        for (let i = 1; i < 9; i++) {

            var tempsId = [];
            var tempText = document.querySelector("#temp" + i);
            tempsId.push(tempText);

            var tempsValue = [];
            var tempIntVal = parseInt(tempText.innerText);
            tempsValue.push(tempIntVal);

            for (let x = 0; x < tempsId.length ; x++){
                if (selectElement.value == "fahrenheit") {
                    tempText.textContent = celsiusToFahrenheit(tempsValue[x]);

            }   else {
                tempText.textContent = fahrenheitToCelsius(tempsValue[x]);
            }
        }
    }
});




/* Bad solution "trying" to use Jquery, say no to spaghetti code! */

/*selectElement.addEventListener('change', (event) => {
    if (selectElement.value == "fahrenheit") {
        var resultadoMaximaUno = document.querySelector('.max-temp-1');
        var resultadoMinimaUno = document.querySelector('.min-temp-1');
        resultadoMaximaUno.textContent = "93.2°";
        resultadoMinimaUno.textContent = "73.4°";

        var resultadoMaximaDos = document.querySelector('.max-temp-2');
        var resultadoMinimaDos = document.querySelector('.min-temp-2');
        resultadoMaximaDos.textContent = "89.6°";
        resultadoMinimaDos.textContent = "75.2°";

        var resultadoMaximaTres = document.querySelector('.max-temp-3');
        var resultadoMinimaTres = document.querySelector('.min-temp-3');
        resultadoMaximaTres.textContent = "93.2°";
        resultadoMinimaTres.textContent = "73.4°";

        var resultadoMaximaCuatro = document.querySelector('.max-temp-4');
        var resultadoMinimaCuatro = document.querySelector('.min-temp-4');
        resultadoMaximaCuatro.textContent = "93.2°";
        resultadoMinimaCuatro.textContent = "75.2°";
    }
    else if (selectElement.value == "celsius") {
            var resultadoMaximaUno = document.querySelector('.max-temp-1');
            var resultadoMinimaUno = document.querySelector('.min-temp-1');
            resultadoMaximaUno.textContent = "34°";
            resultadoMinimaUno.textContent = "23°";
    
            var resultadoMaximaDos = document.querySelector('.max-temp-2');
            var resultadoMinimaDos = document.querySelector('.min-temp-2');
            resultadoMaximaDos.textContent = "32°";
            resultadoMinimaDos.textContent = "24°";
    
            var resultadoMaximaTres = document.querySelector('.max-temp-3');
            var resultadoMinimaTres = document.querySelector('.min-temp-3');
            resultadoMaximaTres.textContent = "34°";
            resultadoMinimaTres.textContent = "23°";
    
            var resultadoMaximaCuatro = document.querySelector('.max-temp-4');
            var resultadoMinimaCuatro = document.querySelector('.min-temp-4');
            resultadoMaximaCuatro.textContent = "34°";
            resultadoMinimaCuatro.textContent = "24°";
        
    }
});
*/