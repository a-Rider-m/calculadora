const screen = document.querySelector('#screen');
let valorActual = '';

export function addNumber(valorConcat) {

    if(valorActual.length < 1 || valorActual === '0') {
        valorActual = valorConcat;
    } else if(valorActual.length > 9) {
        valorActual = 'E9';
    } else {
        valorActual += valorConcat;
    };

    screen.innerText = valorActual;
};

export function deletNumber() {

    if(valorActual.length < 2 || valorActual === 0){
        valorActual = '0';
    } else {
        valorActual = valorActual.slice(0, -1);
    };

    screen.innerText = valorActual;
};

export function clear() {
    valorActual = '0';
    screen.innerText = valorActual;
};