const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.result');
const caratteriSpeciali = ['+', '-', '/', '*', '%'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let numero = button.textContent;

        // Verifica se il display è vuoto
        if (display.textContent === '' && isOperatoreMatematico(numero)) {
            return; // non esegue nulla
        }

        display.textContent = display.textContent + numero;

        if (numero === '=') {
            let displayExpression = display.textContent
            let risultato = eval(displayExpression.slice(0, -1))
            display.textContent = risultato

        } else if (numero === 'C') {
            display.textContent = '';

        } else if (numero === 'DEL') {
            let displayExpression = display.textContent
            let ultimoNumeroRimosso = displayExpression.slice(0, -4)
            display.textContent = ultimoNumeroRimosso
        }
    })
});

// Verifica se il carattere passato è un operatore matematico
function isOperatoreMatematico(carattere) {
   return caratteriSpeciali.includes(carattere);
}



