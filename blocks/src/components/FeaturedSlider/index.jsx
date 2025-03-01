import HeaderContentText, { attributes as HeaderContentTextAttr } from "../HeaderContentText";
import ButtonSlider from "../helper/ButtonSlider";
import Controller from "../helper/Controller";
import { getModelId, getNestedValue } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss"

export const attributes = {
    ...HeaderContentTextAttr,
    slider: ArraySchema([
        {
            title: TextSchema,
            location: TextSchema,
            image: ImageSchema,
            description: TextSchema,
        },

        {
            title: TextSchema,
            location: TextSchema,
            image: ImageSchema,
            description: TextSchema,
        }
    ])
}

export default function (props) {
    const sliderKey = getModelId('slider', props)
    const sliderItems = getNestedValue(props.attributes, sliderKey)
    const slider = () => sliderItems.map((_, index) => {
        const thumb = `slider.${index}.image`
        const title = `slider.${index}.title`
        const location = `slider.${index}.location`
        const description = `slider.${index}.description`

        return (
            <div className="slider-a swiper-slide">
                <Media set={thumb} {...props} className="parallax" />
                <div className="container content">
                    <Text className="content-a" tag="div" {...props} set={title} />
                    <Text className="content-b" tag="div" {...props} set={location} />
                    <Text className="content-c" tag="div" {...props} set={description} />
                </div>
            </div>
        )
    })
    return <section className="featrued-slider">

        <Controller {...props}>
            <div className="editor-wrapper">
                <div className="editor-wrapper-input">
                    <div className="label">Slider</div>
                    <ButtonSlider {...props} slider={sliderKey} nested={true} />
                </div>
            </div>
        </Controller>
        <div className="container">
            <HeaderContentText {...props} />
        </div>
        <div className="slider swiper">
            <div className="swiper-wrapper">
                {slider()}
            </div>
            <div className="navigation">
                <div className="swiper-button-prev nav">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74"><path fill="#F7F7F7" d="M36.71 73.42c20.274 0 36.71-16.436 36.71-36.71S56.984 0 36.71 0 0 16.436 0 36.71s16.436 36.71 36.71 36.71Z" /><path fill="#000" fill-rule="evenodd" d="M47.136 36.94 29.248 19.052l1.704-1.704L50.544 36.94 31.422 56.062l-1.704-1.704L47.136 36.94Z" clip-rule="evenodd" /></svg>
                </div>
                <div className="swiper-button-next nav">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 74 74"><path fill="#F7F7F7" d="M36.71 73.42c20.274 0 36.71-16.436 36.71-36.71S56.984 0 36.71 0 0 16.436 0 36.71s16.436 36.71 36.71 36.71Z" /><path fill="#000" fill-rule="evenodd" d="M47.136 36.94 29.248 19.052l1.704-1.704L50.544 36.94 31.422 56.062l-1.704-1.704L47.136 36.94Z" clip-rule="evenodd" /></svg>
                </div>

            </div>

        </div>
    </section>
}