import Controller from "../helper/Controller";
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
                <div className="gallery-list-editor">
                    <div className="item">
                        <Media set="background" {...props} />
                    </div>
                </div>
            </Controller>
            <section className="hero-banner">
                <div className="content">
                    <div className="content-a">
                        <Text set="text_1" {...props} tag="h2" className="content-a_a h1 item" />
                        <Text set="text_2" {...props} tag="div" className="content-a-b b1 item" />
                        {button()}
                    </div>
                </div>
                <Media set="background" {...props} className="background parallax" />
            </section>
        </>
    )

}


export default HeroBanner
