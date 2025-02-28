import Lenis from 'lenis'
import gsap, { Power2, Power4 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { TextAnimation } from './js/text-animation'
import { ImageAnimation } from './js/image'
import { Tab } from './js/tab'
import { Animation } from './js/animation'
import { Navigation } from './js/navigation'
import { HomePageBannerAnimation } from './js/HomePageBanner'
import { Slider } from './js/slider'
import { MapVenue } from './js/map'
import { InstagramFeed } from './js/Instagram'
import { Careers } from './js/Careers'
import { Form } from './js/Form'

gsap.registerPlugin(ScrollTrigger)


document.addEventListener("DOMContentLoaded", () => {
	let lenis = null
	const header = document.querySelector('header')

	if (innerWidth > 900) {
		lenis = new Lenis({
			duration: 2,
			anchors: {
				offset: header.offsetHeight * -1,
			},
			prevent: (node) => node.id === 'umaiWidgetElement'

		})

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)

	}

	TextAnimation()

	ImageAnimation()


	new Tab()

	new Animation(gsap)

	Navigation(lenis)

	HomePageBannerAnimation()

	Slider()

	MapVenue()

	InstagramFeed()

	Careers()

	Form()

	if (innerWidth < 900) {

		if (window.location.hash) {
			let target = document.querySelector(window.location.hash);
			if (target) {
				setTimeout(() => {
					target.scrollIntoView({ behavior: "smooth" });
				}, 100); // Delay dikit biar smooth
			}
		}


		const links = document.querySelectorAll("a")

		if (links) {
			links.forEach(link => {
				link.addEventListener('click', e => {
					if (link.href.includes("#")) {
						e.preventDefault()
						console.log('link.href', link.href)
						const targetHash = link.href.split("#")
						let target = document.getElementById(targetHash[1]);
						const offset = document.querySelector("header .inner").offsetHeight
						if (target) {
							let targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
							window.scrollTo({ top: targetPosition, behavior: "smooth" });
						}


					}

				})
			})
		}


	}


})