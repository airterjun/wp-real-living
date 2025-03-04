import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Navigation } from './js/navigation'
import { Animation } from './js/animation'
import { Program } from './js/ProgramSection'
import { Slider } from './js/Slider'

gsap.registerPlugin(ScrollTrigger)

/**
 * set for footer overlay
 */
const footer = document.getElementById('footer')
const mainContainer = document.querySelector('.main-container')
// mainContainer.style.marginBottom = `${footer.offsetHeight}px`


let lenis = null

lenis = new Lenis({
	duration: 3
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
	lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)




//  Logic

Navigation(lenis)

/**
 * Cretae page animation
 */
new Animation()


Program()


Slider()

function updateClock() {
	let now = new Date();
	let options = { timeZone: 'Europe/London', hour12: false, hour: '2-digit', minute: '2-digit' };
	let londonTime = new Intl.DateTimeFormat('en-GB', options).format(now) + ' GMT';
	document.getElementById('time-ticker').innerText = londonTime;
}

setInterval(updateClock, 1000);
updateClock();