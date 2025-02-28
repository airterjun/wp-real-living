import gsap, { ScrollTrigger } from "gsap"
gsap.registerPlugin(ScrollTrigger)



export const HomePageBannerAnimation = () => {

    let banner = document.querySelectorAll('.homepage-hero-banner .parallax-3d')
    const bannerWrapper = document.querySelector('.homepage-hero-banner')
    const bannerMobileWrapper = document.querySelector('.homepage-hero-banner.mobile-parallax')
    const main = document.querySelector('main')
    const headerSize = document.querySelector('.main-header')

    const mobile = innerWidth < 870

    if (innerWidth < 870) {
        banner = document.querySelectorAll('.mobile-parallax .parallax-3d')
    }

    if (banner) {
        const test = [0.2, 0.5, 1.2, 3]
        const moveXLayer = [0.2, 0.3, 0.7]
        const scale = [1, 1.1, 1]
        const offset = [5, 0, 0]
        banner.forEach((item, index) => {
            const depth = test[index];
            if (!mobile) {
                item.querySelector('img').style.transform = `translateX(-${offset[index]}%) scale(${scale[index]})`

                gsap.to(item, {
                    y: () => bannerWrapper.offsetHeight * depth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: main,
                        start: `top top+=${headerSize.offsetHeight}px`,
                        end: "bottom top",
                        scrub: true
                    }
                });
            } else {
                const image = item.querySelector('img')
                gsap.to(image, {
                    y: () => bannerMobileWrapper.offsetHeight * depth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: main,
                        start: `top top+=${headerSize.offsetHeight}px`,
                        end: "bottom top",
                        scrub: true
                    }
                });
            }

        })

        // Efek mouse untuk pergerakan kiri-kanan
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX / window.innerWidth) - 0.5;

            banner.forEach((layer, index) => {
                const depth = moveXLayer[index];
                const movementX = moveX * depth * 100;

                gsap.to(layer, {
                    x: movementX,
                    ease: "power2.out"
                });
            });
        });

    }

}