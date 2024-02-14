import { toggleThemeColors } from "./theme-selector.js";

//Boton selector de temas
const btnSwitch = document.querySelectorAll('.theme-selector__number');
btnSwitch.forEach(toggleThemeColors);

const screen = document.querySelector('#screen');

//Botones calculadora
const numberBtnsList = document.querySelectorAll('.number-btns');
const operatorButtons = document.querySelectorAll('.operator-btns');

const btnDecimal = document.querySelector('#btn-decimal');

const btnDel = document.querySelector('#btn-del');
const btnReset = document.querySelector('#btn-reset');
const btnEqual = document.querySelector('#btn-equal');


class MyCalculator {
    
    constructor() {
        this.prev = '';
        this.operator = '';
        this.current = '';
    };

    append(number) {
        this.current += number;
        this.showScreen(`${this.prev} ${this.operator} ${this.current}`);
    };

    operation(operand) {
        this.operator = operand;
        this.prev = this.current;
        this.current = '';

        this.showScreen(`${this.prev} ${this.operator}`);
    };
    
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
                break;
        }

        this.operator = '';
        this.showScreen(this.current);
    };

    showScreen(value) {

        if(!value || value.length < 1) {
            screen.innerText = 0;
            return
        };

        screen.innerText = value;
    };

    resetCalc() {
        this.prev = '';
        this.operator = '';
        this.current = '';

        this.showScreen(this.current);
    };

    del() {
        
        this.current = this.current.slice(0, -1);
        this.showScreen(`${this.prev} ${this.operator} ${this.current}`);
        
    };
}

const personalCalc = new MyCalculator();

numberBtnsList.forEach((e) => {
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

btnReset.addEventListener('click', () => {
    personalCalc.resetCalc();
})

btnDel.addEventListener('click', () => {
    personalCalc.del();
})