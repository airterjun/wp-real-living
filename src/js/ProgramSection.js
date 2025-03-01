import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


export const Program = () => {
    const programSection = document.querySelector('.programs-section')

    if (!programSection) return

    const cards = programSection.querySelectorAll('.card-wrapper')
    const headerTitle = programSection.querySelector(".heading-title .container")
    const headerTitleBound = headerTitle.getBoundingClientRect()



    for (let i = 0; i <= 2; i++) {
        const cardOne = cards[i].querySelector('.card')
        const figure = cards[i].querySelector('figure')
        const boundOne = cardOne.getBoundingClientRect()


        cardOne.style.width = `${boundOne.width}px`
        cardOne.style.height = `${boundOne.height}px`

        figure.classList.add('will-animate')

        gsap.set(figure, {
            marginTop: boundOne.top * -1,
            marginLeft: boundOne.left * -1,
            x: headerTitleBound.left,
            y: headerTitleBound.top,
            width: headerTitleBound.width,
            height: headerTitleBound.height,
        })


        gsap.to(figure, {
            marginTop: 0,
            marginLeft: 0,
            x: 0,
            y: 0,
            width: boundOne.width,
            height: boundOne.height,
            scrollTrigger: {
                trigger: '.programs-section .heading',
                start: "top 80%",
                end: 'bottom center',
                scrub: 1
            }
        })
    }



    // cards.forEach((card, index) => {

    //     if (index != 0 || index != 1) {
    //         const bound = card.getBoundingClientRect()
    //         const rightCard = bound.left >= innerWidth / 2
    //         gsap.set(card, {
    //             yPercent: rightCard ? 70 : 10,
    //             // xPercent: rightCard ? -10 : 10
    //         })
    //     }
    // })

    // gsap.set(cardOne, {
    //     top: 0,
    //     x: (boundOne.left * -1),
    //     y: headerTitleBound.top,
    //     position: 'absolute',
    //     width: headerTitleBound.width,
    //     height: headerTitleBound.height
    // })

    ScrollTrigger.create({
        pin: ".programs-section .heading",
        trigger: ".programs-section",
        start: "top top",
        end: "bottom bottom",
    })




    gsap.to(headerTitle, {
        width: 0,
        scrollTrigger: {
            trigger: headerTitle,
            start: "top 80%",
            end: "top top",
            endTrigger: programSection,
            scrub: 1
        }
    })


    if (cards) {
        cards.forEach(card => {
            const bound = card.getBoundingClientRect()
            const rightCard = bound.left >= innerWidth / 2
            gsap.to(card, {
                yPercent: rightCard ? -10 : 10,
                xPercent: 0,
                scrollTrigger: {
                    trigger: card,
                    scrub: rightCard ? 1 : 3,
                    start: 'clamp(top bottom)',
                    end: 'clamp(bottom top)',
                }
            })
        })
    }



}