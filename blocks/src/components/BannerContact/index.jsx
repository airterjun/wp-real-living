import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import Media from "../helper/Media";
import Text from "../helper/Text";
import "./style.scss";

export const attributes = {
    title: TextSchema,
    detail: TextSchema,
    link: LinkSchmea,
    background: ImageSchema
}

export default function (props) {

    return (

        <section className="grid banner-contact">
            <div className="container">
                <div className="content">
                    <Text set="title" tag="h2" className="content-a" {...props} />
                    <Text set="detail" tag="div" className="content-b" {...props} />
                    <PrimaryButton {...props} />
                </div>
            </div>
            <Media {...props} set="background" className="parallax" />
        </section>
    )
}