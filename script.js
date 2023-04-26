const sadržajEkrana = document.querySelector('.sadržajEkrana');
const tipke = document.querySelectorAll('.tipka');

let displayValue = '';

let firstNumber;
let secondNumber;
let sum = 0;
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
        populateDisplay(e.target.id);
        getDisplayValue(e.target.id);
        if (e.target.id == '+' ||
            e.target.id == '-' ||
            e.target.id == '*' ||
            e.target.id == '/') {
            operator = e.target.id
            if (!firstNumber) {
                firstNumber = +displayValue;
                console.log(firstNumber);
                sadržajEkrana.textContent = "";
                displayValue = '';
            } else {
                secondNumber = +displayValue;
                console.log(secondNumber);
                sadržajEkrana.textContent = "";
                displayValue = '';
            }
            if (firstNumber && secondNumber) {
                sum = firstNumber + secondNumber;
                sadržajEkrana.textContent = sum;
            }
            
           // console.log(sum);
        }
        

    })
})





