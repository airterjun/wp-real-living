import Controller from '../helper/Controller';
import ImageRender from '../helper/ImageRender';
import Media from '../helper/Media';
import Text from '../helper/Text';
import { ImageSchema } from "../Schema/image";
import { TextSchema } from '../Schema/text';
import "./style.scss";


export const attributes = {
    banner: ImageSchema,
    banner_mobile: ImageSchema,
    title: TextSchema
}

export default function (props) {
    const { section } = props
    return (
        <section className="full-width-banner">
            <Controller {...props} getTitle="title">
                <details>
                    <summary className="main-title">{section ? `Section ${section}` : 'Hero Banner'}</summary>
                    <div className="header-title">
                        Mobile Content
                    </div>

                    <div className="input-container">
                        <div className="label">Mobile Background</div>
                        <div className="item">
                            <Media set="banner_mobile" {...props} />
                        </div>
                    </div>
                </details>
            </Controller>
            <Text className="title" {...props} set="title" tag="div" />
            <Media set="banner" {...props} className="parallax desktop" />
            <ImageRender value="banner_mobile" fallBack="banner" className="parallax mobile" {...props}></ImageRender>
        </section>
    )
}