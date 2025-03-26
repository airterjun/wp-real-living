import ButtonSlider from "../helper/ButtonSlider";
import Controller from "../helper/Controller";
import { getModelId, getNestedValue } from "../helper/Libs";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";
const attributes = {
    list: ArraySchema(
        [
            {
                title: TextSchema,
                description: TextSchema,
            },
            {
                title: TextSchema,
                description: TextSchema,
            },
            {
                title: TextSchema,
                description: TextSchema,
            },
            {
                title: TextSchema,
                description: TextSchema,
            }
        ]
    )
}

export default function (props) {

    const listItems = getNestedValue(props.attributes, getModelId('list', props))

    const grid = () => listItems.map((_, index) => {
        const keyTitle = `list.${index}.title`
        const keyDesc = `list.${index}.description`
        return (
            <div className="card-wrapper">
                <div className="card-wrapper-a">
                    <div className="icon">
                        <IconArrow />
                    </div>
                    <Text tag="h2" set={keyTitle} {...props} />
                </div>
                <div className="card-wrapper-b">
                    <Text set={keyDesc} {...props} className="description" />
                </div>
            </div>
        )
    })

    return (
        <>
            <Controller {...props}>
                <div className="form-wrapper">
                    <details>
                        <summary className="main-title">
                            {props.section ? `Section ${props.section}` : 'Grid Column Card'}
                        </summary>
                        <div className="input-container">
                            <ButtonSlider slider="list" label="title" nested={true} {...props} />
                        </div>
                    </details>
                </div>
            </Controller>

            <section className="two-grid-column-card">
                <div className="content">
                    {grid()}
                </div>
            </section>
        </>

    )
}


export {
    attributes
};
