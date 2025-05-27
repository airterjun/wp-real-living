import Controller from "../helper/Controller";
import ImageRender from "../helper/ImageRender";
import LinkEditor from "../helper/LinkEditor";
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import "./style.scss";


export const attributes = {
    background: ImageSchema,
    background_mobile: ImageSchema,
    text_1: TextSchema,
    text_2: TextSchema,
    text_1_mobile: TextSchema,
    text_2_mobile: TextSchema,
    link: LinkSchmea
}
const HeroBanner = (props) => {
    const { disabledButton, section } = props


    const button = () => {
        if (!disabledButton) return <PrimaryButton {...props} className="hero-banner-button" title="Manage button link" />
    }

    return (
        <>
            <Controller {...props}>
                <div className="form-wrapper">

                    <details>
                        <summary className="main-title">{section ? `Section ${section}` : 'Hero Banner'}</summary>
                        <div className="input-container">
                            <div className="label">Background</div>
                            <div className="item">
                                <Media set="background" {...props} />
                            </div>
                        </div>
                        <div className="input-container">
                            <div className="label">Mobile Title</div>
                            <Text set="text_1_mobile" {...props} tag="div" className="input" />
                        </div>
                        <div className="input-container">
                            <div className="label">Mobile Desc</div>
                            <Text set="text_2_mobile" {...props} tag="div" className="input" />
                        </div>

                        <div className="input-container">
                            <div className="label">Button</div>
                            <LinkEditor {...props} set="link" />
                        </div>

                        <div className="header-title">
                            Mobile Content
                        </div>

                        <div className="input-container">
                            <div className="label">Mobile Background</div>
                            <div className="item">
                                <Media set="background_mobile" {...props} />
                            </div>
                        </div>
                    </details>

                </div>
            </Controller>
            <section className="hero-banner">
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
            </section>
        </>
    )

}


export default HeroBanner
