import "./style/ButtonSlider.scss"
import React from "react";
import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";


let activeIndex = -1

export default function ButtonSlider(props) {
    const { edit, attributes, slider, button, set, nested, model } = props


    const listKey = model ? `${model}.${slider}` : slider

    if (edit) {
        let slides = getNestedValue(attributes, listKey)

        const buttonSlider = () => {
            if (slides) {
                return slides.map((item, index) => {
                    const active = attributes.selectedSlider === index ? "button active" : "button"
                    return (
                        <div className={active} onClick={() => {
                            activeIndex = index
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
            const newSlides = structuredClone(slides)


            if (nested) {
                const newAttr = structuredClone(attributes)
                newSlides.push(structuredClone(newSlides[0]))
                const rootPath = getBaseModelPath(listKey)
                setNestedValue(newAttr, listKey, newSlides)

                props.setAttributes({
                    ...attributes,
                    [rootPath]: getNestedValue(newAttr, rootPath)
                })

            } else {


                newSlides.push(structuredClone(newSlides[0]))
                let setData = null

                if (set) {
                    setData = structuredClone(attributes)
                    setNestedValue(setData, listKey, newSlides)
                }



                props.setAttributes({
                    ...set ? attributes : slides,
                    [set ? set : slider]: set ? setData[set] : newSlides
                })
            }
        }

        const deleteItem = () => {

            const selectedIndex = attributes.selectedSlider
            const clonedAttr = structuredClone(attributes)
            const lists = getNestedValue(clonedAttr, listKey)
            lists.splice(selectedIndex, 1)

            const rootPath = getBaseModelPath(listKey)

            props.setAttributes({
                ...attributes,
                [rootPath]: getNestedValue(clonedAttr, rootPath)
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
                            <div className={`button button__action delete`} onClick={() => {
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