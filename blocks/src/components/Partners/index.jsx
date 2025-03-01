import "./style.scss";
import Media from "../helper/Media";
import { ImageSchema } from "../Schema/image";
export const attributes = {
    image_1: ImageSchema,
    image_2: ImageSchema,
    image_3: ImageSchema,
    image_4: ImageSchema,
    image_5: ImageSchema
}
export default function (props) {
    return (
        <section className="partners">
            <div class="container">
                <Media set="image_1" {...props} />
                <Media set="image_2" {...props} />
                <Media set="image_3" {...props} />
                <Media set="image_4" {...props} />
                <Media set="image_5" {...props} />
            </div>
        </section>
    )
}