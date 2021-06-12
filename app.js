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
const suffix = document.getElementById("suffix")

const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
const toggleBtn = document.querySelector(".fa-toggle-off");

let currentItem = 0;
let priceExtract = ["8.00", "12.00", "16.00","24.00", "32.00"];

window.addEventListener("DOMContentLoaded", function () {
    showSlide(currentItem, priceExtract);
});

let toggle =0;

function setItemPrice() {
    toggle++;

    if (toggle === 0) {
        priceExtract = pageviews.map((elem, index) =>{
            let pricesOnly = pageviews[index].prices;
            let pricesWithoutDollars = pricesOnly.substr(1);
            return pricesWithoutDollars;
        });
        showSlide(currentItem, priceExtract);
        suffix.textContent = '/month';
        toggle = -1;
    }

    if (toggle === 1) {
        priceExtract = pageviews.map((elem, index) =>{
            let pricesOnly = pageviews[index].prices;
            let pricesWithoutDollars = pricesOnly.substr(1);
            return `${pricesWithoutDollars - (25/100) * pricesWithoutDollars}`;
        });
        showSlide(currentItem, priceExtract);
        suffix.textContent = '/year';
        toggle = +1;
    }
    //console.log(priceExtract);
}

toggleBtn.addEventListener('click',setItemPrice);

function showSlide(slide, priceExtract) {
    newPrice.textContent = `$${priceExtract[slide]}`
    const item = pageviews[slide];
    pageView.textContent = item.views;
    //console.log(priceExtract);
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem>pageviews.length-1) {
      currentItem = 0;
    }
    showSlide(currentItem, priceExtract);

});

  
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem<0) {
      currentItem = pageviews.length-1;
  
    }
    showSlide(currentItem, priceExtract);
});
// var clicked = false;

// toggleBtn.addEventListener('click', function() {
//     if (clicked) {
//         showSlide(currentItem);
//         clicked = false;
//     }
//     else{

//         discountPrice(slide);
//         clicked = true;
//     }
// })