import Controller from "../helper/Controller";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";

import "./style.scss";


export const attributes = {
    label: TextSchema,
    background: ImageSchema,
    banner: ImageSchema,
    title: TextSchema,
    description: TextSchema,
    hightlight: TextSchema,
    textBottom: TextSchema
}

export default function (props) {


    const { section } = props

    return (
        <section className="image-left-side-text">
            <Controller {...props}>
                <div className="form-wrapper">
                    <details>
                        <summary className="main-title">{section ? `Section ${section}` : 'Hero Banner'}</summary>
                        <div className="input-container">
                            <div className="label">Background</div>
                            <div className="item">
                                <Media set="background" {...props} />
                            </div>

                            <div className="label">Label</div>
                            <div className="item">
                                <Text {...props} tag="div" set="label" className="input" />
                            </div>

                            <div className="label">Title</div>
                            <div className="item">
                                <Text {...props} tag="div" set="title" className="input" />
                            </div>


                            <div className="label">Description</div>
                            <div className="item">
                                <Text {...props} tag="div" set="description" className="input" />
                            </div>

                            <div className="label">Hightlight</div>
                            <div className="item">
                                <Text {...props} tag="div" set="hightlight" className="input" />
                            </div>

                            <div className="label">Bottom Text</div>
                            <div className="item">
                                <Text {...props} tag="div" set="textBottom" className="input" />
                            </div>
                        </div>
                    </details>

                </div>
            </Controller>
            <div className="banner">
                <Media {...props} set="banner" className="parallax" />
            </div>
            <div className="right-text">
                <Text {...props} set="label" className="label" />
                <div className="title">
                    <Text {...props} tag="h2" set="title" />
                </div>
                <Text {...props} set="description" className="description" />
                <Text {...props} set="hightlight" className="hightlight" />
                <Text {...props} set="textBottom" className="bottom-text" />
                <Media {...props} set="background" className="background" />
            </div>
        </section>
    )
}
