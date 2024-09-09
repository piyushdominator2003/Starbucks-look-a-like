let icon = document.querySelector(".icon");
let header = document.querySelector(".header");

icon.addEventListener("click",() => {
    header.classList.toggle("active");
    // alert("kyu??")
})

let login = document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".log-in").style.display = "flex";
})

let close = document.querySelector(".log-in-close").addEventListener("click", () => {
    document.querySelector(".log-in").style.display = "none";
})

 var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


var reviews = [
  {comment:"We arrived in  Starbucks market at Herbron. First of all, the people were kind and calm ☺️ and the food arrived very quickly. All the food was just soo tasty.",name:"~ mark@1234"},
  {comment:" I bought Two Butter Croissant and Two large iced caramel coffee along with a brownie for me and my boyfriend Amit. I love the name mess up on the cup. It was rather funny. It was good. Will be back again at the Shepherdsville KY store. Store was clean and workers nice.  ",name:"~ Zareena Shaikh"},
  {comment:" The Starbucks location at Brentwood Mall staff are ALL polite, friendly, helpful and professional. Staff like Lee, Kellie, Gabby and Jerome are great examples to giving all their customers top notch care and service! Thank you team! ",name:"~ Kevin11"},
  {comment:" I had such a wonderful experience when I went to the Bolton, Starbucks shop. I want to comment on Rukhsaar who was servicing us at the drive thru. She went over and beyond what was required. Very friendly young lady and very personable. Thank you ",name:"~ Steaven Moore"},
  {comment:"The Starbucks store in Broadway mall Hicksville Long Island are the absolute best. Stephanie the manager is the sweetest and kindest soul. Always very welcoming. The staff is phenomenal. Always handles orders on time and my coffee always tastes perfect.",name:"~ James"},
  {comment:" I have been coming here for 2 years now with my girlfriend Aarfa Khan. Great location, great service and most importantly knowledgeable staff. They know how to make a good coffee. The atmosphere is very warm and welcoming. Pleased to stop by every morning when I get a chance. ",name:"~ Ansh Mehra"},
];

function addReviews() {
  clutter = "";
  reviews.forEach(function(review) {
    clutter += ` <div class="swiper-slide">
    <div class="review">
    <div class="star">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star-half-stroke"></i>
    </div>
    <div class="customer-comment">
        <p>${review.comment}</p>
    </div>
    <div class="customer-name">${review.name}</div>
</div>
</div> `
  });

  document.querySelector(".swiper-wrapper").innerHTML = clutter;
}

addReviews()