
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    on: {
        slideChangeTransitionStart: function () {
            $('.card').hide(0);
            $('.card').removeClass('aos-init').removeClass('aos-animate');
        },
        slideChangeTransitionEnd: function () {
            $('.card').show(0);
            AOS.init();
        },
    }
});

AOS.init();