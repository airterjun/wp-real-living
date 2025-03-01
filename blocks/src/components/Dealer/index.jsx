import ButtonSlider from "../helper/ButtonSlider";
import Controller from "../helper/Controller";
import { getModelId, getNestedValue } from "../helper/Libs";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ArraySchema } from "../Schema/array";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";

import "./style.scss";

export const attributes = {
    title: TextSchema,
    dealer: ArraySchema([
        {
            name: TextSchema,
            address: TextSchema,
            map: LinkSchmea
        }
    ])
}

export default function (props) {
    const sliderKey = getModelId('dealer', props)
    const sliderItems = getNestedValue(props.attributes, sliderKey)
    const list = () => sliderItems.map((_, index) => {
        const name = `dealer.${index}.name`
        const address = `dealer.${index}.address`
        const buttonMap = `dealer.${index}.map`
        return (
            <div className="location-item">
                <Text {...props} set={name} tag="div" className="title" />
                <div className="address">
                    <Text {...props} set={address} multiline="p" />
                </div>
                <PrimaryButton {...props} set={buttonMap} fill={true} />
            </div>
        )
    })
    return (
        <section className="dealer-location">
            <Controller {...props} >
                <div className="editor-wrapper">
                    <div className="editor-wrapper-input">
                        <div className="label">Slider</div>
                        <ButtonSlider {...props} slider={sliderKey} nested={true} />
                    </div>
                </div>
            </Controller>
            <div className="container">
                <Text {...props} set="title" tag="div" className="main-title" />
                <div className="location">
                    {list()}
                </div>
            </div>
        </section>
    )
}