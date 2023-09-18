//COSA MOSTRARE CARRELLO VUOTO
let cartEmpty = document.querySelector(".cart-empty");
let cartFull = null;

//COSA MOSTRARE CARRELLO PIENO
function createCartDetail() {
  if (cartFull == null) {
    cartEmpty.remove();

    cartContent();
  } else {
    cartFull.remove();
    cartContent();
  }
}

function showCartContent() {
  cartDetails.classList.toggle("active");
}

function addToCart() {
  cart = [];
  cart.push(counter);
  console.log(cart);
}

let notify = null;
let notifyText = null;

function addIconNotify() {
  if (notify == null) {
    notify = document.createElement("div");
    notify.classList.add("cart-quantity");
    cartIcon.appendChild(notify);

    notifyText = document.createElement("p");
    notify.appendChild(notifyText);
    notifyText.textContent = counter;
  } else {
    notifyText.textContent = "";
    notifyText.textContent = counter;
  }
}

function cartContent() {
  cartFull = document.createElement("div");
  cartDetails.appendChild(cartFull);
  cartFull.classList.add("cart-full");

  let product = document.createElement("div");
  cartFull.appendChild(product);
  product.classList.add("product");

  let imgProduct = document.createElement("img");
  product.appendChild(imgProduct);
  imgProduct.src = "images/Rectangle.png";
  imgProduct.classList.add("img-product");

  let title = document.createElement("div");
  product.appendChild(title);
  title.classList.add("title-and-price");

  let titleProduct = document.createElement("p");
  title.appendChild(titleProduct);
  titleProduct.classList.add("title-product");
  titleProduct.textContent = "Fall Limited Edition Sneakers";

  let singlePrice = document.createElement("p");
  title.appendChild(singlePrice);
  singlePrice.classList.add("single-price");
  singlePrice.textContent = `$125 x ${counter}`;

  let totalPrice = document.createElement("p");
  title.appendChild(totalPrice);
  totalPrice.classList.add("total-price");
  totalPrice.textContent = `$${finalPrice * counter}`;

  let trash = document.createElement("img");
  product.appendChild(trash);
  trash.classList.add("trash");
  trash.src = "images/Mask 2.png";

  let addToCart = document.createElement("div");
  cartFull.appendChild(addToCart);
  addToCart.classList.add("add-to-cart");

  let addToCartText = document.createElement("p");
  addToCart.appendChild(addToCartText);
  addToCartText.textContent = "Checkout";

  //ELIMINA ELEMENTI DAL CARRELLO
  trash.addEventListener("click", () => {
    cart = [];
    console.log(cart);
    cartFull.remove();
    cartEmpty = document.createElement("p");
    cartDetails.appendChild(cartEmpty);
    cartEmpty.classList.add("cart-empty");
    cartEmpty.textContent = "Your cart is empty.";
    notifyText.textContent = 0;
  });
}

//funzione che mostra la lightbox
function showLightBox() {
  lightbox.style.display = "block";
}

function showCurrentImage() {
  let currentImage = immagini[imageIndex];
  imgBigLightbox.src = currentImage;
}

function leftImage() {
  if (imageIndex > 0) {
    imageIndex--;
  } else {
    imageIndex = immagini.length - 1; // visualizza ultima immagine
  }
  showCurrentImage();
}

function rightImage() {
  if (imageIndex < immagini.length - 1) {
    imageIndex++;
  } else {
    imageIndex = 0;
  }
  showCurrentImage();
}

function detectScreenSize() {
  const screenSize =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenSize <= 768) {
    imgBig.src = "images/Rectangle (1).png";
    imgBig.addEventListener('click', ()=>{
      lightbox.style.display = 'none'
    })
  }else{
    imgBig.addEventListener('click', ()=>{
      lightbox.style.display = 'flex'
    })
  }
}
