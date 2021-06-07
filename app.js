const pageviews = [
    {
        id: 1,
        views: "10K pageview",
        prices: "$8.00"
    },

    {
        id: 2,
        views: "50K pageview",
        prices: "$12.00"
    },

    {
        id: 3,
        views: "100K pageview",
        prices: "$16.00"
    },

    {
        id: 4,
        views: "500K pageview",
        prices: "$24.00"
    },

    {
        id: 5,
        views: "1M pageview",
        prices: "$32.00"
    },
];

const newPrice = document.getElementById("prices");
const pageView = document.getElementById("views");

const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
const toggleBtn = document.querySelector(".fa-toggle-off");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showSlide(currentItem);
});

function showSlide(slide) {
    const item = pageviews[slide];
    pageView.textContent= item.views;
    newPrice.textContent = item.prices;
    return;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem>pageviews.length-1) {
      currentItem = 0;
    }
    showSlide(currentItem);

});

  
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem<0) {
      currentItem = pageviews.length-1;
  
    }
    showSlide(currentItem);
});
// function discountPrice(slide) {
//     let discount = 0.25 * slide;
//     newPrice.textContent = `${discount} /year`;

// }

var clicked = false;

toggleBtn.addEventListener('click', function() {
    if (clicked) {
        showSlide(currentItem);
        clicked = false;
    }
    else{

        discountPrice(slide);
        clicked = true;
    }
})