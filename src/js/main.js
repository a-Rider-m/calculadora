import { toggleThemeColors } from "./theme-selector.js";

//Boton selector de temas
const btnSwitch = document.querySelectorAll('.theme-selector__number');
btnSwitch.forEach(toggleThemeColors);

const screen = document.querySelector('#screen');

//Botones calculadora
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');
const btn8 = document.querySelector('#btn-8');
const btn9 = document.querySelector('#btn-9');
const btn0 = document.querySelector('#btn-0');

const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');
const btnDecimal = document.querySelector('#btn-decimal');

const btnDel = document.querySelector('#btn-del');
const btnReset = document.querySelector('#btn-reset');
const btnEqual = document.querySelector('#btn-equal');

const operatorButtons = [
    btnPlus, 
    btnMinus, 
    btnMultiply, 
    btnDivide
];

const btnNumbersList = [
    btn1, 
    btn2, 
    btn3, 
    btn4, 
    btn5, 
    btn6, 
    btn7, 
    btn8, 
    btn9, 
    btn0, 
]

const buttonsList = [ 
    ...btnNumbersList,
    ...operatorButtons
];

class calculator {
    
    constructor() {
        this.prev = '';
        this.operator = '';
        this.current = '';
    }

    append(number) {
        this.current += number;
        this.showScreen(`${this.prev} ${this.operator} ${this.current}`);
    }

    operation(operand) {
        this.operator = operand;
        this.prev = this.current;
        this.current = '';

        this.showScreen(`${this.prev} ${this.operator}`);
    }
    
    calculate() {

        const prev = Number(this.prev);
        const current = Number(this.current);

        if(this.prev === '' && this.current === '') {
            return
        };

        switch(this.operator) {
            case '+':
                this.current = prev + current;
                break;
            case '-':
                this.current = prev - current;
                break;
            case 'x':
                this.current = prev * current;
                break;
            case '/':
                this.current = prev / current;
        }


        this.showScreen(this.current);
    }

    showScreen(value) {
        screen.innerText = value;
    }
}

const personalCalc = new calculator();

btnNumbersList.forEach((e) => {
    e.addEventListener('click', () => {
        personalCalc.append(e.value);
    });
});

operatorButtons.forEach((e) => {
    e.addEventListener('click', () => {
        personalCalc.operation(e.value);
    });
});

btnEqual.addEventListener('click', () => {
    personalCalc.calculate();
});