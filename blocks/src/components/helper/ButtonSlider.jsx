import "./style/ButtonSlider.scss"
import React from "react";
import _ from "lodash"

export default function ButtonSlider(props) {
    const { edit, attributes, slider, button, set } = props
    if (edit) {
        const slides = _.get(attributes, slider)

        const buttonSlider = () => {
            if (slides) {
                return slides.map((item, index) => {
                    const active = attributes.selectedSlider === index ? "button active" : "button"
                    return (
                        <div className={active} onClick={() => {
                            props.setAttributes({
                                selectedSlider: index
                            })
                        }}>{index + 1}</div>
                    )
                })
            } else {
                return <></>
            }
        }


        const addItems = () => {
            const newSlides = _.cloneDeep(slides)
            newSlides.push(_.cloneDeep(newSlides[0]))
            let setData = null


            if (set) {
                setData = _.cloneDeep(attributes)
                _.set(setData, slider, newSlides)
            }

            console.log('newSlides', setData)
            props.setAttributes({
                ...set ? attributes : slides,
                [set ? set : slider]: set ? setData[set] : newSlides
            })
        }

        const deleteItem = () => {
            const selectedIndex = attributes.selectedSlider
            const newSlides = [...slides]
            newSlides.splice(selectedIndex, 1)
            props.setAttributes({
                [slider]: newSlides,
                selectedSlider: 0
            })
        }

        return (
            <>
                <div className="buttons-slider-container">
                    <div className="inner-container">
                        {!button ? buttonSlider() : null}
                        <div className="button button__action add" onClick={() => {
                            addItems()
                        }}>
                            <div className="icon">
                                +
                            </div>
                        </div>

                        {!button ?
                            <div className="button button__action delete" onClick={() => {
                                deleteItem()
                            }}>
                                <div className="icon">
                                    -
                                </div>
                            </div>
                            : null}
                    </div>
                </div>
            </>
        )
    } else {
        return <></>
    }
}