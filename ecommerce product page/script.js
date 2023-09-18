let contenitoriImg = document.querySelectorAll(".small-img");
let contenitoriImgLightbox = document.querySelectorAll(".img-product img");
let imgBig = document.querySelector(".big-img");
let imgBigLightbox = document.querySelector(".img-container img");
let cartIcon = document.querySelector(".cart");
let cartDetails = document.querySelector(".container-cart");
let removeBtn = document.querySelector(".remove");
let addBtn = document.querySelector(".add");
let quantity = document.querySelector(".quantity");
let addToCartBtn = document.querySelector(".add-to-cart");
let finalPrice = document.querySelector(".final-price").textContent;
let closeLightbox = document.querySelector(".close-lightbox");
let lightbox = document.querySelector(".lightbox");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let hambMenuIcon = document.querySelector(".hamburger-menu");
let closeMenuIcon = document.querySelector(".close");
let hambMenuHide = document.querySelector(".hamburger-menu--hide");
let darkBody = document.querySelector(".dark-body");
let cart = [];

//MOSTRA MENU SU MOBILE
hambMenuIcon.addEventListener("click", () => {
  hambMenuHide.classList.add("hamburger-menu--show");
  darkBody.style.display = "block";
});

//CHIUDI MENU MOBILE
closeMenuIcon.addEventListener("click", () => {
  hambMenuHide.classList.remove("hamburger-menu--show");
  darkBody.style.display = "none";
});

//SOSTITUZIONE IMMAGINE PER SMARPHONE 768PX
detectScreenSize();

let immagini = [
  "images/Rectangle.png",
  "images/Rectangle2.png",
  "images/Rectangle3.png",
  "images/Rectangle4.png",
];

let imageIndex = 0;

//DISTRIBUZIONE DELLE MINIATURE
for (let i = 0; i < immagini.length; i++) {
  contenitoriImg[i].src = immagini[i];
}

//VISUALIZZAZIONE IMMAGINE INGRANDITA AL PASSAGGIO DEL MOUSE SULLE MINIATURE
contenitoriImg.forEach(function (miniatura) {
  miniatura.addEventListener("mouseover", () => {
    imgBig.src = miniatura.src;
  });
});

//VISUALIZZAZIONE IMMAGINE INGRANDITA AL PASSAGGIO DEL MOUSE SULLE MINIATURE
contenitoriImg.forEach(function (miniatura) {
  miniatura.addEventListener("mouseover", () => {
    imgBigLightbox.src = miniatura.src;
  });
});

//CONTATORE QUANTITA
let counter = 0;
addBtn.addEventListener("click", () => {
  counter++;
  quantity.textContent = counter;
});

removeBtn.addEventListener("click", () => {
  counter--;
  quantity.textContent = counter;
});

//GESTIONE DEL CARRELLO
cartIcon.addEventListener("click", function () {
  showCartContent();
});

//GESTIONE AGGIUNTA AL CARRELLO E NOTIFICA ELEMENTO AGGIUNTO
addToCartBtn.addEventListener("click", function () {
  addToCart();
  addIconNotify();
  createCartDetail();
});

imgBig.addEventListener("click", showLightBox);

//VISUALIZZAZIONE IMMAGINE INGRANDITA AL PASSAGGIO DEL MOUSE SULLE MINIATURE DELLA LIGHTBOX
contenitoriImgLightbox.forEach(function (miniatura) {
  miniatura.addEventListener("click", () => {
    imgBigLightbox.src = miniatura.src;
  });
});

//CHIUDI LIGHTBOX
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

//APRI LIGHTBOX
imgBig.addEventListener("click", () => {
  lightbox.style.display = "flex";
});

//APRI LIGHTBOX CON CLICK SU MINIATURA
contenitoriImg.forEach((miniatura) => {
  miniatura.addEventListener("click", () => {
    lightbox.style.display = "flex";
  });
});

//IMMAGINE DA MOSTRARE NELLA LIGHTBOX
imgBig.addEventListener("click", () => {
  imgBigLightbox.src = imgBig.src;
});

//VISUALIZZA IMMAGINE CORRENTE
leftArrow.addEventListener("click", leftImage);
rightArrow.addEventListener("click", rightImage);

//SELEZIONA L 'IMMAGINE IN BASE ALLA DIMENSIONE DELLO SCHERMO
detectScreenSize();

// RILEVA RIDIMENSIONAMENTO SCHERMO
window.addEventListener("resize", detectScreenSize);

//SCORRIMENTO IMMAGINI SU SMARTPHONE
let leftArrowMobile = document.querySelector(".left-part .left-arrow");
let rightArrowMobile = document.querySelector(".left-part .right-arrow");

rightArrowMobile.addEventListener("click", () => {
  if (imageIndex >= immagini.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  imgBig.src = immagini[imageIndex];
});

leftArrowMobile.addEventListener("click", () => {
  if(imageIndex <= 0){
    imageIndex = immagini.length -1
  }else{
    imageIndex--;
  }
 imgBig.src = immagini[imageIndex];
});

//RIMOZIONE FRECCE PER SCORRIMENTO ALL'APERTURA DEL CARRELLO
cartIcon.addEventListener('click', ()=>{
  leftArrowMobile.classList.toggle('hide-arrow')
  rightArrowMobile.classList.toggle('hide-arrow')
})
