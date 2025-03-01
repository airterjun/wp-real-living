import "./style/ButtonSlider.scss"
import React from "react";
import _ from "lodash"
import { getBaseModelPath } from "./Libs";


let activeIndex = -1

export default function ButtonSlider(props) {
    const { edit, attributes, slider, button, set, nested } = props
    if (edit) {
        let slides = _.get(attributes, slider)

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
            const newSlides = _.cloneDeep(slides)


            if (nested) {
                const newAttr = structuredClone(attributes)
                newSlides.push(structuredClone(newSlides[0]))
                const rootPath = getBaseModelPath(slider)
                _.set(newAttr, slider, newSlides)

                props.setAttributes({
                    ...attributes,
                    [rootPath]: _.get(newAttr, rootPath)
                })

            } else {


                newSlides.push(_.cloneDeep(newSlides[0]))
                let setData = null

                if (set) {
                    setData = _.cloneDeep(attributes)
                    _.set(setData, slider, newSlides)
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
            const lists = _.get(clonedAttr, slider)
            lists.splice(selectedIndex, 1)

            const rootPath = getBaseModelPath(slider)

            props.setAttributes({
                ...attributes,
                [rootPath]: _.get(clonedAttr, rootPath)
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