export const Form = () => {
    const inputs = document.querySelectorAll("input")
    const textArea = document.querySelectorAll("textarea")



    const inputPositionWrapper = document.getElementById('position')

    if (inputPositionWrapper) {
        const urlParams = new URLSearchParams(window.location.search);
        const position = urlParams.get('position');
        const input = inputPositionWrapper.querySelector("input")

        if (position && input) {
            input.value = decodeURIComponent(position)
        }
    }


    const inputState = (selector) => {
        if (selector) {
            selector.forEach(input => {
                const value = input.value
                const wrapper = input.closest('.form-input-wrapper')
                let label = null


                if (input.type === 'date') {
                    input.classList.add('date-input')
                    input.type = 'text'
                }

                if (wrapper) {
                    label = wrapper.querySelector("label")
                }

                if (value && label) {
                    label.classList.add('hide-label')
                }


                input.addEventListener('focus', () => {


                    if (input.classList.contains('date-input')) {
                        input.type = 'date'
                    }

                    if (label && !input.value) {
                        label.classList.add('hide-label')
                    }
                })

                input.addEventListener('blur', () => {

                    if (input.classList.contains('date-input') && !input.value) {
                        input.type = 'text'
                    }

                    if (label && !input.value) {
                        label.classList.remove('hide-label')
                    }
                })

            })
        }
    }


    inputState(inputs)
    inputState(textArea)


}