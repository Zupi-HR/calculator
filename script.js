const tipka = document.querySelectorAll('.tipka');
let sadržajEkrana = document.querySelector('.sadržajEkrana');

let numbers = [];

let operator;

const mathOperations = {
    add: (...numbers) => numbers.reduce((acumulator, currentValue) => {
        return acumulator + currentValue;
    }),
    subtract: (...numbers) => numbers.reduce((acumulator, currentValue) => {
        return acumulator - currentValue;
    }),
    multiply: (...numbers) => numbers.reduce((acumulator, currentValue) => {
        return acumulator * currentValue;
    }),
    divide: (...numbers) => numbers.reduce((acumulator, currentValue) => {
        return acumulator / currentValue;
    })
};


function operate(operator, ...numbers) {
    if (operator === "+") return mathOperations.add(...numbers);
    else if (operator === "-") return mathOperations.subtract(...numbers);
    else if (operator === "*") return mathOperations.multiply(...numbers);
    else if (operator === "/") return mathOperations.divide(...numbers);
}

function getNumberFromDisplay() {
    // uzmi tekst s display, ukloni bilo šta osim brojeva i pretvori u number pa stavi u array
    const textContentDisplay = sadržajEkrana.textContent;
    const numericValue = textContentDisplay.match(/\d+(\.\d+)?/g).map(Number);
    console.log(numericValue);
   numbers = numericValue.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
   },0)
   console.log(numbers);
   
}

tipka.forEach(function (tipka) {
    tipka.addEventListener('click', function (e) {
        btnValue = e.target.dataset.value;
        populateDisplay(btnValue);
        if (e.target.dataset.value == "+") {
            operator = '+';
            getNumberFromDisplay();
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
            sadržajEkrana.textContent += numbers;
        }

    })
})

function populateDisplay(sadržaj) {
    sadržajEkrana.textContent += sadržaj;
}


