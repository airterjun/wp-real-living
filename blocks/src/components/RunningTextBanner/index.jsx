import React from 'react'
import Logo from './logo'
import Controller from "../helper/Controller";
import { TextControl } from '@wordpress/components';
import { sanitizeInput } from "../helper/Libs";
const attributes = {
    customSectionClassName: {
        type: 'string',
        default: ''
    }
}

const Marque = (props) => {
    const { headerColor } = props.attributes;
    const { customSectionClassName } = props.attributes
    const logos = () => [1, 2, 3, 4, 5].map(() => {
        return <div class="logo">
            <Logo />
        </div>
    })
    return (
        <>
            <Controller {...props}>
                <fieldset>
                    <TextControl label="Custom Class" value={customSectionClassName} onChange={val => {
                        props.setAttributes({
                            'customSectionClassName': sanitizeInput(val)
                        })
                    }} />
                </fieldset>
            </Controller>
            <section className={`marque grid ${customSectionClassName}`} data-header-color={headerColor}>
                <div className="marque__inner">
                    {logos()}
                </div>
                <div className="circle"></div>
            </section>
        </>
    )
}


export default Marque
export {
    attributes
}