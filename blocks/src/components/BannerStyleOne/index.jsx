import React from 'react'
import './style.scss'

import Text from "../helper/Text";
import ButtonSlider from "../helper/ButtonSlider";
import Media from '../helper/Media';
import Controller from '../helper/Controller';
import { ColorPicker } from '@wordpress/components';
import { TextSchema, TextSchemaPlaceholder } from '../Schema/text';
import { ImageSchema, ImageSchemaPlaceholder } from '../Schema/image';
import { ObjectSchema } from '../Schema/object';


const attributes = {
    hero: ImageSchema,
    label: TextSchema,
    title: TextSchema,

    section_2: ObjectSchema({
        label: TextSchemaPlaceholder,
        title: TextSchemaPlaceholder,
        description: TextSchemaPlaceholder,
        image_1: ImageSchemaPlaceholder,
        image_2: ImageSchemaPlaceholder,
        image_3: ImageSchemaPlaceholder
    }),

    section_3: ObjectSchema({
        title: TextSchemaPlaceholder,
        banner: ImageSchemaPlaceholder,
        educations: [
            {
                title: TextSchemaPlaceholder,
                list: [
                    {
                        location: TextSchemaPlaceholder,
                        year: TextSchemaPlaceholder
                    }
                ]
            }
        ]
    }),

    section_4: ObjectSchema({
        banner: ImageSchemaPlaceholder
    }),

    section_5: ObjectSchema({
        title: TextSchemaPlaceholder,
        description: TextSchemaPlaceholder,
        banner: ImageSchemaPlaceholder,
        timeline: [
            {
                year: TextSchemaPlaceholder,
                title: TextSchemaPlaceholder,
                thumb: ImageSchemaPlaceholder
            }
        ]

    }),

    section_6: ObjectSchema({
        text_0: TextSchemaPlaceholder,
        text_1: TextSchemaPlaceholder,
        text_2: TextSchemaPlaceholder,
        text_3: TextSchemaPlaceholder,
        text_4: TextSchemaPlaceholder,
        text_5: TextSchemaPlaceholder,
        text_6: TextSchemaPlaceholder,
        text_7: TextSchemaPlaceholder,
        text_8: TextSchemaPlaceholder,
        media_0: ImageSchemaPlaceholder,
        media_1: ImageSchemaPlaceholder,
        media_2: ImageSchemaPlaceholder,
        media_3: ImageSchemaPlaceholder,
        media_4: ImageSchemaPlaceholder,
        media_5: ImageSchemaPlaceholder,
    }),
}

const Biography = (props) => {
    const { attributes, setAttributes } = props;

    const educations = () => attributes.section_3.educations.map((item, index) => {
        const number = index < 10 ? `0${index + 1}` : index + 1;
        const title = `section_3.educations.${index}.title`
        const eduList = `section_3.educations.${index}.list`

        const educationNames = () => item.list.map((_, j) => {
            const location = `section_3.educations.${index}.list.${j}.location`
            const year = `section_3.educations.${index}.list.${j}.year`
            return <div className='edu-i_c__a'>
                <Text set={location} {...props} tag="div" className="edu-i_c__a___a b2" />
                <Text set={year} {...props} tag="div" className="edu-i_c__a___b b2" />
            </div>
        })

        return <div className='edu-i'>
            <div className='edu-i_a b2'>{number}.</div>
            <div className='edu-i_c'>
                <div>
                    <Text set={title} {...props} tag="div" className="edu-i_b s5" />
                    <ButtonSlider slider={eduList} {...props} nested={true} />
                </div>
                <div className='wrapper'>
                    {educationNames()}
                </div>

            </div>

        </div>
    })


    const historyCard = () => attributes.section_5.timeline.map((_, index) => {
        const thumb = `section_5.timeline.${index}.thumb`
        const year = `section_5.timeline.${index}.year`
        const title = `section_5.timeline.${index}.title`
        return <div className='h-i'>
            <div className='h-i_a'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#21409A" d="M9.333 1.573c0 .87-1.334 3.494-1.334 3.494S6.666 2.442 6.666 1.573C6.666.704 7.261 0 7.998 0 8.734 0 9.33.704 9.33 1.573h.002ZM1.573 6.667C2.443 6.667 5.067 8 5.067 8S2.442 9.334 1.573 9.334C.704 9.334 0 8.737 0 8c0-.736.704-1.333 1.573-1.333ZM6.666 14.428c0-.87 1.333-3.494 1.333-3.494s1.334 2.625 1.334 3.494c0 .869-.597 1.573-1.334 1.573-.736 0-1.333-.704-1.333-1.573ZM14.427 9.333C13.558 9.333 10.934 8 10.934 8s2.624-1.334 3.493-1.334C15.297 6.666 16 7.263 16 8c0 .736-.704 1.333-1.573 1.333ZM8 8.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" /></svg>
            </div>
            <Media set={thumb} {...props} />
            <div className='h-i_b'>
                <Text className='b2 h-i_b__c' set={year} tag="div" {...props} />
                <Text className='b2 h-i_b__d' set={title} tag="div"  {...props} />
            </div>
        </div>
    })

    return (

        <section className={`biography-detail ${props.edit ? "edit-mode" : ""}`}>
            <Controller {...props}>
                <div className='gallery-list-editor'>
                    <ColorPicker color={attributes.theme_color}
                        onChangeComplete={(color) => changeThemeColor(color.hex)}
                        disableAlpha />
                </div>
            </Controller>
            <div className='hero-image section'>
                <div className='content'>
                    <Text className='content-a c1' set="label" tag="div" {...props} />
                    <Text className='content-b s1' set="title" tag="h1" {...props} />
                </div>
                <Media set="hero" {...props} className="banner v-parallax" />
            </div>

            <div className='grid section section-two'>
                <Text set="section_2.label" className="label c2" {...props} tag="div" />
                <div className='main-title '>
                    <div className='main-title_a'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 32"><path fill="#21409A" d="M15.984 2.22a2.22 2.22 0 1 1-4.44 0 2.22 2.22 0 0 1 4.44 0Zm8.225 11.661c1.358-1.429 3.243-.233 3.318-.184-.066-.065-1.216-1.16-2.916-.982-1.13.117-3.648 1.166-6.75 5.103-2.237 2.841-3.378 7.372-3.842 9.674V15.224a.35.35 0 0 0 .336-.35v-.265c.332-.09.753-.314 1.127-.846.422-.6.578-1.46.745-2.377.253-1.383.528-2.898 1.773-3.852.678-.52 1.817-.095 1.908-.06-3.059-1.925-6.145 2.603-6.145 2.603s-3.087-4.528-6.145-2.603c.091-.035 1.229-.46 1.909.06 1.244.954 1.52 2.469 1.772 3.852.167.917.324 1.777.745 2.377.373.531.794.755 1.127.845v.267c0 .19.15.343.336.349v12.268c-.463-2.302-1.606-6.833-3.843-9.674-3.1-3.937-5.62-4.986-6.748-5.104-1.7-.177-2.85.918-2.916.983.074-.049 1.958-1.245 3.316.184 1.387 1.458 2.627 3.189 3.102 6.936.473 3.745 2.224 4.038 3.83 4.184 1.604.145 2.578.951 2.888 2.989.382 2.517.321 4.01.321 4.01h.61s-.06-1.493.323-4.01c.309-2.038 1.283-2.844 2.888-2.99 1.605-.145 3.356-.438 3.83-4.183.474-3.747 1.715-5.478 3.101-6.936Z" /></svg>
                        <Text set="section_2.title" className="s2" {...props} tag="div" />
                        <Text set="section_2.description" className="description b2" {...props} tag="div" />
                    </div>
                </div>

                <div className='grid main-gallery'>
                    <Media set="section_2.image_1" {...props} />
                    <Media set="section_2.image_2" {...props} />
                    <Media set="section_2.image_3" {...props} />
                </div>

            </div>


            <div className='grid section-three section'>
                <Media set="section_3.banner" {...props} />
                <div className='content'>
                    <Text className="h3 main-title" set="section_3.title" tag="div" {...props} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#A0C8F3" d="M14 2.36c0 1.303-2 5.24-2 5.24s-2-3.937-2-5.24C10 1.056 10.893 0 11.998 0c1.104 0 2 1.056 2 2.36H14ZM2.36 10c1.303 0 5.24 2 5.24 2s-3.937 2-5.24 2C1.056 14 0 13.103 0 12c0-1.105 1.056-2 2.36-2ZM10 21.64c0-1.303 2-5.24 2-5.24s2 3.937 2 5.24c0 1.304-.895 2.36-2 2.36s-2-1.056-2-2.36ZM21.64 14c-1.303 0-5.24-2-5.24-2s3.937-2 5.24-2c1.304 0 2.36.895 2.36 2 0 1.104-1.056 2-2.36 2ZM11.999 13.199a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" /></svg>
                    <div className='edu'>
                        <ButtonSlider slider="section_3.educations" {...props} nested={true} />
                        {educations()}
                    </div>
                </div>
            </div>

            <div className='grid section-four section'>
                <Media set="section_4.banner" {...props} />
            </div>


            <div className='section-five section'>
                <div className='a'>
                    <div className='a-a'>
                        <div className='a-a_a'>
                            <div className='a-a_a__a'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 32"><path fill="#21409A" d="M15.984 2.22a2.22 2.22 0 1 1-4.44 0 2.22 2.22 0 0 1 4.44 0Zm8.225 11.661c1.358-1.429 3.243-.233 3.318-.184-.066-.065-1.216-1.16-2.916-.982-1.13.117-3.648 1.166-6.75 5.103-2.237 2.841-3.378 7.372-3.842 9.674V15.224a.35.35 0 0 0 .336-.35v-.265c.332-.09.753-.314 1.127-.846.422-.6.578-1.46.745-2.377.253-1.383.528-2.898 1.773-3.852.678-.52 1.817-.095 1.908-.06-3.059-1.925-6.145 2.603-6.145 2.603s-3.087-4.528-6.145-2.603c.091-.035 1.229-.46 1.909.06 1.244.954 1.52 2.469 1.772 3.852.167.917.324 1.777.745 2.377.373.531.794.755 1.127.845v.267c0 .19.15.343.336.349v12.268c-.463-2.302-1.606-6.833-3.843-9.674-3.1-3.937-5.62-4.986-6.748-5.104-1.7-.177-2.85.918-2.916.983.074-.049 1.958-1.245 3.316.184 1.387 1.458 2.627 3.189 3.102 6.936.473 3.745 2.224 4.038 3.83 4.184 1.604.145 2.578.951 2.888 2.989.382 2.517.321 4.01.321 4.01h.61s-.06-1.493.323-4.01c.309-2.038 1.283-2.844 2.888-2.99 1.605-.145 3.356-.438 3.83-4.183.474-3.747 1.715-5.478 3.101-6.936Z" /></svg>
                            </div>
                        </div>
                        <Text className="s2-italic main-title a-a_b" set="section_5.title" tag="div" {...props} />
                        <Media set="section_5.banner" {...props} className="a-a_c" />
                        <Text className="b2 a-a_d" set="section_5.description" tag="div" {...props} />
                    </div>

                    <div className='a-b'>
                        <ButtonSlider slider="section_5.timeline" {...props} nested={true} />
                        <div className='a-b_a'>
                            {historyCard()}
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-six section'>
                <div className='inner a'>
                    <div className='a-a'>
                        <Text className="s2 a-a_a" set="section_6.text_0" tag="div" {...props} />
                        <div className='a-a_b'>
                            <Media set="section_6.media_0" {...props} />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#21409A" d="M9.333 1.573c0 .87-1.334 3.494-1.334 3.494S6.666 2.442 6.666 1.573C6.666.704 7.261 0 7.998 0 8.734 0 9.33.704 9.33 1.573h.002ZM1.573 6.667C2.443 6.667 5.067 8 5.067 8S2.442 9.334 1.573 9.334C.704 9.334 0 8.737 0 8c0-.736.704-1.333 1.573-1.333ZM6.666 14.428c0-.87 1.333-3.494 1.333-3.494s1.334 2.625 1.334 3.494c0 .869-.597 1.573-1.334 1.573-.736 0-1.333-.704-1.333-1.573ZM14.427 9.333C13.558 9.333 10.934 8 10.934 8s2.624-1.334 3.493-1.334C15.297 6.666 16 7.263 16 8c0 .736-.704 1.333-1.573 1.333ZM8 8.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" /></svg>
                            <Text set="section_6.text_1" {...props} className="c2" tag="div" />
                        </div>
                        <Text set="section_6.text_2" {...props} className="b2" tag="div" />
                    </div>

                    <div className='a-b'>
                        <Media set="section_6.media_1" {...props} className="a-b_a" />
                    </div>

                    <div className='a-c'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#21409A" d="M9.333 1.573c0 .87-1.334 3.494-1.334 3.494S6.666 2.442 6.666 1.573C6.666.704 7.261 0 7.998 0 8.734 0 9.33.704 9.33 1.573h.002ZM1.573 6.667C2.443 6.667 5.067 8 5.067 8S2.442 9.334 1.573 9.334C.704 9.334 0 8.737 0 8c0-.736.704-1.333 1.573-1.333ZM6.666 14.428c0-.87 1.333-3.494 1.333-3.494s1.334 2.625 1.334 3.494c0 .869-.597 1.573-1.334 1.573-.736 0-1.333-.704-1.333-1.573ZM14.427 9.333C13.558 9.333 10.934 8 10.934 8s2.624-1.334 3.493-1.334C15.297 6.666 16 7.263 16 8c0 .736-.704 1.333-1.573 1.333ZM8 8.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" /></svg>
                        <Text set="section_6.text_3" {...props} className="c2 a-c_a" tag="div" />
                        <Text set="section_6.text_4" {...props} className="s3 a-c_b" tag="div" />
                        <div className='a-c_c'>
                            <Media set="section_6.media_2" {...props} className="a-c_c__a" />
                            <Text set="section_6.text_5" {...props} className="b2 a-c__b" tag="div" />
                        </div>
                    </div>

                    <div className='a-d'>
                        <Media set="section_6.media_3" {...props} className="a-d_a" />
                        <Media set="section_6.media_4" {...props} className="a-d_b" />
                    </div>


                    <div className='a-e'>
                        <Text set="section_6.text_6" {...props} className="c2 a-e_a" tag="div" />
                        <Text set="section_6.text_7" {...props} className="s2-italic a-e_b" tag="div" />
                        <div className='a-e_c'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 32"><path fill="#21409A" d="M15.984 2.22a2.22 2.22 0 1 1-4.44 0 2.22 2.22 0 0 1 4.44 0Zm8.225 11.661c1.358-1.429 3.243-.233 3.318-.184-.066-.065-1.216-1.16-2.916-.982-1.13.117-3.648 1.166-6.75 5.103-2.237 2.841-3.378 7.372-3.842 9.674V15.224a.35.35 0 0 0 .336-.35v-.265c.332-.09.753-.314 1.127-.846.422-.6.578-1.46.745-2.377.253-1.383.528-2.898 1.773-3.852.678-.52 1.817-.095 1.908-.06-3.059-1.925-6.145 2.603-6.145 2.603s-3.087-4.528-6.145-2.603c.091-.035 1.229-.46 1.909.06 1.244.954 1.52 2.469 1.772 3.852.167.917.324 1.777.745 2.377.373.531.794.755 1.127.845v.267c0 .19.15.343.336.349v12.268c-.463-2.302-1.606-6.833-3.843-9.674-3.1-3.937-5.62-4.986-6.748-5.104-1.7-.177-2.85.918-2.916.983.074-.049 1.958-1.245 3.316.184 1.387 1.458 2.627 3.189 3.102 6.936.473 3.745 2.224 4.038 3.83 4.184 1.604.145 2.578.951 2.888 2.989.382 2.517.321 4.01.321 4.01h.61s-.06-1.493.323-4.01c.309-2.038 1.283-2.844 2.888-2.99 1.605-.145 3.356-.438 3.83-4.183.474-3.747 1.715-5.478 3.101-6.936Z" /></svg>
                            <Media set="section_6.media_5" {...props} className="a-e_c__a" />
                            <Text set="section_6.text_8" {...props} className="b2 a-e_c__b" tag="div" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Biography
export {
    attributes
}