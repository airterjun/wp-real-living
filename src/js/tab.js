import gsap, {Power4, Power3} from "gsap";

export class Tab {
    constructor() {

        this.tabs = document.querySelectorAll('.accordion-content')
        this.menu = '.accordion'
        this.content = '.accordion-wrapper'

        this.init()
    }

    init() {

        if (this.tabs) {
            this.tabs.forEach(item => {
                
                const menu = item.querySelector(this.menu)
                const content = item.querySelector(this.content)

                menu.addEventListener('click', () => {
                    if(item.classList.contains("selected")){
                        menu.classList.remove('active')
                        item.classList.remove('selected')
                        gsap.to(content, {
                            maxHeight: 0,
                            duration: .75,
                            ease: Power3.easeInOut
                        })
                        return
                    }


                    this.activatedContent(content)
                    menu.classList.add('active')
                    item.classList.add('selected')
                })
            })
        }
    }


    activatedContent(contents, index = 0) {

        const contentHeight = contents.scrollHeight

        this.tabs.forEach(item =>{

            const content = item.querySelector(this.content)
            const menu = item.querySelector(this.menu)
            menu.classList.remove("active")
            item.classList.remove('selected')

            gsap.to(content, {
                maxHeight: 0
            })

        })


        gsap.to(contents, {
            maxHeight: contentHeight,
            duration: 1,
            ease: Power3.easeInOut
        })
    }
}
