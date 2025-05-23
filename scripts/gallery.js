const swiper = new Swiper('.sample-slider',{
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slide:{
        slideToClickedSlide: true,
    }
})

document.querySelectorAll('.swiper-slide').forEach(element => {
    
    element.addEventListener('click', function (){
        swiper.slideNext();
    })
});