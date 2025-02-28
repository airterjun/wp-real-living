import gsap from "gsap"

class Carousel {

    /*** CONSTRUCTOR ***/

    constructor(options = {}) {
        // our options
        this.options = {
            // slider state and values
            // the div we are going to translate
            element: options.element,
            // easing value, the lower the smoother
            easing: options.easing || 0.1,
            // translation speed
            // 1: will follow the mouse
            // 2: will go twice as fast as the mouse, etc
            dragSpeed: options.dragSpeed || 1,
            // duration of the in animation
            duration: options.duration || 750,
        }

        // if we are currently dragging
        this.isMouseDown = false
        // if the slider is currently translating
        this.isTranslating = false

        // current position
        this.currentPosition = 0
        // drag start position
        this.startPosition = 0
        // drag end position
        this.endPosition = 0

        // slider translation
        this.translation = 0

        this.animationFrame = null

        this.planeNumber = 0
        this.currentPage = 0
        this.actualPage = 0
        this.oldPage = 0;
        this.percentage = 0;

        this.sliders = this.options.element.querySelectorAll('.carousel__plane')
        this.sliderWidths = [];

        const lastRect = this.sliders[this.sliders.length - 1].getBoundingClientRect()
        this.maxTrans = (lastRect.left) - (window.innerWidth / 2) + (lastRect.width / 2);
        console.log(this.maxTrans)

        for (let slider of this.sliders) {
            this.sliderWidths.push(slider.clientWidth);
        }

        // set up the slider
        this.setupSlider()
    }

    /*** HELPERS ***/

    // lerp function used for easing
    lerp(value1, value2, amount) {
        amount = amount < 0 ? 0 : amount
        amount = amount > 1 ? 1 : amount
        return (1 - amount) * value1 + amount * value2
    }

    // return our mouse or touch position
    getMousePosition(e) {
        var mousePosition
        if (e.targetTouches) {
            if (e.targetTouches[0]) {
                mousePosition = [e.targetTouches[0].clientX, e.targetTouches[0].clientY]
            } else if (e.changedTouches[0]) {
                // handling touch end event
                mousePosition = [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            } else {
                // fallback
                mousePosition = [e.clientX, e.clientY]
            }
        } else {
            mousePosition = [e.clientX, e.clientY]
        }

        return mousePosition
    }

    // set the slider boundaries
    // we will translate it horizontally in landscape mode
    // vertically in portrait mode
    setBoundaries() {
        let planes = this.options.element
        let planeNumber = planes.childElementCount

        this.planeNumber = planeNumber

        if (window.innerWidth > 768) {
            planes.style.width = planes.querySelector('.carousel__plane').clientWidth * planeNumber
        }

        // landscape
        this.boundaries = {
            max: -this.maxTrans,
            min: 0,
            sliderSize: this.options.element.clientWidth,
            referentSize: window.innerWidth,
        }

        // set our slider direction
        this.direction = 0
    }

    /*** HOOKS ***/

    // this is called once our mousedown / touchstart event occurs and the drag started
    onDragStarted() {
    }

    // this is called while we are currently dragging the slider
    onDrag() {
        const currentPage = Math.ceil(this.percentage * this.planeNumber)

        if (currentPage > 0) {
            this.oldPage = this.currentPage
            this.currentPage = currentPage - 1
        }
    }

    updateProgress() {
        this.percentage = this.currentPosition / this.boundaries.max

        if (this.progress != null) {
            gsap.to(this.progress, {
                duration: .5,
                width: (this.percentage * 100) + '%'
            })
        }
    }

    // this is called once our mouseup / touchend event occurs and the drag started
    onDragEnded() {
    }

    // this is called continuously while the slider is translating
    onTranslation() {
    }

    // this is called once the translation has ended
    onTranslationEnded() {
    }

    // this is called before our slider has been resized
    onBeforeResize() {
    }

    // this is called after our slider has been resized
    onSliderResized() {
    }

    /*** ANIMATIONS ***/

    // this will translate our slider HTML element and set up our hooks
    translateSlider(translation, skew, title) {
        translation = Math.floor(translation * 100) / 100

        // should we translate it horizontally or vertically?
        var direction = this.direction === 0 ? "translateX" : "translateY"
        // apply translation
        this.options.element.style.transform = direction + "(" + translation + "px) skewX( " + skew + "deg)"


        var titles = this.options.element.querySelectorAll('.plane__title')

        titles.forEach((el) => {
            el.style.transform = direction + "(" + title + "px)"
        })

        // if the slider translation is different than the translation to apply
        // that means the slider is still translating
        if (this.translation !== translation) {
            // hook function to execute while we are translating
            this.onTranslation()
        } else if (this.isTranslating && !this.isMouseDown) {
            // if those conditions are met, that means the slider is no longer translating
            this.isTranslating = false

            // hook function to execute after translation has ended
            this.onTranslationEnded()
        }

        // finally set our translation
        this.translation = translation
    }

    // this is our request animation frame loop where we will translate our slider
    animate() {
        // interpolate values
        var translation = this.lerp(this.translation, this.currentPosition, this.options.easing)
        var skew = 0
        var title = (this.translation - this.currentPosition) / 10

        if (this.options.element.classList.contains('full')) {
            skew = 0
        }

        this.updateProgress()

        // apply our translation
        this.translateSlider(translation, skew, title)

        this.animationFrame = requestAnimationFrame(this.animate.bind(this))
    }

    next() {
        if (this.currentPage < this.planeNumber - 1) {
            this.oldPage = this.currentPage
            this.navigate(++this.currentPage)
        }
    }

    previous() {
        if (this.currentPage > 0) {
            this.oldPage = this.currentPage
            this.navigate(--this.currentPage)
        }
    }

    navigate(page) {
        this.navigating = true

        let translation = this.currentPosition

        const el = this.sliders[this.currentPage]
        const { left, width } = el.getBoundingClientRect()

        if (this.oldPage < this.currentPage) {
            translation -= (left + width / 2) - (window.innerWidth / 2);
        } else {
            translation -= (left + width / 2) - (window.innerWidth / 2);

            if (translation > 0) {
                translation = 0;
            }
        }

        // let translation = (this.boundaries.max / this.planeNumber) * page

        // if (page > 1 && page < this.planeNumber) {
        //     translation += 60
        // }

        this.currentPosition = translation
        this.endPosition = translation

        this.navigating = false

        this.updateProgress()
    }

    /*** EVENTS ***/

    // on mouse down or touch start
    onMouseDown(e) {
        // start dragging
        this.isMouseDown = true

        // apply specific styles
        this.options.element.classList.add("dragged")

        // get our touch/mouse start position
        var mousePosition = this.getMousePosition(e)
        // use our slider direction to determine if we need X or Y value
        this.startPosition = mousePosition[this.direction]

        // drag start hook
        this.onDragStarted(mousePosition)
    }

    // on mouse or touch move
    onMouseMove(e) {
        // if we are not dragging, we don't do nothing
        if (!this.isMouseDown) return

        // get our touch/mouse position
        var mousePosition = this.getMousePosition(e)

        // get our current position
        this.currentPosition = this.endPosition + ((mousePosition[this.direction] - this.startPosition) * this.options.dragSpeed)

        // if we're not hitting the boundaries
        if (this.currentPosition > this.boundaries.min && this.currentPosition < this.boundaries.max) {
            // if we moved that means we have started translating the slider
            this.isTranslating = true
        } else {
            // clamp our current position with boundaries
            this.currentPosition = Math.min(this.currentPosition, this.boundaries.min)
            this.currentPosition = Math.max(this.currentPosition, this.boundaries.max)
        }

        // drag hook
        this.onDrag(mousePosition)
    }

    // on mouse up or touchend
    onMouseUp(e) {
        // we have finished dragging
        this.isMouseDown = false

        // remove specific styles
        this.options.element.classList.remove("dragged")

        // update our end position
        this.endPosition = this.currentPosition

        // send our mouse/touch position to our hook
        var mousePosition = this.getMousePosition(e)

        // drag ended hook
        this.onDragEnded(mousePosition)
    }

    // on resize we will need to apply old translation value to new sizes
    onResize() {
        this.onBeforeResize()

        // get our old translation ratio
        var ratio = this.translation / this.boundaries.sliderSize

        // reset boundaries and properties bound to window size
        this.setBoundaries()

        // reset all translations
        this.options.element.style.transform = "tanslate3d(0, 0, 0)"

        // calculate our new translation based on the old translation ratio
        var newTranslation = ratio * this.boundaries.sliderSize
        // clamp translation to the new boundaries
        newTranslation = Math.min(newTranslation, this.boundaries.min)
        newTranslation = Math.max(newTranslation, this.boundaries.max)

        // apply our new translation
        this.translateSlider(newTranslation)

        // reset current and end positions
        this.currentPosition = newTranslation
        this.endPosition = newTranslation

        // call our resize hook
        this.onSliderResized()
    }

    /*** SET UP AND DESTROY ***/

    // set up our slider
    // init its boundaries, add event listeners and start raf loop
    setupSlider() {
        this.setBoundaries()

        let el = this.options.element

        this.parent = el.closest('.section')
        this.progress = this.parent.querySelector('.progress-completed')


        // event listeners

        // mouse events
        el.addEventListener("mousemove", this.onMouseMove.bind(this), {
            passive: true,
        })
        el.addEventListener("mousedown", this.onMouseDown.bind(this))
        el.addEventListener("mouseup", this.onMouseUp.bind(this))

        // touch events
        el.addEventListener("touchmove", this.onMouseMove.bind(this), {
            passive: true,
        })
        el.addEventListener("touchstart", this.onMouseDown.bind(this), {
            passive: true,
        })
        el.addEventListener("touchend", this.onMouseUp.bind(this))

        // resize event
        window.addEventListener("resize", this.onResize.bind(this))

        // launch our request animation frame loop
        this.animate()
    }

    // will be called silently to cleanly remove the slider
    destroySlider() {
        let el = this.options.element

        // remove event listeners

        // mouse events
        el.removeEventListener("mousemove", this.onMouseMove, {
            passive: true,
        })
        el.removeEventListener("mousedown", this.onMouseDown)
        el.removeEventListener("mouseup", this.onMouseUp)

        // touch events
        el.removeEventListener("touchmove", this.onMouseMove, {
            passive: true,
        })
        el.removeEventListener("touchstart", this.onMouseDown, {
            passive: true,
        })
        el.removeEventListener("touchend", this.onMouseUp)

        // resize event
        window.removeEventListener("resize", this.onResize)

        // cancel request animation frame
        cancelAnimationFrame(this.animationFrame)
    }

    // call this method publicly to destroy our slider
    destroy() {
        // destroy everything related to the slider
        this.destroySlider()
    }

}

export default Carousel
