//Elementos
const body = document.querySelector('#body');
const calculatorTop = document.querySelector('#calculator-top');
const buttonSwitch = document.querySelector('#button-theme');
const themeSelectorNumbers = document.querySelectorAll('.theme-selector__number');
const switchBackground = document.querySelector('#switch');
const screenContainer = document.querySelector('#screen-container');
const keypad = document.querySelector('#keypad');
const keypadButtons = document.querySelectorAll('.keypad-container__buttons');
const keypadButtonsDelRes = document.querySelectorAll('.buttons-del-res');
const keypadButtonEqual = document.querySelector('#btn-equal');
const attribution = document.querySelector('#attribution')

let currentTheme = '--deep-blue';

export function themeSelector(e) {
    e.addEventListener('click', () => {
        
        body.classList.remove(`body${currentTheme}`);
        calculatorTop.classList.remove(`calculator-container__top${currentTheme}`);
        switchBackground.classList.remove(`theme-selector__switch${currentTheme}`);

        themeSelectorNumbers.forEach((e) => {
            e.classList.remove(`theme-selector__number${currentTheme}`);
        });

        buttonSwitch.classList.remove(`theme-selector__button${currentTheme}`);
        screenContainer.classList.remove(`calculator-container__screen${currentTheme}`);
        keypad.classList.remove(`calculator-container__keypad${currentTheme}`);

        keypadButtons.forEach((e) => {
            e.classList.remove(`keypad-container__buttons${currentTheme}`);
        });
        keypadButtonsDelRes.forEach((e) => {
            e.classList.remove(`buttons-del-res${currentTheme}`);
        });

        keypadButtonEqual.classList.remove(`button--equal${currentTheme}`);
        attribution.classList.remove(`attribution${currentTheme}`);
       
        let themeClass = '';
        
        if(e.id === 'theme-1') {
            themeClass = '--deep-blue';
            currentTheme = themeClass;
        } else if(e.id === 'theme-2') {
            themeClass = '--light';
            currentTheme = themeClass;
        } else if(e.id === 'theme-3') {
            themeClass = '--dark-purple';
            currentTheme = themeClass;
        };
        
        
        body.classList.add(`body${themeClass}`);
        calculatorTop.classList.add(`calculator-container__top${themeClass}`);
        switchBackground.classList.add(`theme-selector__switch${themeClass}`);

        themeSelectorNumbers.forEach((e) => {
            e.classList.add(`theme-selector__number${themeClass}`);
        });

        buttonSwitch.classList.add(`theme-selector__button${themeClass}`);
        screenContainer.classList.add(`calculator-container__screen${themeClass}`);
        keypad.classList.add(`calculator-container__keypad${themeClass}`);

        keypadButtons.forEach((e) => {
            e.classList.add(`keypad-container__buttons${themeClass}`);
        });
        keypadButtonsDelRes.forEach((e) => {
            e.classList.add(`buttons-del-res${themeClass}`);
        });

        keypadButtonEqual.classList.add(`button--equal${themeClass}`);
        attribution.classList.add(`attribution${themeClass}`);
    }); 
}