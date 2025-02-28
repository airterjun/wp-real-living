import gsap, {Power4, Power3} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Model = () => {
	new ModelClass()
}

class ModelClass {
	constructor() {
		this.sliderIndex = 0
		this.modeModelsItem = document.querySelectorAll('.more-model__item')

		this.specification()

		this.init()
	}

	init() {
		this.modeModels()
	}

	specification(){
		const buttonSpec = document.querySelector('.button-spec')
		const detailSpec = document.querySelector('.post-detail-model__content')
		const buttonClose = document.querySelector('.close-model-spec')

		if(buttonSpec){
			buttonSpec.addEventListener('click', ()=>{
				if(detailSpec.classList.contains("active")){
					detailSpec.classList.remove('active')
					buttonSpec.classList.remove('active')
				}else{
					detailSpec.classList.add('active')
					buttonSpec.classList.add('active')
				}
			})

			buttonClose.addEventListener('click', ()=>{
				detailSpec.classList.remove('active')
				buttonSpec.classList.remove('active')
			})
		}
	}



	modeModels() {
		if (!this.modeModelsItem) return

		this.modeModelsItem.forEach(item =>{
			item.addEventListener('mousemove', event=>{
				const img = item.querySelector('h3')
				img.classList.add('active')
				const mouseX = event.clientX;
				const mouseY = event.clientY;
				img.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
				img.style.opacity = 1

				console.log('Mouse position: X = ' + mouseX + ', Y = ' + mouseY);


			})

			item.addEventListener('mouseout', event=>{
				const img = item.querySelector('h3')
				img.classList.remove('active')
				img.style.opacity = 0
			})
		})

	}
}
