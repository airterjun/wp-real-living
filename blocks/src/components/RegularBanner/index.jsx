import Media from '../helper/Media';
import Text from '../helper/Text';
import { ImageSchema } from "../Schema/image";
import { TextSchema } from '../Schema/text';
import "./style.scss";


export const attributes = {
    banner: ImageSchema,
    title: TextSchema
}

export default function (props) {

    return (
        <section className="full-width-banner">
            <Text className="title" {...props} set="title" tag="div" />
            <Media set="banner" {...props} className="parallax" />
        </section>
    )
}