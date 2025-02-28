export const Careers = () => {
    const buttonsApply = document.querySelectorAll('.career .button-apply')

    console.log('buttonsApply', buttonsApply)

    if (buttonsApply) {
        buttonsApply.forEach(item => {
            item.addEventListener('click', async () => {
                const form = item.dataset.form

                if (form) {
                    console.log('get-form')
                    const newPopup = document.createElement('div')
                    newPopup.classList.add('job-form')
                    const result = await fetch(form)
                    const textHtml = await result.text()

                    const parser = new DOMParser();
                    const doc = parser.parseFromString(textHtml, 'text/html');
                    const resHTML = doc.querySelector('main');
                    if (resHTML) {
                        newPopup.innerHTML = resHTML.innerHTML

                        document.body.appendChild(newPopup)
                    }

                }
            })
        })
    }
}