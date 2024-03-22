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

        this.value = '';
    };

    append(value) {

        if(this.value == '' && value == '0') {

            return;
        } else if(
            this.value == '' && value == '+' || 
            this.value == '' && value == '-' || 
            this.value == '' && value == '*' ||
            this.value == '' && value == '/') {

            return;
        } else if(this.value == 'Infinity') {

            this.value = value;
            this.showScreen(`${this.value}`);
        } else {
            
            this.value += value;
            this.showScreen(`${this.value}`);
        };
        
    };

    calculate() {
        
        this.value = eval(this.value);
        this.value = this.value.toString();

        if(this.value == 'Infinity') {
            
            this.showScreen('SyntaxError');
        } else {

            this.showScreen(this.value);
        };
    };

    resetCalc() {

        this.value = '';
        this.showScreen(this.value);
    };

    del() {

        if(this.value == 'Infinity') {

            this.value = ''
            this.showScreen(this.value);
        } else {

            this.value = this.value.slice(0, -1);
            this.showScreen(this.value);
        };
    };

    showScreen(value) {

        if(!value || value.length < 1) {
            screen.innerText = 0;
            return
        };

        screen.innerText = value;
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
        personalCalc.append(e.value);
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

btnDecimal.addEventListener('click', () => {
    personalCalc.append(btnDecimal.value);
});

/* 
    1. el cero no debe ser un número que entre primero
    2. Diseñar un algoritmo para el botón borrar
    3. 

*/