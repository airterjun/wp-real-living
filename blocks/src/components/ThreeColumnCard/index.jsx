import "./style.scss";
import Media from "../helper/Media"
import Controller from "../helper/Controller"
import Text from "../helper/Text";
import { TextSchema } from "../Schema/text";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import _ from "lodash";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ArraySchema } from "../Schema/array";
export const attributes = {
    cards: ArraySchema([
        {
            banner: ImageSchema,
            title: TextSchema,
            description: TextSchema,
            link: LinkSchmea
        },
        {
            banner: ImageSchema,
            title: TextSchema,
            description: TextSchema,
            link: LinkSchmea
        },
        {
            banner: ImageSchema,
            title: TextSchema,
            description: TextSchema,
            link: LinkSchmea
        }
    ]),
    title: TextSchema,
}

export default function (props) {
    const listId = props.model ? `${props.model}.cards` : 'cards'
    const listItems = _.get(props.attributes, listId)

    const card = () => listItems.map((_, index) => {
        const banner = `cards.${index}.banner`
        const title = `cards.${index}.title`
        const description = `cards.${index}.description`
        const link = `cards.${index}.link`

        return (
            <div className="list">
                <Media set={banner} className="list_a item" {...props} />
                <Text set={title} className="list_b item b2" {...props} />
                <Text set={description} className="list_c item" {...props} />
                <PrimaryButton {...props} set={link} />
            </div>
        )
    })
    return (
        <>
            <Controller {...props}>
                <fieldset>

                </fieldset>
            </Controller>

            <section className="three-column-card">
                <div className="container">
                    <Text set="title" className="list_b item h2" {...props} />
                    <div className="list-wrapper">
                        {card()}
                    </div>
                </div>
            </section>
        </>

    )
}