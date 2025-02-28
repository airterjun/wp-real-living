import gsap, { Power4 } from 'gsap'

export const ImageAnimation = () => {
	new ImageEffect()
}


export const ImageParallaxZoom = (selector) => {
	if (selector) {
		selector.forEach(parallax => {
			gsap.from(parallax, {
				scrollTrigger: {
					trigger: parallax,
					start: 'clamp(top bottom)', // when the top of the trigger hits the top of the viewport
					scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
					end: 'bottom top'
				},
				scale: 1.2
			})
		})
	}
}

class ImageEffect {
	constructor() {
		this.init()
	}

	init() {
		this.masking()
		this.zoomParallax()

		this.parallaxImage()
	}

	masking() {
		const maskingContainer = document.querySelectorAll('.reveal')

		if (maskingContainer) {
			maskingContainer.forEach(item => {

				const image = item.querySelector('img')

				gsap.set(image, {
					clipPath: 'inset(0% 99% 0% 0%)',
					scale: 1.2
				})

				gsap.to(image, {
					scrollTrigger: {
						trigger: item,
						start: 'top bottom', // when the top of the trigger hits the top of the viewport
						end: 'bottom 90%'
					},
					scale: 1,
					duration: 1,
					ease: 'power2.inOut',
					clipPath: 'inset(0% 0% 0% 0%)',
				})
			})
		}
	}


	parallaxImage(elm) {
		const cover = document.querySelectorAll(".wp-block-cover")
		const wideBanner = document.querySelectorAll(".wide-banner")
		const verticalParallax = document.querySelectorAll(".v-parallax")


		const animate = (images) => {
			if (images) {
				images.forEach(item => {
					let trigger = item
					let image = item.querySelector('img')
					const svg = item.querySelector('svg')
					const parallaxContainer = item.querySelector('.parallax--content')

					if (parallaxContainer) {
						image = parallaxContainer
					}

					if (!image && svg) {
						image = svg
					}

					if (!image.classList.contains('no-scale') && !item.classList.contains('no-scale')) {

						if (innerWidth > 800) {
							gsap.set(image, {
								scale: 1.35
							})
						}
					}



					const offset = (image.offsetHeight || window.innerHeight) * -0.2

					item.setAttribute('data-offset', offset)

					gsap.from(image, {
						scrollTrigger: {
							trigger: trigger,
							start: 'top bottom', // when the top of the trigger hits the top of the viewport
							scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
							end: 'bottom top'
						},
						y: offset
					})
				})
			}
		}


		animate(cover)
		animate(wideBanner)
		animate(verticalParallax)

	}


	zoomParallax() {
		const elements = document.querySelectorAll('.parallax')

		if (elements) {
			elements.forEach(item => {
				const image = item.querySelector('img')
				gsap.to(image, {
					scrollTrigger: {
						trigger: item,
						start: 'clamp(top bottom)', // when the top of the trigger hits the top of the viewport
						scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar,
						end: 'bottom top'
					},
					scale: 1.1
				})
			})
		}

	}

}
