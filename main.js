const buttonSwitch = document.querySelector('#button-theme');
const buttonTheme = document.querySelectorAll('.theme-selector__number');

let currentTheme = 'theme-selector__button--deep-blue';

buttonTheme.forEach((e) => {
    
    e.addEventListener('click', () => {
       
        buttonSwitch.classList.remove(currentTheme);
       
        let themeClass = '';
        
        if(e.id === 'theme-1') {
            themeClass = 'theme-selector__button--deep-blue';
            currentTheme = themeClass;
        } else if(e.id === 'theme-2') {
            themeClass = 'theme-selector__button--light';
            currentTheme = themeClass;
        } else if(e.id === 'theme-3') {
            themeClass = 'theme-selector__button--dark-purple';
            currentTheme = themeClass;
        };
        
        buttonSwitch.classList.add(themeClass);
        
    })  
})
