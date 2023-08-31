let ShowHidePassword = document.querySelector('.s-h')
let inputPassword = document.querySelector('input')
let iconaUppercase = document.querySelector('.icon-uppercase')
let iconaLowercase = document.querySelector('.icon-lowercase')
let iconaNUmber = document.querySelector('.icon-number')
let iconaLenght = document.querySelector('.icon-lenght')
let iconaSymbol = document.querySelector('.icon-symbol')
let btnGeneraPsw = document.getElementById('genera-psw')


let pLenght = document.querySelector('.p-lenght')
let pUpper = document.querySelector('.p-upper')
let pLower = document.querySelector('.p-lower')
let pNumber = document.querySelector('.p-number')
let pSymbol = document.querySelector('.p-symbol')

//mostra nascondi passowrd
ShowHidePassword.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text'
        ShowHidePassword.textContent = 'nascondi'
    } else {
        inputPassword.type = 'password'
        ShowHidePassword.textContent = 'mostra'
    }
});

//controlla gli 8 caratteri di lunghezza minimi richiesti
inputPassword.addEventListener('input', controllaLunghezza)
inputPassword.addEventListener('input', controllaNumero)
inputPassword.addEventListener('input', controllaLowercase)
inputPassword.addEventListener('input', controllaUppercase)
inputPassword.addEventListener('input', controllaCarattereSpeciale)

//controlla se contiene almeno 8 caratteri
function controllaLunghezza() {
    if (inputPassword.value.length >= 8) {
        iconaLenght.classList.add('icon-contains')
        pLenght.classList.add('p-contains')
    } else {
        iconaLenght.classList.remove('icon-contains')
        pLenght.classList.remove('p-contains')
    }
};

//controlla se contiene almeno un numero
function controllaNumero() {
    if (/[0-9]/.test(inputPassword.value)) {
        iconaNUmber.classList.add('icon-contains')
        pNumber.classList.add('p-contains')
    } else {
        iconaNUmber.classList.remove('icon-contains')
        pNumber.classList.remove('p-contains')
    }
};



//controlla se contiene almeno una lettera minuscola
function controllaLowercase() {
    if (/[a-z]/.test(inputPassword.value)) {
        iconaLowercase.classList.add('icon-contains')
        pLower.classList.add('p-contains')
    } else {
        iconaLowercase.classList.remove('icon-contains')
        pLower.classList.remove('p-contains')
    }
};


//controlla se contiene almeno una lettera maiuscola
function controllaUppercase() {

    if (/[A-Z]/.test(inputPassword.value)) {
        iconaUppercase.classList.add('icon-contains')
        pUpper.classList.add('p-contains')
    } else {
        iconaUppercase.classList.remove('icon-contains')
        pUpper.classList.remove('p-contains')
    }
};

//controlla se ha caratteri speciali
function controllaCarattereSpeciale() {
    if (/[^\w\s]/.test(inputPassword.value)) {
        iconaSymbol.classList.add('icon-contains')
        pSymbol.classList.add('p-contains')
    } else {
        iconaSymbol.classList.remove('icon-contains')
        pSymbol.classList.remove('p-contains')
    }
};



btnGeneraPsw.addEventListener('click', generaPassword)

function generaPassword() {
    let lunghezzaPassword = 15;
    let passowrdGenerata = '';
    const caratteri = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

    for (let i = 0; i < lunghezzaPassword; i++) {
        passowrdGenerata += caratteri.charAt(
            Math.floor(Math.random() * caratteri.length))
    }

    inputPassword.value = passowrdGenerata
    controllaLunghezza();
    controllaNumero();
    controllaLowercase();
    controllaUppercase();
    controllaCarattereSpeciale();
};


let string = 'ciao'

  console.log(string.charAt(3))







