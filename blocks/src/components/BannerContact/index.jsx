import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import Controller from "../helper/Controller";
import LinkEditor from "../helper/LinkEditor";
import Media from "../helper/Media";
import Text from "../helper/Text";
import "./style.scss";

export const attributes = {
    title: TextSchema,
    detail: TextSchema,
    link: LinkSchmea,
    background: ImageSchema,
    banner: ImageSchema
}

export default function (props) {

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
                    </details>
                </div>
            </Controller>
            <Media {...props} set="banner" className="parallax" />
            <div className="content">
                <Media {...props} set="background" />
                <div className="content-a">
                    <Text set="title" tag="h2" className="content-a-a" {...props} />
                    <div className="content-a-b">
                        <Text set="detail" tag="div" className="content-a-b-a" {...props} />
                        <PrimaryButton {...props} />
                    </div>
                </div>
            </div>
        </section>
    )
}