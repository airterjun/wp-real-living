import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = {
    title: TextSchema,
    description: TextSchema,
    form: TextSchema,
    background: ImageSchema
}


export default function (props) {
    return (
        <BlockWrapper className="contact-form" id="inquiry" {...props}>
            <BlockEditor {...props}>
                <div className="tab-item active" data-name="dekstop">
                    <InputWrapper label="Background">
                        <Media set="background" {...props} />
                    </InputWrapper>
                    <InputWrapper label="Title">
                        <Text set="title" tag="div" {...props} />
                    </InputWrapper>
                    <InputWrapper label="Description">
                        <Text set="description" {...props} />
                    </InputWrapper>
                </div>
            </BlockEditor>
            <Media set="background" {...props} className="parallax" />
            <div className="contact-form-content">
                <div className="contact-form-content-a">
                    <Text set="title" tag="h2" {...props} className="title" />
                    <Text set="description" {...props} className="description" />
                </div>
                <div className="contact-form-content-b">
                    <Text set="form" {...props} className="form" tag="div" />
                </div>
            </div>
        </BlockWrapper>
    )
}



