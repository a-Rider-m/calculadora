const screen = document.querySelector('#screen');
let valorActual = '';

export function addNumberScreen(valorConcat) {

    if(valorActual.length < 1 || valorActual === '0') {

        valorActual = valorConcat;

    } else if(valorActual.length > 9) {

        valorActual = 'E9';

    } else {

        valorActual += valorConcat;

    };

    screen.innerText = valorActual;
};

export function deletNumberScreen() {

    if(valorActual.length < 2 || valorActual === 0){

        valorActual = '0';

    } else {

        valorActual = valorActual.slice(0, -1);

    };

    screen.innerText = valorActual;
};

export function clearScreen() {

    valorActual = '0';
    screen.innerText = valorActual;

};


/*
    1. Debo restringir a un maximo de números, que no supere el tamaño de la pantalla.
        Podria hacerlo con un condicional if que detecte el tamaño de la pantalla.
*/