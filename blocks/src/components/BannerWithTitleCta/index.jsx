import React from 'react';
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { ImageSchema } from '../Schema/image';
import { LinkSchmea } from '../Schema/linkSchema';
import { TextSchema } from '../Schema/text';

import "./style.scss";
import Controller from '../helper/Controller';
import LinkEditor from '../helper/LinkEditor';


export const attributes = {
    title: TextSchema,
    title_mobile: TextSchema,
    background: ImageSchema,
    background_mobile: ImageSchema,
    link: LinkSchmea
}
export default function (props) {
    return (
        <section className='banner-with-title-cta'>
            <Controller {...props} getTitle="title">
                <div className='input-container'>
                    <div className="label">Button</div>
                    <LinkEditor {...props} set="link" />
                </div>
                <div className='main-title'>
                    Mobile Content
                </div>
                <div className='input-container'>
                    <div className="label">Title</div>
                    <Text set="title_mobile" {...props} tag="div" className="input" />
                </div>
                <div className='input-container'>
                    <div className="label">Background</div>
                    <Media set="background_mobile" {...props} className="input" />
                </div>
            </Controller>
            <div className='inner-container'>
                <Text set="title" {...props} tag="h1" className="desktop" />
                <Text set="title_mobile" {...props} tag="h1" className="mobile" />
                <PrimaryButton {...props} />
            </div>

            <Media set="background" {...props} className="parallax desktop" />
            <Media set="background_mobile" {...props} className="parallax mobile" />
        </section>
    )

}

