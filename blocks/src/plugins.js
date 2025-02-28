import GSAP, { Power4, Power2 } from 'gsap'
import Flickity from "flickity"

class Main {
    constructor() {
        this.desktopRes = window.matchMedia('(min-width: 1040px)')
        this.tabletRes = window.matchMedia('(min-width: 850px)')
        this.addEventListeners()
    }

    triggerResize() {
        let ev = document.createEvent('HTMLEvents');
        ev.initEvent('resize', true, false);
        window.dispatchEvent(ev);
    }


    search() {
        this.searchOverlay = {
            parent: document.querySelector(".search-overlay"),
            container: document.querySelector(".search-overlay__container"),
            toggle: document.querySelector(".search-overlay__toggle"),
            close: document.querySelector(".search-overlay__close")
        }

        GSAP.set(this.searchOverlay.parent, { zIndex: -1 })
        GSAP.set(this.searchOverlay.container, { autoAlpha: 0, zIndex: -1 })

        this.searchOverlay.toggle.addEventListener('click', () => {
            if (!this.searchOverlay.container.classList.contains('show')) {
                this.showSearch(this.searchOverlay)
                this.searchOverlay.container.classList.add('show')
            } else {
                this.hideSearch(this.searchOverlay)
                this.searchOverlay.container.classList.remove('show')
            }
        })

        this.searchOverlay.close.addEventListener('click', () => {
            this.hideSearch(this.searchOverlay)
            this.searchOverlay.container.classList.remove('show')
        })


        this.showSearch = function () {
            this.animateIn = GSAP.timeline()
            this.animateIn.to(this.searchOverlay.parent, {
                zIndex: 50,
                pointerEvents: 'auto'
            })
            this.animateIn.to(this.searchOverlay.toggle, {
                autoAlpha: 0,
            })
            this.animateIn.to(this.searchOverlay.container, {
                autoAlpha: 1,
                ease: Power4.easeIn,
            })
        }

        this.hideSearch = function () {
            this.animateOut = GSAP.timeline()
            this.animateOut.to(this.searchOverlay.container, {
                zIndex: -1,
                autoAlpha: 0,
                ease: Power4.easeOut,
            })
            this.animateOut.to(this.searchOverlay.toggle, {
                autoAlpha: 1,
            })
            this.animateOut.to(this.searchOverlay.parent, {
                zIndex: 0,
                pointerEvents: 'none'
            })
        }
    }

    heroSlider() {

        const slides = document.querySelectorAll(".hero__slides .hero__slide")
        const pagination = document.querySelectorAll(".hero__pagination > .hero__pagination__link")
        let activeSlider = 0
        let prevActiveSlider = -1

        if (slides && slides.length) {

            const totalSlides = slides.length


            this.hero = {
                sactive: 0,
                slides: this.heroSlider,
                length: this.heroSlider.length,
                interval: 5000
            }


            const yOffset = 80
            const duration = 1.5

            setInterval(() => {

                const staggerElement = slides[activeSlider].querySelectorAll(".hero__slide__info__inner .stagger")

                let prevStaggerElement = null;
                if (prevActiveSlider !== -1) {
                    slides[prevActiveSlider].classList.remove('is-selected')
                    pagination[prevActiveSlider].classList.remove('active')
                    prevStaggerElement = slides[prevActiveSlider].querySelectorAll(".hero__slide__info__inner .stagger")
                }
                slides[activeSlider].classList.add('is-selected')
                pagination[activeSlider].classList.add('active')


                GSAP.fromTo(staggerElement, {
                    y: yOffset,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: duration,
                    ease: Power4.easeInOut,
                    stagger: 0.1
                })

                if (prevActiveSlider !== -1 && prevStaggerElement) {
                    GSAP.fromTo(prevStaggerElement, {
                        y: 0,
                        opacity: 1
                    }, {
                        y: yOffset,
                        opacity: 0,
                        duration: duration,
                        ease: Power4.easeInOut,
                        stagger: 0.1
                    })
                }


                if (activeSlider >= (totalSlides - 1)) {
                    activeSlider = 0
                    prevActiveSlider = totalSlides - 1
                } else {
                    prevActiveSlider = activeSlider
                    activeSlider++
                }

            }, this.hero.interval)

            pagination.forEach((item, index) => {
                item.addEventListener('click', e => {
                    e.preventDefault()
                    activeSlider = index
                })
            })
        }
    }

    testimonialSlider() {
        this.testimonialSliderContent = document.querySelectorAll(".testimonial__content__slide")
        // this.testimonialSliderImage = [...document.querySelectorAll(".testimonial__background__slide")]

        if (this.testimonialSliderContent && this.testimonialSliderContent.length) {

            this.testimonial = {
                active: 0,
                interval: 2000,
                length: this.testimonialSliderContent.length,
                prev: document.querySelector('.testimonial__navigation>.prev'),
                next: document.querySelector('.testimonial__navigation>.next'),
                counter: document.querySelector(".testimonial__count>.counter"),
            }


            this.testimonialSliderContent[0].classList.add('is-selected')

            this.testimonial.counter.innerHTML = 1

            setInterval(() => {
                ++this.testimonial.active

                if ((this.testimonial.active = this.testimonial.active % this.testimonial.length) < 0) {
                    this.testimonial.active += this.testimonial.length
                }

                if ((this.testimonial.active - 1) < 0) {
                    this.testimonialSliderContent[this.testimonial.length - 1].classList.remove('is-selected')

                } else {
                    if (this.testimonialSliderContent[this.testimonial.active - 1].classList.contains('is-selected')) {
                        this.testimonialSliderContent[this.testimonial.active - 1].classList.remove('is-selected')
                    }
                }
                this.testimonialSliderContent[this.testimonial.active].classList.add('is-selected')

                this.testimonial.counter.innerHTML = this.testimonial.active + 1

            }, this.testimonial.interval)

            this.testimonial.next.addEventListener('click', () => {
                let nextActive = this.testimonial.active + 1

                if (nextActive >= this.testimonial.length) {
                    nextActive = 0
                }

                this.testimonialSliderContent[this.testimonial.active].classList.remove('is-selected')

                this.testimonialSliderContent[nextActive].classList.add('is-selected')

                this.testimonial.active = nextActive
                this.testimonial.counter.innerHTML = nextActive + 1
            })

            this.testimonial.prev.addEventListener('click', () => {
                let prevActive = this.testimonial.active - 1

                if (prevActive < 0) {
                    prevActive = this.testimonial.length - 1
                }

                // this.testimonialSliderImage[this.testimonial.active].classList.remove('is-selected')
                this.testimonialSliderContent[this.testimonial.active].classList.remove('is-selected')

                // this.testimonialSliderImage[prevActive].classList.add('is-selected')
                this.testimonialSliderContent[prevActive].classList.add('is-selected')

                this.testimonial.active = prevActive
                this.testimonial.counter.innerHTML = prevActive + 1
            })
        }
    }

    pageScroll() {
        this.body = document.getElementsByTagName("body")[0]
        const hedaer = document.getElementById("header")

        this.scroll = {
            percent: (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100,
            indicator: document.querySelector('.scroll-indicator .tracker'),
            wrapper: document.querySelector('.scroll-indicator')
        }

        this.scroll.indicator.style.width = this.scroll.percent + '%'

        if (this.scroll.percent < 12 || this.scroll.percent > 90) {
            this.scroll.wrapper.style.opacity = 0

        } else {
            this.scroll.wrapper.style.opacity = 1
        }


        if (window.scrollY > 20) {
            hedaer.classList.add('active')
        } else {
            hedaer.classList.remove('active')
        }


    }

    singleProductTabs() {
        this.tabs = {
            list: document.querySelector('.product-tabs__list'),
            listItem: [...document.querySelectorAll('.product-tabs__list .product-tabs__item')],
            panel: [...document.querySelectorAll('.product-tabs__panel')],
            active: 0
        }

        GSAP.set(this.tabs.panel[0], {
            autoAlpha: 1,
            position: 'relative',
            pointerEvents: "auto"
        })

        GSAP.set(this.tabs.panel[1], {
            autoAlpha: 0,
            position: 'absolute',
            pointerEvents: "none"
        })

        this.tabs.listItem.forEach((item, index) => {
            item.addEventListener('click', _ => {

                _.preventDefault()

                GSAP.to(this.tabs.panel[this.tabs.active], {
                    autoAlpha: 0,
                    position: 'absolute',
                    pointerEvents: "none"
                })

                GSAP.to(this.tabs.panel[index], {
                    autoAlpha: 1,
                    position: 'relative',
                    pointerEvents: "auto"
                })

                this.tabs.active = index
            })
        })
    }

    singleProductImageZoom(item){
        const image = item.querySelector('figure')
        const zoomWrapper = document.createElement('div')
        zoomWrapper.classList.add('zoom-container__full-screen')
        zoomWrapper.innerHTML = `<div class="inner-container">
            <div class="button-close-zoom">
                <svg class="default" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path></svg>
            </div>
            <div class="content">
                ${image.innerHTML}
            </div>
        </div>`
        document.body.append(zoomWrapper)

        const buttonClose = zoomWrapper.querySelector('.button-close-zoom')

        buttonClose.addEventListener('click', ()=>{
            zoomWrapper.remove()
        })

    }

    singleProductSlider() {
        this.spSliderContainer = document.querySelector('.product-gallery__slider')

        if (this.spSliderContainer) {


            if (this.tabletRes.matches) {
                this.spThumbsContainer = document.querySelector('.product-details__thumbs')

                this.spData = {
                    item: [...this.spSliderContainer.querySelectorAll('.product-gallery__slide')],
                    nav: [...this.spThumbsContainer.querySelectorAll('.woocommerce-product-gallery__image a')],
                    active: 0,
                }

                this.spData.nav.forEach((item, index) => {

                    this.spData.item[index].setAttribute('id', "#gallery__index-" + index)
                    this.spData.nav[index].setAttribute('href', "#gallery__index-" + index)

                    item.addEventListener('click', e => {
                        e.preventDefault()
                        let el = document.getElementById('#gallery__index-' + index)
                        el.scrollIntoView({ behavior: "smooth", block: "center" })
                    })
                })

                this.spData.item.forEach((item, index) => {

                    /**
                     * create button popup
                     */
                    const button = document.createElement('div')
                    button.classList.add('button-zoom')
                    button.innerHTML = `<svg class="default" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2V6H2V2H6V0H2C0.9 0 0 0.9 0 2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0Z"></path></svg>`
                    item.append(button)
                    button.addEventListener('click', ()=>{
                        this.singleProductImageZoom(item)
                    })

                    item.addEventListener('mouseenter', () => {
                        item.querySelector('.product-gallery__slide-image img').style.transform = `scale(1, 1)`
                        item.querySelector('.product-gallery__slide-image img').style.transformOrigin = `0% 0%`
                    })

                    item.addEventListener('mouseleave', () => {
                        item.querySelector('.product-gallery__slide-image img').style.transform = `scale(1, 1)`
                        item.querySelector('.product-gallery__slide-image img').style.transformOrigin = `0% 0%`
                    })

                    item.addEventListener('mousemove', event => {
                        let rect = item.getBoundingClientRect();
                        let x = event.clientX - rect.left;
                        let y = event.clientY - rect.top;
                        const posLeft = (x / rect.width)
                        const posTop = y / rect.height
                        const image = item.querySelector('img')
                        let scale = image.naturalWidth / image.clientWidth
                        if(scale < 1.5) scale = 2
                        const posX = (posLeft * 100) / scale
                        const posY = (posTop * 100) / scale

                        item.querySelector('.product-gallery__slide-image img').style.transform = `scale(${scale}) translate3d(-${posX}%, -${posY}%, 0)`
                    })
                })

            } else {


                this.spSliderContainer.classList.add('mobile')

                const flickity = new Flickity('.product-gallery__slider.mobile', {
                    pageDots: false,
                    prevNextButtons: false,
                    adaptiveHeight: true
                })

                document.querySelector('.product-details__thumbs').remove()

                this.spSliderNavigation = document.createElement('div')
                this.spSliderNavigation.classList.add('product-gallery__navigation')

                this.spSliderNavigation.innerHTML =
                    `<div class='navigation-button__prev'>
                        <i class='arrow-left'></i>
                    </div>
                    <div class='navigation-button__next'>
                        <i class='arrow-right'></i>
                    </div>`

                document.querySelector('.product-details__images').appendChild(this.spSliderNavigation)

                this.spData = {
                    item: [...document.querySelectorAll('.product-gallery__slide')],
                    navPrev: document.querySelector('.navigation-button__prev'),
                    navNext: document.querySelector('.navigation-button__next'),
                    active: 0,
                }

                // this.spData.item[0].classList.add('is-selected')

                this.spData.navPrev.addEventListener('click', () => {
                    flickity.previous()
                    // if (this.spData.item[this.spData.active].classList.contains('is-selected')) {
                    //     this.spData.item[this.spData.active].classList.remove('is-selected')
                    // }
                    //
                    // if (this.spData.active === 0) {
                    //     this.spData.active = this.spData.item.length - 1
                    // } else {
                    //     this.spData.active = this.spData.active - 1
                    // }
                    //
                    // this.spData.item[this.spData.active].classList.add('is-selected')
                })

                this.spData.navNext.addEventListener('click', () => {
                    flickity.next()
                    // if (this.spData.item[this.spData.active].classList.contains('is-selected')) {
                    //     this.spData.item[this.spData.active].classList.remove('is-selected')
                    // }
                    //
                    // if (this.spData.active === (this.spData.item.length - 1)) {
                    //     this.spData.active = 0
                    // } else {
                    //     this.spData.active = this.spData.active + 1
                    // }
                    //
                    // this.spData.item[this.spData.active].classList.add('is-selected')
                })
            }

        }
    }

    onWindowLoad() {
        this.search()
        this.heroSlider()
        this.testimonialSlider()
        this.singleProductTabs()
        this.singleProductSlider()
    }

    onWindowScroll() {
        if (this.desktopRes.matches) {
            this.pageScroll()
        }
    }

    addEventListeners() {
        this.triggerResize()

        window.addEventListener('load', this.onWindowLoad.bind(this))


        window.addEventListener('scroll', this.onWindowScroll.bind(this))
    }

}

export default new Main()