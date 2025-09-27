import BlockWrapper from "../helper/BlockWrapper";
import BlockEditor from "../helper/BlockEditor";
import ImageRender from "../helper/ImageRender";
import InputWrapper from "../helper/InputWrapper";
import LinkEditor from "../helper/LinkEditor";
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import "./style.scss";
import MediaInput from "../helper/MediaInput";


export const attributes = {
    background: ImageSchema,
    background_mobile: ImageSchema,
    text_1: TextSchema,
    text_2: TextSchema,
    text_1_mobile: TextSchema,
    text_2_mobile: TextSchema,
    link: LinkSchmea,
    disabled: {
        type: 'boolean',
        default: false
    }
}

const HeroBanner = (props) => {
    const { disabledButton, section } = props


    const button = () => {
        if (!disabledButton) return <PrimaryButton {...props} className="hero-banner-button" title="Manage button link" />
    }

    return (
        <>
            <BlockWrapper className="hero-banner" {...props}>
                <BlockEditor {...props} tabEditor={true}>
                    <div className="tab-item active" data-name="dekstop">
                        <InputWrapper label="Background">
                            <MediaInput set="background" {...props} />
                        </InputWrapper>
                        <InputWrapper label="Background">
                            <LinkEditor {...props} set="link" />
                        </InputWrapper>
                        <InputWrapper label="Title">
                            <Text set="text_1" {...props} tag="div" className="input" />
                        </InputWrapper>
                        <InputWrapper label="Description">
                            <Text set="text_2" {...props} tag="div" className="input" />
                        </InputWrapper>
                    </div>
                    <div className="tab-item" data-name="mobile">
                        <InputWrapper label="Background">
                            <MediaInput set="background_mobile" {...props} />
                        </InputWrapper>
                        <InputWrapper label="Title">
                            <Text set="text_1_mobile" {...props} tag="div" className="input" />
                        </InputWrapper>
                        <InputWrapper label="Description">
                            <Text set="text_2_mobile" {...props} tag="div" className="input" />
                        </InputWrapper>
                    </div>
                </BlockEditor>
                <div className="content">
                    <div className="content-a">
                        <Text set="text_1" {...props} tag="h1" className="content-a_a h1 item desktop" />
                        <Text set="text_2" {...props} tag="div" className="content-a-b b1 item desktop" />

                        <Text set="text_1_mobile" {...props} tag="h1" className="content-a_a h1 item mobile" />
                        <Text set="text_2_mobile" {...props} tag="div" className="content-a-b b1 item mobile" />
                        {button()}
                    </div>
                </div>

                <Media set="background" {...props} className="background parallax desktop" />
                <ImageRender value="background_mobile" {...props} className="background parallax mobile" fallBack="background" />
            </BlockWrapper>
        </>
    )

}


export default HeroBanner
