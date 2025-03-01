
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export class Animation {
    constructor() {

        this.parallax()

    }

    parallax() {
        const images = document.querySelectorAll(".parallax")

        if (images) {
            images.forEach(p => {
                const image = p.querySelector('img')
                gsap.to(image, {
                    yPercent: 25,
                    scrollTrigger: {
                        scrub: 1,
                        trigger: p,
                        start: 'top bottom',
                        end: 'bottom top',
                    }
                })
            })
        }
    }

}