import Text from "../helper/Text"
import PrimaryButton from "../PrimaryButton/PrimaryButton"
import { LinkSchmea } from "../Schema/linkSchema"
import { TextSchema } from "../Schema/text"
import "./style.scss"

export const attributes = {
    bottom_description: TextSchema,
    link: LinkSchmea,
}

export default function (props) {
    const { fill } = props
    return <div className="footer-cta">
        <Text set="bottom_description" className="footer-cta-e" tag="div" {...props} />
        <PrimaryButton {...props} fill={fill} />
    </div>
}