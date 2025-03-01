import React from 'react'
import Text from "../helper/Text";
import Media from "../helper/Media";
import placeholder from "./assets/banner-placeholder.jpeg"


export const attributes = {
    title: {
        type: 'string',
        default: 'Our Properties',
    },
    background: {
        type: 'image',
        default: {
            url: placeholder
        },
    }
}
const DownloadCatalog = (props) => {
    const { headerColor, customSectionClassName } = props.attributes;
    return (
        <section className={`grid jumbotron ${customSectionClassName}`} data-header-color={headerColor}>
            <Text set="title" {...props} tag="h1" />
            <Media set="background" {...props} className="parallax-image" />
        </section>
    )

}


export default DownloadCatalog
