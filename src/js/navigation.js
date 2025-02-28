import gsap from "gsap"

export const Navigation = (lenis) => {

	const burger = document.getElementById('burger')
	const headerMenu = document.querySelector('.header-menu')
	const closeMenu = document.querySelectorAll('.close-menu')
	const parentMenu = document.querySelectorAll('li.has-children')
	const bookingMenu = document.querySelectorAll('.booking-venue-trigger-list')
	const buttonReserveContainer = document.querySelector('.button-reserve')
	const bookingButton = document.querySelectorAll('.booking-venue')


	if (bookingButton) {
		bookingButton.forEach((item) => {
			const link = item.querySelector("a")

			// Attach a click event listener to each reservation element.
			link.addEventListener("click", (e) => {
				const bookingId = link.dataset.desc

				if (!bookingId) return

				e.preventDefault();
				umaiWidget.config({ apiKey: bookingId, widgetType: "reservation" });
				umaiWidget.openWidget();

				const umai = document.getElementById('umaiWidgetElement')

				return false;
			});


		})
	}


	let openBookingMenu = false



	const openMenu = (isBooking) => {
		const desktopCloseMenu = document.querySelector('header .close-menu')
		if (lenis) lenis.stop()
		if (innerWidth > 867) {
			desktopCloseMenu.classList.add('active')
		}
		burger.classList.add('active')
		headerMenu.classList.add('active')

		if (isBooking) headerMenu.classList.add("active-booking")

		gsap.to(headerMenu, {
			opacity: 1,
			duration: .4,
			ease: 'power4.inOut'
		})
	}


	if (bookingMenu) {
		bookingMenu.forEach(button => {
			button.addEventListener('click', () => {
				openBookingMenu = true
				buttonReserveContainer.classList.add('active')
				openMenu(true)
				document.querySelector(".close-main-menu").classList.remove('active')
			})
		})
	}

	if (parentMenu) {
		parentMenu.forEach((item) => {
			const link = item.querySelector('.has-children-link-wrapper')

			link.addEventListener('click', e => {
				e.preventDefault()
				const subChild = item.parentNode.querySelector("ul")

				if (subChild.classList.contains('active')) {
					subChild.classList.remove('active')
					link.classList.remove('active')
				} else {
					subChild.classList.add('active')
					link.classList.add('active')
				}
			})
		})
	}



	document.addEventListener('scroll', () => {
		const logo = document.querySelector("header .logo")
		const header = document.querySelector('header')
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

		if (innerWidth > 870) return

		if (scrollTop > 20) {
			logo.classList.add('active')
			header.classList.add('active')
		} else {
			header.classList.remove('active')
			logo.classList.remove('active')
		}
	})

	if (burger) {
		burger.addEventListener('click', () => {
			const desktopCloseMenu = document.querySelector('header .close-menu')
			if (lenis) lenis.stop()
			if (innerWidth > 867) {
				desktopCloseMenu.classList.add('active')
			}
			burger.classList.add('active')
			headerMenu.classList.add('active')
			gsap.to(headerMenu, {
				opacity: 1,
				duration: .4,
				ease: 'power4.inOut'
			})
		})
	}

	if (closeMenu) {
		closeMenu.forEach(item => {
			item.addEventListener('click', () => {
				burger.classList.remove('active')

				if (item.classList.contains('desktop') && innerWidth > 867) {
					item.classList.remove('active')
				} else {
					item.classList.remove('active')
				}


				if (lenis) lenis.start()
				headerMenu.classList.remove('active')
				// headerMenu.classList.remove("active-booking")


				closeMenu.forEach(c => c.classList.remove('active'))
				buttonReserveContainer.classList.remove('active')

				gsap.to(headerMenu, {
					opacity: 0,
					duration: .4,
					ease: 'power4.inOut',
					onComplete: () => {
						headerMenu.classList.remove("active-booking")
					}
				})
			})
		})

	}
}
