import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import Controller from "../helper/Controller";
import ImageRender from "../helper/ImageRender";
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
        <section className="banner-contact">
            <Controller {...props}>
                <div className="form-wrapper">
                    <details>
                        <summary className="main-title">
                            {props.section ? `Section ${props.section}` : 'Banner Contact'}
                        </summary>
                        <div className="input-container">
                            <div className="label">Button</div>
                            <LinkEditor {...props} set="link" />
                        </div>
                        <div className="header-title">
                            Mobile Content
                        </div>
                        <div className="input-container">
                            <div className="label">Banner</div>
                            <Media {...props} set="banner_mobile" className="input" />
                        </div>
                        <div className="input-container">
                            <div className="label">Description</div>
                            <Text set="title_mobile" tag="h2" className="content-a-a" {...props} />
                        </div>
                    </details>
                </div>
            </Controller>
            {headerBanner()}
            <div className="content">
                <Media {...props} set="background" />
                <div className="content-a">
                    <Text set="title" tag="h2" className="content-a-a desktop" {...props} />
                    <h2 className="content-a-a mobile">
                        {getMobileDescription(props, 'title', 'title_mobile')}
                    </h2>
                    <div className="content-a-b">
                        <Text set="detail" tag="div" className="content-a-b-a description" {...props} />
                        <PrimaryButton {...props} />
                    </div>
                </div>
            </div>
        </section>
    )
}