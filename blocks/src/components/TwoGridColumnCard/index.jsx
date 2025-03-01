import _ from "lodash";
import ButtonSlider from "../helper/ButtonSlider";
import Controller from "../helper/Controller";
import { getModelId } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";
const attributes = {
    title: TextSchema,
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
            },
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

    const listItems = _.get(props.attributes, getModelId('list', props))

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

            <section className="two-grid-column-card">
                <div className="container">
                    <div className="content">
                        <Text set="title" className="content-a" tag="h2" {...props} />
                        <div className="content-b">
                            {grid()}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}


export {
    attributes
};
