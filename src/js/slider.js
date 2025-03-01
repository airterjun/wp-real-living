export const Slider = () => {

    const swiperWrapper = document.querySelectorAll('.swiper')

    if (swiperWrapper) {
        swiperWrapper.forEach(s => {
            new Swiper(s, {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            })
        })
    }

}