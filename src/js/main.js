import { themeSelector } from "./theme-selector.js";
import { addNumber } from "./calculator-screen.js";
import { deletNumber } from "./calculator-screen.js";
import { clear } from "./calculator-screen.js";

//Boton selector de temas
const buttonTheme = document.querySelectorAll('.theme-selector__number');
const screen = document.querySelector('#screen');
buttonTheme.forEach(themeSelector);


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
const btnEqual = document. querySelector('btn-equal');

const arrayButtons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0, btnPlus, btnMinus, btnMultiply, btnDivide, btnDecimal];
const operatorButtons = [btnPlus, btnMinus, btnMultiply, btnDivide, btnDecimal];


//Funciones de pantalla
btnDel.addEventListener('click', deletNumber);
btnReset.addEventListener('click', clear);


arrayButtons.forEach((e) => {
    e.addEventListener('click', ()=> {
        addNumber(e.value);
    });
});

function calculatora(...numbers) {
    
    console.log(numbers.reduce((n, cN) => n + cN, 0))    
};

calculatora(1, 3 ,2 ,4 ,5 ,2)
/*
    1. Debo restringir a un maximo de números, que no supere el tamaño de la pantalla.
        Podria hacerlo con un condicional if que detecte el tamaño de la pantalla.
*/