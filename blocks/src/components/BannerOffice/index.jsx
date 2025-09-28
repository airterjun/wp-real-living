import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss"


export const attributes = {
    banner: ImageSchema,
    title: TextSchema,
    description: TextSchema,
    contact: TextSchema
}


export default function (props) {
    return <BlockWrapper className="banner-office" {...props}>
        <BlockEditor {...props}>
            <div className="tab-item active" data-name="dekstop">
                <InputWrapper label="Banner">
                    <Media {...props} set="banner" />
                </InputWrapper>
                <InputWrapper label="Title">
                    <Text {...props} set="title" tag="div" />
                </InputWrapper>
                <InputWrapper label="Description">
                    <Text {...props} set="description" tag="div" />
                </InputWrapper>
                <InputWrapper label="Contact">
                    <Text {...props} set="contact" tag="div" />
                </InputWrapper>
            </div>
        </BlockEditor>
        <Media {...props} set="banner" className="parallax" />
        <div className="content">
            <Text {...props} set="title" tag="h2" />
            <Text {...props} set="description" tag="div" className="description" />
            <Text {...props} set="contact" tag="div" className="contact" />
        </div>
    </BlockWrapper>
}