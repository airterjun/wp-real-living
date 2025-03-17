import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = {
    title: TextSchema,
    description: TextSchema,
    form: TextSchema,
    background: ImageSchema
}


export default function (props) {
    return (
        <section className="contact-form">
            <Media set="background" {...props} />
            <div className="contact-form-content">
                <div className="contact-form-content-a">
                    <Text set="title" tag="h2" {...props} className="title" />
                    <Text set="description" {...props} className="description" />
                </div>
                <div className="contact-form-content-b">
                    <Text set="form" {...props} className="form" />
                </div>
            </div>
        </section>
    )
}