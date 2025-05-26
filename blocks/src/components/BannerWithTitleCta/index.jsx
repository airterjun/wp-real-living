import React from 'react';
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { ImageSchema } from '../Schema/image';
import { LinkSchmea } from '../Schema/linkSchema';
import { TextSchema } from '../Schema/text';

import "./style.scss";


export const attributes = {
    title: TextSchema,
    background: ImageSchema,
    link: LinkSchmea
}
export default function (props) {
    return (
        <section className='banner-with-title-cta'>
            <div className='inner-container'>
                <Text set="title" {...props} tag="h1" />
                <PrimaryButton {...props} />
            </div>

            <Media set="background" {...props} className="parallax" />
        </section>
    )

}

