let inputEmail = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector(".form");
let thankYou = document.querySelector(".thank-you-card");
let card = document.querySelector('.card');

btn.addEventListener("click", checkEmail);

function checkEmail(){
    if(inputEmail.value.includes('@')){
        thankYou.style.display = 'flex';
        card.style.display = 'none'
    }else{
        inputEmail.classList.add('wrong-email')
        let wrongText = document.createElement('p')
        wrongText.classList.add('wrong-text')
        wrongText.textContent = 'Valid email required'
        form.appendChild(wrongText)

        inputEmail.addEventListener('click', ()=>{
            inputEmail.value = ''
            inputEmail.classList.remove('wrong-email')
            wrongText.remove();
        })
    }   
}



