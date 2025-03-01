import Media from '../helper/Media';
import { ImageSchema } from "../Schema/image";
import "./style.scss";


export const attributes = {
    banner: ImageSchema
}

export default function (props) {

    return (
        <section className="full-width-banner">
            <Media set="banner" {...props} className="parallax" />
        </section>
    )
}