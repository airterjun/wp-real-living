import Controller from "../helper/Controller";
import { getMobileDescription } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import "./style.scss";


export const attributes = {
    background: ImageSchema,
    text_1: TextSchema,
    text_2: TextSchema,
    text_1_mobile: TextSchema,
    text_2_mobile: TextSchema,
    link: LinkSchmea
}
const HeroBanner = (props) => {
    const { disabledButton } = props


    const button = () => {
        if (!disabledButton) return <PrimaryButton {...props} title="Manage button link" />
    }

    return (
        <>
            <Controller {...props}>
                <div className="form-wrapper">
                    <div className="gallery-list-editor">
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
                </div>
            </Controller>
            <section className="hero-banner">
                <div className="content">
                    <div className="content-a">
                        <Text set="text_1" {...props} tag="h2" className="content-a_a h1 item desktop" />
                        <Text set="text_2" {...props} tag="div" className="content-a-b b1 item desktop" />

                        <h2 className="content-a_a h1 item mobile">{getMobileDescription(props, 'text_1', 'text_1_mobile')} </h2>
                        <div className="content-a-b b1 item mobile">{getMobileDescription(props, 'text_2', 'text_2_mobile')}</div>
                        {button()}
                    </div>
                </div>
                <Media set="background" {...props} className="background parallax" />
            </section>
        </>
    )

}


export default HeroBanner
