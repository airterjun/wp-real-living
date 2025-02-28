import { gsap, Expo, Power4 } from 'gsap';

class ParallaxSlider {
    className = 'parallax-slider';
    container = null
    children = []
    items = []
    slides = []
    totalIndex = 0

    activeIndex = 2
    activeIndex0 = 0
    activeIndex1 = 1
    activeIndex2 = 3
    inDuration = .25
    outDuration = .25
    outEase = Expo.easeIn
    inEase = Expo.easeOut

    constructor() {
        this.container = document.querySelector('.parallax-slider')

        if (this.container == null) {
            return
        }

        this.children = this.container.querySelectorAll('.parallax-slider__slide')

        this.totalIndex = this.children.length

        this.slides = JSON.parse(this.container.dataset.media)

        let i = 0;
        for (let child of this.children) {
            gsap.set(child.querySelector('.image-wrapper'), {scale: 1.2})

            let index = this.totalIndex - 4 + i

            if (index >= this.totalIndex) {
                index = index - this.totalIndex
            }

            child.querySelector('.background-image').style.backgroundImage = `url(${this.slides[index].media.url})`

            i++
        }
    }

    next0() {
        const currentEl = this.children[0].querySelector('.spotlight-carousel__image')
        const el = this.children[0].querySelector('.image-wrapper')

        if (this.activeIndex0 >= (this.slides.length - 1)) {
            this.activeIndex0 = 0
        } else {
            this.activeIndex0++
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex0].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '-100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })
    }

    next1() {
        const currentEl = this.children[1].querySelector('.spotlight-carousel__image')
        const el = this.children[1].querySelector('.image-wrapper')

        if (this.activeIndex1 >= (this.slides.length - 1)) {
            this.activeIndex1 = 0
        } else {
            this.activeIndex1++
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex1].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '-100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })
    }

    next2() {
        const currentEl = this.children[3].querySelector('.spotlight-carousel__image')
        const el = this.children[3].querySelector('.image-wrapper')

        if (this.activeIndex2 >= (this.slides.length - 1)) {
            this.activeIndex2 = 0
        } else {
            this.activeIndex2++
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex2].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '-100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })
    }

    next() {
        const currentEl = this.children[2].querySelector('.spotlight-carousel__image')
        const el = this.children[2].querySelector('.image-wrapper')

        if (this.activeIndex >= (this.slides.length - 1)) {
            this.activeIndex = 0
        } else {
            this.activeIndex++
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '-100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })

        this.next0()
        this.next1()
        this.next2()
    }

    previous2() {
        const currentEl = this.children[3].querySelector('.spotlight-carousel__image')
        const el = this.children[3].querySelector('.image-wrapper')

        if (this.activeIndex2 > 0) {
            this.activeIndex2--
        } else {
            this.activeIndex2 = this.slides.length - 1
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '-100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex2].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })
    }

    previous1() {
        const currentEl = this.children[1].querySelector('.spotlight-carousel__image')
        const el = this.children[1].querySelector('.image-wrapper')

        if (this.activeIndex1 > 0) {
            this.activeIndex1--
        } else {
            this.activeIndex1 = this.slides.length - 1
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '-100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex1].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })
    }

    previous0() {
        const currentEl = this.children[0].querySelector('.spotlight-carousel__image')
        const el = this.children[0].querySelector('.image-wrapper')

        if (this.activeIndex0 > 0) {
            this.activeIndex0--
        } else {
            this.activeIndex0 = this.slides.length - 1
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '-100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex0].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })
    }

    previous() {
        const currentEl = this.children[2].querySelector('.spotlight-carousel__image')
        const el = this.children[2].querySelector('.image-wrapper')

        if (this.activeIndex <= 0) {
            this.activeIndex = this.slides.length - 1
        } else {
            this.activeIndex--
        }

        const clone = el.cloneNode(true)

        gsap.set(clone, {
            x: '-100%',
            scale: 1,
        })

        gsap.set(clone.querySelector('.background-image'), {
            backgroundImage: `url(${this.slides[this.activeIndex].media.url})`
        })

        currentEl.prepend(clone);

        gsap.to(clone, {
            duration: this.inDuration,
            x: 0,
            scale: 1.2,
            ease: this.inEase,
        })

        gsap.to(el, {
            duration: this.outDuration,
            scale: 1,
            x: '100%',
            opacity: 0,
            ease: this.outEase,
            onComplete: () => {
                setTimeout(() => {
                    el.remove();
                }, 250)
            }
        })

        this.previous0()
        this.previous1()
        this.previous2()
    }
}

export default ParallaxSlider
