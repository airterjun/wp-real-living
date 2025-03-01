import FooterCta, { attributes as FooterCtaAttr } from "../FooterCta";
import HeaderContentText, { attributes as HeaderContentTextAttr } from "../HeaderContentText";
import ButtonSlider from "../helper/ButtonSlider";
import Controller from "../helper/Controller";
import { getModelId, getNestedValue } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = {
    bottom_description: TextSchema,
    ...HeaderContentTextAttr,
    ...FooterCtaAttr,
    list: ArraySchema(
        [
            {
                title: TextSchema,
                description: TextSchema,
                thumb: ImageSchema
            },
            {
                title: TextSchema,
                description: TextSchema,
                thumb: ImageSchema
            }
        ]
    )
}

export default function (props) {

    const listItems = getNestedValue(props.attributes, getModelId('list', props))

    const grid = () => listItems.map((_, index) => {
        const keyTitle = `list.${index}.title`
        const keyDesc = `list.${index}.description`
        const thumb = `list.${index}.thumb`
        return (
            <div className="card-wrapper">
                <Media set={thumb} {...props} className="v-parallax" />
                <div className="card-wrapper-a">
                    <Text tag="h2" set={keyTitle} {...props} className="card-wrapper-a-a" />
                    <Text set={keyDesc} {...props} className="card-wrapper-a-b" />
                </div>
            </div>
        )
    })

    return (
        <>
            <Controller {...props}>
                <div className="inner card-list-editor-color">
                    <ButtonSlider slider="list" {...props} />
                </div>
            </Controller>

            <section className="two-grid-column-card-title-cta-alt">
                <div className="container">
                    <div className="content">
                        <HeaderContentText {...props} />
                        <div className="content-d">
                            {grid()}
                        </div>
                        <FooterCta {...props} fill={true} />
                    </div>
                </div>
            </section>
        </>

    )
}