import ButtonSlider from "../helper/ButtonSlider";
import Controller from "../helper/Controller";
import { getModelId, getNestedValue } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

export const attributes = {
    card: ArraySchema([
        {
            thumbnail: ImageSchema,
            text_1: TextSchema,
            text_2: TextSchema,
            text_3: TextSchema,
            text_4: TextSchema,
            text_5: TextSchema,
            text_6: TextSchema,
            text_7: TextSchema,
            text_8: TextSchema
        },
        {
            thumbnail: ImageSchema,
            text_1: TextSchema,
            text_2: TextSchema,
            text_3: TextSchema,
            text_4: TextSchema,
            text_5: TextSchema,
            text_6: TextSchema,
            text_7: TextSchema,
            text_8: TextSchema
        }
    ]),

    banner: ImageSchema,
    title_background: ImageSchema,
    title: TextSchema,
    description: TextSchema
}



export default function (props) {


    const listItems = getNestedValue(props.attributes, getModelId('card', props))

    const cards = () => listItems.map((_, i) => {
        const t1 = `card.${i}.text_1`
        const t2 = `card.${i}.text_2`
        const t3 = `card.${i}.text_3`
        const t4 = `card.${i}.text_4`
        const t5 = `card.${i}.text_5`
        const t6 = `card.${i}.text_6`
        const t7 = `card.${i}.text_7`
        const t8 = `card.${i}.text_8`
        const thumb = `card.${i}.thumbnail`

        return (
            <div className="teams-cards-item">
                <div className="group section-1">
                    <div className="content">
                        <Text tag="h2" className="t-1" set={t1} {...props} />
                        <Text set={t2} {...props} className="t-2" tag="div" />
                        <Text set={t3} {...props} className="t-3" tag="div" />
                    </div>
                    <Media set={thumb} {...props} className="parallax" />
                </div>
                <div className="group section-2">
                    <div className="content">
                        <div className="icon">
                            <IconArrow />
                        </div>
                        <Text {...props} set={t4} className="t-1" tag="div" />
                    </div>
                    <div className="content">
                        <div className="icon">
                            <IconArrow />
                        </div>
                        <Text {...props} set={t5} className="t-1" tag="div" />
                    </div>
                    <div className="content">
                        <div className="icon">
                            <IconArrow />
                        </div>
                        <Text {...props} set={t6} className="t-1" tag="div" />
                    </div>
                </div>

                <div className="group section-3">
                    <Text {...props} set={t7} className="t-1" tag="div" />
                    <Text {...props} set={t8} className="t-1" tag="div" />
                </div>
            </div>
        )
    })




    return (
        <>
            <Controller {...props}>
                <div className="gallery-list-editor">
                    <ButtonSlider slider="card" {...props} />
                </div>
            </Controller>
            <section className="teams">
                <div className="decor decor-1"></div>
                <div className="decor decor-2"></div>

                <div className="header">
                    <Media {...props} set="banner" className="parallax" />
                    <div className="header-content">
                        <IconArrow />
                        <Text {...props} set="title" tag="div" />
                    </div>
                </div>
                <div className="title">
                    <Text {...props} set="title" tag="h2" />
                    <Media {...props} set="title_background" className="parallax" />
                </div>
                <div className="teams-cards">
                    {cards()}
                </div>
            </section>
        </>
    )
}