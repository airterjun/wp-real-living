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
    background: ImageSchema,
    banner: ImageSchema
}

export default function (props) {

    return (

        <section className="banner-contact">
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