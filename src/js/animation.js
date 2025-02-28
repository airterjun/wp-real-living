
import gsap from 'gsap'


export class Animation {
    constructor() {

        this.isMobile = innerWidth < 800
        this.init()
        this.animateScaleCorner()
        this.mountainParallax()
        this.marqueAndCircle()
        this.parallaxOffset()
        this.cabinParallax()
        this.gallery()
        this.imageRegularParallax()
        this.header()
        this.guestServiceBanner()
        this.propertyHeroLantern()
        this.mobileMarqueImage()
        this.runningText()
        this.aboutUsBanner()
        this.contactBanner()

    }

    init() {
        this.scaleCorner = document.querySelectorAll('.scale--corner')
        this.heroParallax = document.querySelector('.hero .hero__banner')

    }


    contactBanner() {
        const contactBanner = document.querySelectorAll('.contact-banner-parallax')
        if (contactBanner) {
            contactBanner.forEach((banner, index) => {
                const image = banner.querySelector('img')
                gsap.to(image, {
                    y: index === 0 ? this.isMobile ? '-20%' : `-2%` : '40%',
                    scrollTrigger: {
                        trigger: banner,
                        start: 'clamp(top bottom)',
                        end: 'bottom top',
                        scrub: 1
                    }
                })
            })
        }
    }

    aboutUsBanner() {

        const aboutUsBanner = document.querySelectorAll('.about-us-hero .b-parallax')

        if (aboutUsBanner) {
            aboutUsBanner.forEach((item, index) => {
                const distance = 50 * (aboutUsBanner.length - (index + 2))

                let speed = innerHeight * 0.1

                if (index === 1) {
                    speed = innerHeight * 0.3
                }

                if (index === 2) {
                    speed = innerHeight * 0.6
                }

                gsap.to(item, {
                    y: speed,
                    scrollTrigger: {
                        trigger: '.about-us-hero',
                        start: 'clamp(top bottom)',
                        end: 'bottom top',
                        scrub: true
                    }
                })
            })
        }
    }


    runningText() {
        const text = document.querySelectorAll('.running-text')
        let scrollPos = window.scrollY;


        if (text) {
            let tween = []

            text.forEach((item) => {
                item.style.width = `${item.scrollWidth}px`
                const clientWidth = item.clientWidth
                // item.style.transform = `translateX(-${item.clientWidth}px)`
                const textEl = item.querySelectorAll('.item')
                const duplicate = [1, 2]
                let size = 0

                textEl.forEach(t => {
                    duplicate.forEach(d => {
                        const clone = t.cloneNode(true)
                        clone.classList.add('duplicate')
                        item.appendChild(clone)
                    })
                })


                const allItems = item.querySelectorAll('.item')

                allItems.forEach(item => {
                    size += item.clientWidth
                })

                // transform: translateX(-31.25 %);

                const tl = gsap.to(item, {
                    x: clientWidth * -1,
                    ease: 'none',
                    duration: this.isMobile ? 180 : 90,
                    repeat: -1
                })
            })

        }
    }



    /**
     * Milestone page
     */
    mobileMarqueImage() {
        const wrapper = document.querySelectorAll('.three-column-banner .grid')

        if (wrapper && innerWidth < 876) {
            wrapper.forEach(item => {
                const slide = item.querySelector(".wrapper")

                for (let i = 0; i < 3; i++) {
                    const cloneSlide = slide.cloneNode(true)
                    item.appendChild(cloneSlide)

                }

            })
        }

    }


    propertyHeroLantern() {
        const lantern = document.querySelectorAll('.property-her-banner .lantern img')


        // Loop through each box element and apply the animation


        const animateLantern = () => {
            function randomRotation() {
                return Math.random() * 6 - 3; // Generates a random number between -3 and 3
            }
            function randomDuration() {
                return Math.random() * 3 + 1; // Generates a random number between 1 and 4
            }

            lantern.forEach((box) => {
                // Initial random rotation
                let currentRotation = randomRotation();

                // GSAP animation using TweenMax
                function animateBox() {
                    gsap.to(box, {
                        rotation: currentRotation,
                        duration: randomDuration(),
                        ease: "none",
                        onComplete: function () {
                            // Reverse direction if rotation reaches 3deg or -3deg
                            if (currentRotation >= 3 || currentRotation <= -3) {
                                currentRotation *= -3;
                            }
                            animateBox(); // Recursive call for infinite looping
                        }
                    });
                }

                // Start the initial animation
                animateBox();
            });
        }


        if (lantern) {
            gsap.fromTo(lantern, {
                y: `-100%`
            }, {
                y: `-10%`,
                duration: 2,
                stagger: 0.1,
                ease: 'back.out',
                onComplete: () => {
                    lantern.forEach(item => {
                        animateLantern()
                    })
                }
            })
        }
    }

    guestServiceBanner() {
        const banner = document.querySelector('.guest-services figure img')

        if (banner) {
            let animate = {
                y: '40%'
            }

            if (innerWidth < 800) {
                animate = {
                    scale: .8
                }
            }
            gsap.from(banner, {
                ...animate,
                scrollTrigger: {
                    trigger: banner,
                    start: 'top 90%',
                    end: 'bottom top',
                    scrub: true
                }
            })
        }
    }

    header() {
        let lastY = 0
        const header = document.querySelector('header')
        window.addEventListener("scroll", () => {
            const scrolly = window.scrollY

            if (scrolly > 400) {
                header.classList.add('light')
            } else {
                if (!header.classList.contains('not-home-page')) {
                    header.classList.remove('light')
                }
            }

            header.classList[scrolly > lastY ? 'add' : 'remove']('header--scrolled')

            lastY = window.scrollY
        })

    }


    imageParallax(parallax) {
        if (parallax) {
            parallax.forEach(item => {
                const img = item.querySelector('img')

                gsap.from(img, {
                    y: `-10%`,
                    scrollTrigger: {
                        trigger: item,
                        start: 'clamp(top bottom)',
                        end: 'clamp(bottom top)',
                        scrub: true
                    }
                })
            })
        }
    }

    imageRegularParallax() {
        const parallax = document.querySelectorAll('.parallax-image')
        const featuredBannerParrallax = document.querySelectorAll('.featured-banner-two figure')
        this.imageParallax(parallax)
        this.imageParallax(featuredBannerParrallax)
    }

    gallery() {
        const gallery = document.querySelector('.carousel-gallery');

        if (gallery) {
            const innerSlider = gallery.querySelector('.swiper-wrapper');
            const children = innerSlider.querySelectorAll('.swiper-slide');

            gallery.appendChild(innerSlider.cloneNode(true))

            // children.forEach(item => {
            //     const cloned = item.cloneNode(true)
            //     cloned.classList.add('clone')
            //     innerSlider.appendChild(cloned);
            // });


            // innerSlider.style.width = `${innerSlider.scrollWidth}px`;


            // const sliderAnimation = gsap.to(gallery, {
            //     x: `-100%`,
            //     repeat: -1,
            //     duration: innerWidth > 700 ? innerWidth / 100 : 50,
            //     ease: 'none'
            // });


            if (innerWidth < 800) {
                const pauseSlider = () => sliderAnimation.pause();
                const resumeSlider = () => sliderAnimation.play();

                innerSlider.addEventListener('pointerdown', pauseSlider);
                innerSlider.addEventListener('pointerup', resumeSlider);
                innerSlider.addEventListener('pointerleave', resumeSlider); // Resume if user drags out of bounds
            }
        }

    }

    cabinParallax() {
        const mount = document.querySelector('.booking-banner__s5')
        const cabin = document.querySelector('.booking-banner__s6')

        if (mount) {
            gsap.to(mount, {
                yPercent: 20,
                scrollTrigger: {
                    trigger: mount,
                    start: 'clamp(top bottom)',
                    end: 'bottom top',
                    scrub: true
                }
            })
        }
    }


    parallaxOffset() {
        const parallaxUp = document.querySelectorAll('.parallax-offset-up')
        const parent = parallaxUp.parent

        if (parallaxUp) {
            parallaxUp.forEach(item => {
                gsap.from(item, {
                    yPercent: 40,
                    scrollTrigger: {
                        trigger: parent,
                        scrub: true,
                        start: 'clamp(top bottom)',
                        end: 'bottom top'
                    }
                })
            })
        }
    }


    marqueAndCircle() {
        const marqueContainer = document.querySelector('.marque')

        if (!marqueContainer) return
        const logo = marqueContainer.querySelectorAll('.logo')

        if (logo) {
            logo.forEach((el, i) => {
                gsap.to(el, {
                    xPercent: i % 2 === 1 ? 50 : -50,
                    duration: innerWidth < 867 ? 15 : 50,
                    ease: 'none',
                    repeat: -1
                })
            })
        }
    }

    mountainParallax() {
        if (this.heroParallax) {
            const child = this.heroParallax.children

            if (child) {
                const speed = [30, 50, 70]
                for (let i = 0; i < child.length; i++) {
                    const item = child[i]

                    // let scale = this.isMobile ? 3 : 1
                    // let speed = (this.isMobile ? 20 : 10) * scale

                    // if (i === 1) speed = 40 * scale

                    // if (i === 2) speed = 90 * scale

                    gsap.to(item, {
                        yPercent: speed[i] * (this.isMobile ? 1.5 : 1),
                        scale: 1,
                        scrollTrigger: {
                            trigger: this.heroParallax,
                            start: 'clamp(top bottom)',
                            end: 'bottom top',
                            scrub: true
                        }
                    })
                }
            }
        }
    }

    animateScaleCorner() {
        if (this.scaleCorner) {
            this.scaleCorner.forEach(element => {
                const tigger = element.dataset.trigger

                let triggerConfig = {}

                if (tigger === 'bottom') {
                    triggerConfig = {
                        start: 'clamp(top bottom)',
                        end: 'clamp(bottom top)'
                    }
                }


                gsap.fromTo(element, {
                    scaleY: .7
                }, {
                    scrollTrigger: {
                        trigger: element,
                        ...triggerConfig,
                        scrub: 1
                    },
                    scaleY: 0
                })
            });
        }
    }
}