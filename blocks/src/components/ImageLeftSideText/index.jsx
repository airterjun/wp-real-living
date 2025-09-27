import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import Media from "../helper/Media";
import MediaInput from "../helper/MediaInput";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";

import "./style.scss";


export const attributes = {
    label: TextSchema,
    background: ImageSchema,
    banner: ImageSchema,
    title: TextSchema,
    description: TextSchema,
    hightlight: TextSchema,
    textBottom: TextSchema
}

export default function (props) {


    const { section } = props

    return (
        <BlockWrapper className="image-left-side-text" {...props}>
            <BlockEditor {...props}>
                <div className="tab-item active" data-name="dekstop">
                    <InputWrapper label="Background">
                        <MediaInput set="background" {...props} />
                    </InputWrapper>

                    <InputWrapper label="Label">
                        <Text {...props} tag="div" set="label" className="input" />
                    </InputWrapper>

                    <InputWrapper label="Title">
                        <Text {...props} tag="div" set="title" className="input" />
                    </InputWrapper>

                    <InputWrapper label="Description">
                        <Text {...props} tag="div" set="description" className="input" />
                    </InputWrapper>

                    <InputWrapper label="Hightlight">
                        <Text {...props} tag="div" set="hightlight" className="input" />
                    </InputWrapper>

                    <InputWrapper label="Bottom Text">
                        <Text {...props} tag="div" set="textBottom" className="input" />
                    </InputWrapper>

                </div>
            </BlockEditor>
            <div className="banner">
                <Media {...props} set="banner" className="parallax" />
            </div>
            <div className="right-text">
                <Text {...props} set="label" className="label" />
                <div className="title">
                    <Text {...props} tag="h2" set="title" />
                </div>
                <Text {...props} set="description" className="description" />
                <Text {...props} set="hightlight" className="hightlight" />
                <Text {...props} set="textBottom" className="bottom-text" />
                <Media {...props} set="background" className="background" />
            </div>
        </BlockWrapper>
    )
}
