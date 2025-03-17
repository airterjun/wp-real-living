import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss"


export const attributes = {
    banner: ImageSchema,
    title: TextSchema,
    description: TextSchema,
    contact: TextSchema
}


export default function (props) {
    return <section className="banner-office">
        <Media {...props} set="banner" className="parallax" />
        <div className="content">
            <Text {...props} set="title" tag="h2" />
            <Text {...props} set="description" tag="div" className="description" />
            <Text {...props} set="contact" tag="div" className="contact" />
        </div>
    </section>
}