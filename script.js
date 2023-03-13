const tipka = document.querySelectorAll('.tipka');
let sadržajEkrana = document.querySelector('.sadržajEkrana');

let firstandSecondNum = [];
let operator;

const mathOperations = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
};


function operate(operator, num1, num2) {
    if (operator === "+") return mathOperations.add(num1, num2);
    else if (operator === "-") return mathOperations.subtract(num1, num2);
    else if (operator === "*") return mathOperations.multiply(num1, num2);
    else if (operator === "/") return mathOperations.divide(num1, num2);
}

function getNumberFromDisplay(pozicija) {
    // uzmi tekst s display, ukloni bilo šta osim brojeva i pretvori u number pa stavi u array
    const textContentDisplay = sadržajEkrana.textContent;
    const numericValue = textContentDisplay.match(/\d+(\.\d+)?/g).map(Number);
    // pretvoreni broj koji je u array stavi u postojeci array s pozicije 
    firstandSecondNum.push(numericValue[pozicija]);
}

tipka.forEach(function (tipka) {
    tipka.addEventListener('click', function (e) {
        btnValue = e.target.dataset.value;
        populateDisplay(btnValue);
        if (e.target.dataset.value == "+") {
            operator = '+';
            getNumberFromDisplay(0);
        }

        else if (e.target.dataset.value == "-") {
            operator = '-';
            getNumberFromDisplay(0);

        }

        else if (e.target.dataset.value == "*") {
            operator = '*';
            getNumberFromDisplay(0);
        }

        else if (e.target.dataset.value == '/') {
            operator = '/';
            getNumberFromDisplay(0);
        }

        if (e.target.dataset.value == "=") {
            getNumberFromDisplay(1);
            const result = operate(operator, firstandSecondNum[0], firstandSecondNum[1]);
            populateDisplay(result);
        }

    })
})

function populateDisplay(sadržaj) {
    sadržajEkrana.textContent += sadržaj;
}



