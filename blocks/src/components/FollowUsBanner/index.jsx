import { TextControl } from '@wordpress/components';
import Controller from "../helper/Controller";
import Text from "../helper/Text";


export const attributes = {
    title: {
        type: 'string',
        default: 'Follow us and stay updated on the latest at Panoramika'
    },
    tw: {
        type: 'string',
        default: ''
    },

    ig: {
        type: 'string',
        default: ''
    }
}

export default function (props) {
    const { ig, tw } = props.attributes
    const { headerColor } = props.attributes;
    return (
        <>
            <Controller {...props}>
                <fieldset>
                    <TextControl label="Twitter URL" value={tw} onChange={val => {
                        props.setAttributes({
                            'tw': val
                        })
                    }} />
                    <TextControl label="Instagram URL" value={ig} onChange={val => {
                        props.setAttributes({
                            'ig': val
                        })
                    }} />
                </fieldset>
            </Controller>
            <section className="grid follow-us-banner" data-header-color={headerColor}>
                <Text set="title" className="follow-us-banner__title" {...props} />
                <div className="follow-us-banner__icon">
                    <a href={tw} target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.44 50.44"><path d="M0 14.71h10.51v35.73H0V14.71Zm5.22-4.2h-.06C2.02 10.51 0 8.17 0 5.25S2.09 0 5.28 0s5.17 2.27 5.22 5.25c0 2.92-2.03 5.26-5.29 5.26Zm45.21 39.93H39.92V31.32c0-4.62-2.57-7.77-6.71-7.77-3.15 0-4.86 2.13-5.69 4.18-.3.74-.21 2.77-.21 3.8v18.91H16.8V14.71h10.51v5.5c1.52-2.35 3.89-5.5 9.96-5.5 7.52 0 13.16 4.73 13.16 15.29v20.44Z" /></svg>
                    </a>
                    <a href={ig} target="_blank" rel="noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.72 59.72"><path d="M42.87 0H16.84c-4.63 0-8.85 1.9-11.9 4.95C1.9 8 0 12.21 0 16.85v26.03c0 4.63 1.9 8.85 4.95 11.9 3.05 3.05 7.27 4.95 11.9 4.95h26.03c4.64 0 8.85-1.9 11.9-4.95 3.05-3.05 4.95-7.27 4.95-11.9V16.85c0-4.64-1.9-8.85-4.95-11.9C51.73 1.9 47.51 0 42.88 0ZM16.84 5.02h26.03c3.25 0 6.21 1.33 8.35 3.48 2.14 2.14 3.48 5.1 3.48 8.35v26.03c0 3.25-1.33 6.21-3.48 8.35-2.14 2.14-5.1 3.48-8.35 3.48H16.84c-3.25 0-6.21-1.33-8.35-3.48-2.14-2.14-3.48-5.1-3.48-8.35V16.85c0-3.25 1.33-6.21 3.48-8.35 2.14-2.14 5.1-3.48 8.35-3.48Zm13.01 10.32a14.514 14.514 0 0 1 14.52 14.52 14.514 14.514 0 0 1-14.52 14.52 14.514 14.514 0 0 1-14.52-14.52 14.514 14.514 0 0 1 14.52-14.52Zm-6.72 7.8c1.72-1.72 4.1-2.78 6.72-2.78s5 1.06 6.72 2.78c1.72 1.72 2.78 4.09 2.78 6.72s-1.06 5-2.78 6.72c-1.72 1.72-4.09 2.78-6.72 2.78s-5-1.06-6.72-2.78c-1.72-1.72-2.78-4.1-2.78-6.72s1.06-5 2.78-6.72Zm23.24-12.25c1.82 0 3.3 1.48 3.3 3.3s-1.48 3.3-3.3 3.3-3.3-1.48-3.3-3.3 1.48-3.3 3.3-3.3Z" /></svg>
                    </a>
                </div>
            </section>
        </>
    )
}