// let c = 5;
// function handleResponsive(e) {
//     if (e.matches) {
//         c = 4;
//     }
// }
// const mediaQuery = window.matchMedia("(max-width: 1400px)");
// handleResponsive(mediaQuery);
// mediaQuery.addEventListener("change", handleResponsive);

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 5,
        },
        // when window width is >= 480px
        992: {
            slidesPerView: 6,
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 8,
        },
    },
    autoplay: {
        delay: 3000,
    },
    rtl: true,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});
