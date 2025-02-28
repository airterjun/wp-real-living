import _ from 'lodash'
import gsap, {Power2, Power4} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const TextAnimation = () => {
	new TextAnim()
}


class TextAnim {
	constructor() {

		this.init()
	}


	init() {
		this.wordSplit = document.querySelectorAll('.split-animation-fade')
		this.revealWorld = document.querySelectorAll('.word-reveal')
		this.staggerText = document.querySelectorAll('section')
		// this.primaryButtonRound = document.querySelectorAll('.primary-button')

		const staggers = ['p', 'h3','h4', 'h5', '.show-up', 'ul']


		if(this.staggerText){
			this.staggerText.forEach(sec =>{
				staggers.forEach(item =>{
					const el = sec.querySelectorAll(item)
		
					if(el){
						el.forEach(e =>{
							e.classList.add('stagger')
						})
					}
				})
			})
		}


		this.wordSplitCollection = []
		this.word()
		this.infinite()
		this.wordReveal()
		this.staggerItems()
		// this.primaryButton()
	}

	word() {

		if (this.wordSplit) {
			this.wordSplit.forEach(wordEl => {
				const text = wordEl.innerText
				this.wordSplitCollection.push({
					id: _.uniqueId(),
					text: text
				})

				wordEl.innerHTML = ''

				for (let i = 0; i < text.length; i++) {
					wordEl.innerHTML += `<span>${text[i] === '' ? '&nbsp;' : text[i]}</span>`
				}

				const child = wordEl.querySelectorAll('span')

				gsap.to([...child], {
					scrollTrigger: {
						trigger: wordEl,
						start: 'top bottom', // when the top of the trigger hits the top of the viewport
						scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
						end: `top 50%`
					},
					opacity: 1,
					stagger: 0.1,
					x: 0
				})
			})
		}

	}

	infinite() {
		const infinite = document.querySelectorAll('.infinite-running-text')

		if (infinite) {
			infinite.forEach(item => {
				const text = item.querySelector('.infinite-running-text__content')

				if (text) {
					const wrapper = document.createElement('div')
					wrapper.classList.add('infinite__wrapper')
					item.appendChild(wrapper)

					const bound = text.getBoundingClientRect()
					const width = bound.width
					const container = innerWidth * 2
					const needClones = Math.round(container / width)

					if (width < (innerWidth * 2)) {
						for (let i = 0; i <= (needClones * 2); i++) {
							const clonedDiv = text.cloneNode(true)
							clonedDiv.classList.add('cloned')
							wrapper.appendChild(clonedDiv)
						}
					} else {
						for (let i = 0; i <= 2; i++) {
							const clonedDiv = text.cloneNode(true)
							clonedDiv.classList.add('cloned')
							wrapper.appendChild(clonedDiv)
						}
					}

					text.remove()
					const move = width * needClones / 2


					setTimeout(() => {

						for (let i = 0; i < wrapper.children.length; i++) {
							wrapper.children[i].style.maxWidth = `${wrapper.children[0].clientWidth}px`
						}

						gsap.to(wrapper, {
							x: wrapper.children[0].clientWidth * -1,
							repeat: -1,
							duration: move * (innerWidth > 700 ? 0.02 : 0.08),
							ease: 'none'
						})
					}, 300)
					//
					//
					gsap.to(item, {
						scrollTrigger: {
							trigger: item,
							start: 'top bottom', // when the top of the trigger hits the top of the viewport
							scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
							end: `bottom top`
						},

						xPercent: -40
					})
				}
			})
		}
	}

	wordReveal() {
		if (this.revealWorld) {
			this.revealWorld.forEach(item => {
				const text = item.innerText.split(' ')

				item.innerHTML = ''
				for (let i = 0; i < text.length; i++) {
					let content = `${text[i]}`
					if (text[i].includes('\n')) {
						const breakContent = text[i].split('\n')

						breakContent.forEach((b, index, array) => {
							if (index !== array.length - 1) {
								item.innerHTML += `<span class="reveal-content"><span class="reveal-content__value">${b} &nbsp;</span></span><br/>`
							} else {
								item.innerHTML += `<span class="reveal-content"><span class="reveal-content__value">${b} &nbsp;</span></span>`
							}
						})

					} else {
						item.innerHTML += `<span class="reveal-content"><span class="reveal-content__value">${content} &nbsp;</span></span>`
					}

				}

				item.classList.add('active')

				const content = item.querySelectorAll('.reveal-content__value')

				gsap.to([...content], {
					scrollTrigger: item,
					y: 0,
					opacity: 1,
					duration: 2,
					stagger: 0.1,
					ease: Power2.easeInOut
				})

			})
		}
	}

	staggerItems() {
		if (this.staggerText) {
			const stagger = document.querySelectorAll('.stagger')
			stagger.forEach(item => {

				gsap.to(item,{
						y: 0,
						opacity: 1,
						duration: 1,
						stagger: 0.1,
						scrollTrigger: {
							trigger: item,
							start: 'top bottom',
							end: 'bottom top',
							marker: true
						},
						ease: 'Power4.inOut'
					}
				)
			})

		}
	}

	primaryButton() {
		if (this.primaryButtonRound) {
			this.primaryButtonRound.forEach(button => {
				const buttonWidth = button.clientWidth
				const buttonHeight = button.clientHeight

				button.style.maxWidh = `${buttonHeight}px`

				gsap.to(button, {
					y: 0,
					opacity: 1,
					scrollTrigger: button,
					maxWidth: `${buttonWidth + 60}px`,
					scale: 1,
					delay: .2,
					duration: 2,
					ease: Power2.easeInOut
				})

			})
		}
	}

}
