const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {


    // var a = document.querySelector("#elem1")
    // var image = a.getAttribute("data-image")
    // console.log(image);


    var elemContainer = document.querySelector("#elem-container")
    var fixedImg = document.querySelector("#fixed-image")
    elemContainer.addEventListener("mouseenter", function () {
        fixedImg.style.display = "block";
    })
    elemContainer.addEventListener("mouseleave", function () {
        fixedImg.style.display = "none";
    })


    // var alem1 = document.querySelector("#elem1")
    // var dataImg = alem1.getAttribute("data-image")
    // alem1.addEventListener("mouseenter",function(){
    //     var image = alem1.getAttribute("data-image")
    //     fixedImg.style.backgroundImage = `url(${image})`
    // })


    var alems = document.querySelectorAll(".elem")
    alems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            console.log(image);
            fixedImg.style.backgroundImage = `url(${image})`
        })
    })


}

function SpiperAnimation() {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,

    });
}

SpiperAnimation()
page4Animation()
