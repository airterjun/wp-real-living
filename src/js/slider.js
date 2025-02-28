import gsap from "gsap"

export const Slider = () => {
    const sliderWithSwiper = document.querySelectorAll('.swiper')

    if (sliderWithSwiper && innerWidth > 870) {
        sliderWithSwiper.forEach(slider => {
            let currentIndex = 0;
            const inner = slider.querySelector('.swiper-wrapper')
            const getItems = slider.querySelectorAll('.card-wrapper')
            const navigation = slider.parentNode.querySelectorAll('.navigation .prev-next-button')

            if (navigation) {
                navigation.forEach((nav, index) => {

                    navigation[0].classList.add('disabled')

                    nav.addEventListener('click', () => {
                        const itemWidth = getItems[0].getBoundingClientRect()

                        if (index === 0) {
                            currentIndex--;
                        } else {
                            currentIndex++;
                            navigation[0].classList.remove('disabled')
                        }


                        if (currentIndex === 0) {
                            navigation[0].classList.add('disabled')
                        }


                        if (currentIndex >= (getItems.length - 2)) {
                            navigation[1].classList.add('disabled')
                        } else {
                            navigation[1].classList.remove('disabled')
                        }

                        gsap.to(inner, {
                            x: (itemWidth.width * currentIndex) * -1,
                            duration: .45,
                            ease: 'power3.inOut'
                        })

                    })

                })
            }

        })
    }
}