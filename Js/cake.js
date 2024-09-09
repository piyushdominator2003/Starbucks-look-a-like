let icon = document.querySelector(".icon");
let header = document.querySelector(".header");

icon.addEventListener("click",() => {
    header.classList.toggle("active");
    // alert("kyu??")
});

let products = document.getElementsByClassName("content1")

let cartArray = [];

let cartSection = document.querySelector(".btn");
let cartClose = document.getElementById("cart-close")


cartSection.addEventListener("click", () => {
  header.classList.toggle("cart-op");
})

cartClose.addEventListener("click", () => {
  header.classList.toggle("cart-op");
})

// function addToCart() {
//   document.querySelector(".products").addEventListener("click",function(details){
//     if (details.target.classList.contains("cart")) {
//       cartArray.push(products[details.target.dataset.index])
//       console.log(cartArray);
//       alert("Added to the Cart")


//     }
//   })
// }
// addToCart();

// function showCart() {
//   var clutter = "";
//   cartArray.forEach(function(prod,index){
//     clutter += `<div class="item-image">
//     <img src="${prod.pop-up-image}" alt="">
//     </div>
//     <div class="item-details">
//     <div class="name">${prod.h3}</div>
//     <div class="cart-item-price">${prod.h2}</div>
//     </div>`;
    
//   document.getElementsByClassName("cart-show").innerHTML = clutter;

// });
// }

// showCart();

var addToCartButtons = document.getElementsByClassName("cart")
for(var i = 0; i<addToCartButtons.length; i++){
  var button = addToCartButtons[i]
  button.addEventListener("click",addToCartClicked)
}

function addToCartClicked(event) {
  alert("Added To Cart")
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName("item-title")[0].innerText
  var price = shopItem.getElementsByClassName("actual-price")[0].innerText
  var imageSrc = shopItem.getElementsByClassName("pop-up-image")[0].src
  console.log(title,price,imageSrc);
  addItemToCart(title,price,imageSrc)
}

function addItemToCart(title,price,imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-show')
  var cartShow = document.getElementsByClassName("cart-show")[0]
  var cartRowContent = `<div class="item-image">
  <img src="${imageSrc}" alt="">
  </div>
  <div class="item-details">
  <div class="name">${title}</div>
  <div class="cart-item-price">${price}</div>
  </div>`
  cartRow.innerHTML = cartRowContent
  cartShow.append(cartRow)
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 35,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

document.querySelector(".order-button1").addEventListener("click",() =>{
    document.querySelector(".pop-up1").style.display = "flex";
});
document.getElementById("order-close1").addEventListener("click",()=>{
  document.querySelector(".pop-up1").style.display = "none";
});

document.querySelector(".order-button2").addEventListener("click",() =>{
    document.querySelector(".pop-up2").style.display = "flex";
});
document.getElementById("order-close2").addEventListener("click",()=>{
  document.querySelector(".pop-up2").style.display = "none";
});

document.querySelector(".order-button3").addEventListener("click",() =>{
    document.querySelector(".pop-up3").style.display = "flex";
});
document.getElementById("order-close3").addEventListener("click",()=>{
  document.querySelector(".pop-up3").style.display = "none";
});

document.querySelector(".order-button4").addEventListener("click",() =>{
    document.querySelector(".pop-up4").style.display = "flex";
});
document.getElementById("order-close4").addEventListener("click",()=>{
  document.querySelector(".pop-up4").style.display = "none";
});

document.querySelector(".order-button5").addEventListener("click",() =>{
    document.querySelector(".pop-up5").style.display = "flex";
});
document.getElementById("order-close5").addEventListener("click",()=>{
  document.querySelector(".pop-up5").style.display = "none";
});

document.querySelector(".order-button6").addEventListener("click",() =>{
    document.querySelector(".pop-up6").style.display = "flex";
});
document.getElementById("order-close6").addEventListener("click",()=>{
  document.querySelector(".pop-up6").style.display = "none";
});

document.querySelector(".order-button7").addEventListener("click",() =>{
    document.querySelector(".pop-up7").style.display = "flex";
});
document.getElementById("order-close7").addEventListener("click",()=>{
  document.querySelector(".pop-up7").style.display = "none";
});

document.querySelector(".order-button8").addEventListener("click",() =>{
    document.querySelector(".pop-up8").style.display = "flex";
});
document.getElementById("order-close8").addEventListener("click",()=>{
  document.querySelector(".pop-up8").style.display = "none";
});

document.querySelector(".order-button9").addEventListener("click",() =>{
    document.querySelector(".pop-up9").style.display = "flex";
});
document.getElementById("order-close9").addEventListener("click",()=>{
  document.querySelector(".pop-up9").style.display = "none";
});

document.querySelector(".order-button10").addEventListener("click",() =>{
    document.querySelector(".pop-up10").style.display = "flex";
});
document.getElementById("order-close10").addEventListener("click",()=>{
  document.querySelector(".pop-up10").style.display = "none";
});

document.querySelector(".order-button11").addEventListener("click",() =>{
    document.querySelector(".pop-up11").style.display = "flex";
});
document.getElementById("order-close11").addEventListener("click",()=>{
  document.querySelector(".pop-up11").style.display = "none";
});

document.querySelector(".order-button12").addEventListener("click",() =>{
    document.querySelector(".pop-up12").style.display = "flex";
});
document.getElementById("order-close12").addEventListener("click",()=>{
  document.querySelector(".pop-up12").style.display = "none";
});

document.querySelector(".order-button13").addEventListener("click",() =>{
    document.querySelector(".pop-up13").style.display = "flex";
});
document.getElementById("order-close13").addEventListener("click",()=>{
  document.querySelector(".pop-up13").style.display = "none";
});

document.querySelector(".order-button14").addEventListener("click",() =>{
    document.querySelector(".pop-up14").style.display = "flex";
});
document.getElementById("order-close14").addEventListener("click",()=>{
  document.querySelector(".pop-up14").style.display = "none";
});

document.querySelector(".order-button15").addEventListener("click",() =>{
    document.querySelector(".pop-up15").style.display = "flex";
});
document.getElementById("order-close15").addEventListener("click",()=>{
  document.querySelector(".pop-up15").style.display = "none";
});

document.querySelector(".order-button16").addEventListener("click",() =>{
    document.querySelector(".pop-up16").style.display = "flex";
});
document.getElementById("order-close16").addEventListener("click",()=>{
  document.querySelector(".pop-up16").style.display = "none";
});

