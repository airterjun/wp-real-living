import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import Controller from "../helper/Controller";
import ImageRender from "../helper/ImageRender";
import InputWrapper from "../helper/InputWrapper";
import { getMobileDescription } from "../helper/Libs";
import LinkEditor from "../helper/LinkEditor";
import Media from "../helper/Media";
import Text from "../helper/Text";
import "./style.scss";

export const attributes = {
    title: TextSchema,
    detail: TextSchema,
    title_mobile: TextSchema,
    link: LinkSchmea,
    background: ImageSchema,
    banner: ImageSchema,
    banner_mobile: ImageSchema
}

export default function (props) {
    const { hideBanner } = props


    const headerBanner = () => {
        if (!hideBanner) {
            return <>
                <Media {...props} set="banner" className="parallax desktop" />
                <ImageRender {...props} value="banner_mobile" fallBack="banner" className="parallax mobile" />
            </>
        }
    }


    return (
        <BlockWrapper {...props} className="banner-contact">
            <BlockEditor {...props} getTitle="title" tabEditor={true}>
                <div className="tab-item active" data-name="dekstop">
                    <InputWrapper label="Banner">
                        <Media {...props} set="banner" />
                    </InputWrapper>
                    <InputWrapper label="Background">
                        <Media {...props} set="background" />
                    </InputWrapper>
                    <InputWrapper label="Title">
                        <Text set="title" tag="div" {...props} />
                    </InputWrapper>
                    <InputWrapper label="Text above button">
                        <Text set="detail" tag="div" {...props} />
                    </InputWrapper>
                    <InputWrapper>
                        <LinkEditor {...props} set="link" />
                    </InputWrapper>
                </div>
                <div className="tab-item" data-name="dekstop">

                    <InputWrapper label="Banner">
                        <Media {...props} set="banner_mobile" className="input" />
                    </InputWrapper>
                    <InputWrapper label="Title">
                        <Text set="title_mobile" tag="div" {...props} />
                    </InputWrapper>
                </div>
            </BlockEditor>
            {headerBanner()}
            <div className="content">
                <Media {...props} set="background" />
                <div className="content-a">
                    <Text set="title" tag="h2" className="content-a-a desktop" {...props} />
                    <h2 className="content-a-a mobile" dangerouslySetInnerHTML={{ __html: getMobileDescription(props, 'title', 'title_mobile') }}>
                    </h2>
                    <div className="content-a-b">
                        <Text set="detail" tag="div" className="content-a-b-a description" {...props} />
                        <PrimaryButton {...props} />
                    </div>
                </div>
            </div>
        </BlockWrapper>
    )
}