const ekran = document.querySelector('.ekran');
let sadržajEkrana = document.querySelector('.sadržajEkrana');
const tipke = document.querySelectorAll('.tipka');
let rezultat = document.querySelector('.rezultat');

let displayValue = '';

let firstNumber;
let secondNumber;
let sum;
let operator;


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'invalid';
    }
}



function populateDisplay(value) {
    sadržajEkrana.textContent += value.replace(/\D/g, '');

}

function getDisplayValue(value) {
    displayValue += value.replace(/\D/g, '');
    //console.log(displayValue);
}

tipke.forEach((tipka) => {
    tipka.addEventListener('click', function (e) {
        rezultat.textContent = '';
        populateDisplay(e.target.id);
        getDisplayValue(e.target.id);
        if (e.target.id == 'clr') {
            firstNumber = null;
            secondNumber = null;
            sadržajEkrana.textContent = '';
            rezultat.textContent = '';
            displayValue = '';
            sum = null;
            operator = null;

        } 
        
       else if (e.target.id == '+' ||
            e.target.id == '-' ||
            e.target.id == '*' ||
            e.target.id == '/') {
            if (!firstNumber) {
                firstNumber = +displayValue;
                console.log(firstNumber);
                sadržajEkrana.textContent = "";
                displayValue = '';
                operator = e.target.id;
                console.log(operator);
            } else {
                const lokalnioperator = e.target.id;
                console.log(lokalnioperator);
                secondNumber = +displayValue;
                console.log(secondNumber);
                sum = operate(operator, firstNumber, secondNumber);
                operator = lokalnioperator;
                console.log(operator);
                sadržajEkrana.textContent = sum;
                rezultat.textContent = `Rezultat je: ${sum}`;
                firstNumber = sum;

                sadržajEkrana.textContent = "";
                displayValue = '';
            }

        }

        if (e.target.id == '=') {
            secondNumber = +displayValue;
            sum = operate(operator, firstNumber, secondNumber);
            console.log(operator, firstNumber, secondNumber, sum);
            
            rezultat.textContent = `Rezultat je: ${sum}`;
            sadržajEkrana.textContent = '';
            
        }

       
    })
})



