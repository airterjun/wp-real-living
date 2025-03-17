import Controller from "../helper/Controller";
import { getModelId, getNestedValue } from "../helper/Libs";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ArraySchema } from "../Schema/array";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

export const attributes = {
    title: TextSchema,
    description: TextSchema,
    textButton: TextSchema,
    link: LinkSchmea,
    list: ArraySchema([
        {
            title: TextSchema,
            description: TextSchema
        },
        {
            title: TextSchema,
            description: TextSchema
        },
        {
            title: TextSchema,
            description: TextSchema
        }
    ]),
    listMobile: ArraySchema([
        {
            title: TextSchema,
            description: TextSchema
        },
        {
            title: TextSchema,
            description: TextSchema
        },
        {
            title: TextSchema,
            description: TextSchema
        }
    ]),

}

export default function (props) {

    const listItems = getNestedValue(props.attributes, getModelId('list', props))


    const mobileEditor = () => listItems.map((_, index) => {
        const title = `listMobile.${index}.title`
        const desc = `listMobile.${index}.description`
        return <div className="input">
            <Text {...props} set={title} className="card-item-a-a-a" tag="div" />
            <Text {...props} set={desc} className="card-item-a-a-b" tag="div" />
        </div>
    })


    const listEl = (listing = 'list') => listItems.map((_, index) => {
        const title = `${listing}.${index}.title`
        const desc = `${listing}.${index}.description`
        return <div className="card-item-a">
            <IconArrow />
            <div className="card-item-a-a">
                <Text {...props} set={title} className="card-item-a-a-a" tag="div" />
                <Text {...props} set={desc} className="card-item-a-a-b" tag="div" />
            </div>
        </div>
    })

    return (
        <section className="featured-title-2">
            <Controller {...props}>
                <div className="form-wrapper">
                    <div className="input-container">
                        {mobileEditor()}
                    </div>
                </div>
            </Controller>
            <div className="main-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 250 235"><path stroke="#937E4E" stroke-miterlimit="10" stroke-width="2" d="M1 233.31V1h115.88v116.43c0 64-51.88 115.88-115.88 115.88ZM143.37 100.87V1h104.87c0 57.92-46.95 99.87-104.87 99.87ZM143.37 128.44h104.87v104.87c-57.92 0-104.87-46.95-104.87-104.87Z" /></svg>
                <Text className="title" set="title" {...props} tag="h2" />
                <Text className="description" set="description" {...props} tag="div" />
            </div>
            <div className="main-container columb-card">
                <div className="card-item desktop">
                    {listEl()}
                </div>
                {!props.edit &&
                    <div className="card-item mobile">
                        {listEl('listMobile')}
                    </div>}
                <PrimaryButton {...props} />
            </div>
        </section>
    )
}