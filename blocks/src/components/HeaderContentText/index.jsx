import Text from "../helper/Text"
import { TextSchema } from "../Schema/text"
import "./style.scss"


export const attributes = {
    label: TextSchema,
    title: TextSchema,
    description: TextSchema
}

export default function (props) {
    return <div className="header-content">
        <Text set="label" className="header-content-a" tag="div" {...props} />
        <div className="header-content-b">
            <Text set="title" tag="h2" className="header-content-b-a h2" {...props} />
            <Text set="description" tag="div" className="header-content-b-b" {...props} />
        </div>
    </div>
}