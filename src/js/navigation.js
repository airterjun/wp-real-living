import gsap from "gsap"

export const Navigation = (lenis) => {
    const header = document.getElementById('main-header')
    const burger = document.getElementById('burger')
    const headerMenu = document.querySelector('.header-menu')
    const menuList = headerMenu.querySelectorAll('li')
    const tl = gsap.timeline({
        paused: true
    })

    tl.to(headerMenu, {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        ease: 'power4.inOut'
    }).to(menuList, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
    })

    burger.addEventListener('click', () => {


        header.classList.toggle('menu-active')

        if (burger.classList.contains('active')) {
            tl.reverse(1.5)
            burger.classList.remove('active')
            return
        }

        burger.classList.add('active')

        tl.play()
    })

}
