import Controller from "../helper/Controller";
import { getModelId, getNestedValue } from "../helper/Libs";
import LinkEditor from "../helper/LinkEditor";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ArraySchema } from "../Schema/array";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema, TextSchemaEmpty } from "../Schema/text";
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
            description: TextSchema,
            mobileTitle: TextSchemaEmpty
        },
        {
            title: TextSchema,
            description: TextSchema,
            mobileTitle: TextSchemaEmpty
        },
        {
            title: TextSchema,
            description: TextSchema,
            mobileTitle: TextSchemaEmpty
        },
        {
            title: TextSchema,
            description: TextSchema,
            mobileTitle: TextSchemaEmpty
        }
    ])
}

export default function (props) {
    const { type, disabledContent, disabledDescription } = props
    const listItems = getNestedValue(props.attributes, getModelId('list', props))

    const mobileEditor = () => listItems.map((_, index) => {
        const title = `list.${index}.mobileTitle`
        return <div className="input-container">
            <div className="label">Title {_.title}</div>
            <Text {...props} set={title} tag="div" className="input" />
        </div>
    })

    const listEl = () => listItems.map((_, index) => {
        const title = `list.${index}.title`
        const desc = `list.${index}.description`
        const titleMobile = `list.${index}.mobileTitle`
        return <div className="card-item-a">
            <IconArrow />
            <div className="card-item-a-a">
                <Text {...props} set={title} className="card-item-a-a-a desktop" tag="div" />
                <Text {...props} set={titleMobile} className="card-item-a-a-a mobile" tag="div" />
                <Text {...props} set={desc} className={`card-item-a-a-b ${editor ? '' : 'desktop'}`} tag="div" />
            </div>
        </div>
    })




    const footerContent = () => {


        if (!disabledContent) {
            return <div className="main-container columb-card">
                <div className="card-item">
                    {listEl()}
                </div>
                <Text className="text-top-button" set="textButton" {...props} tag="div" />
                <PrimaryButton {...props} />
            </div>
        }

    }

    return (
        <section className={`grid featured-title ${disabledContent ? 'no-footer' : ''} ${disabledDescription ? 'no-description' : ''}`}>
            <Controller {...props} getTitle="title">
                <div className="input-container">
                    <div className="label">Button</div>
                    <LinkEditor {...props} set="link" />
                </div>
                <div className="main-title">
                    Mobile Content
                </div>
                {mobileEditor()}
            </Controller>
            <div className={`main-container`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 250 235"><path stroke="#937E4E" stroke-miterlimit="10" stroke-width="2" d="M1 233.31V1h115.88v116.43c0 64-51.88 115.88-115.88 115.88ZM143.37 100.87V1h104.87c0 57.92-46.95 99.87-104.87 99.87ZM143.37 128.44h104.87v104.87c-57.92 0-104.87-46.95-104.87-104.87Z" /></svg>
                <Text className="title" set="title" {...props} tag="h2" />
                {!disabledDescription && <Text className="description" set="description" {...props} tag="div" />}
            </div>

            {footerContent()}
        </section>
    )
}