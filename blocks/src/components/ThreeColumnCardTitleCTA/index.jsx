import FooterCta, { attributes as FooterCtaAttr } from "../FooterCta";
import HeaderContentText, { attributes as HeaderContentTextAttr } from "../HeaderContentText";
import Controller from "../helper/Controller";
import { getNestedValue } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";
export const attributes = {
    cards: ArraySchema([
        {
            banner: ImageSchema,
            title: TextSchema,
            description: TextSchema
        },
        {
            banner: ImageSchema,
            title: TextSchema,
            description: TextSchema
        },
        {
            banner: ImageSchema,
            title: TextSchema,
            description: TextSchema
        }
    ]),
    ...HeaderContentTextAttr,
    ...FooterCtaAttr
}

export default function (props) {
    const listId = props.model ? `${props.model}.cards` : 'cards'
    const listItems = getNestedValue(props.attributes, listId)

    const card = () => listItems.map((_, index) => {
        const banner = `cards.${index}.banner`
        const title = `cards.${index}.title`
        const description = `cards.${index}.description`

        return (
            <div className="list">
                <Media set={banner} className="list_a item" {...props} />
                <Text set={title} className="list_b item b2" {...props} />
                <Text set={description} className="list_c item" {...props} />
            </div>
        )
    })
    return (
        <>
            <Controller {...props}>
                <fieldset>

                </fieldset>
            </Controller>

            <section className="three-column-card-title-cta">
                <div className="container content">
                    <HeaderContentText {...props} />
                    <div className="list-wrapper">
                        {card()}
                    </div>
                    <FooterCta {...props} fill={true} />
                </div>
            </section>
        </>

    )
}