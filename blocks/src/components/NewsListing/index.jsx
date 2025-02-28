import React from 'react'
import ServerSideRender from '@wordpress/server-side-render';
import Controller from "../helper/Controller";
import { TextControl } from '@wordpress/components';

const attributes = {

    title: {
        type: 'string',
        default: 'Latest News',
    },
    limit: {
        type: 'number',
        default: 3,
    }
}
const Index = (props) => {

    const { attributes, setAttributes } = props
    return (
        <>
    
            <Controller {...props}>

                <TextControl label="Title" value={attributes.title} onChange={val => {
                    props.setAttributes({
                        title: val
                    })
                }} />

                <TextControl label="Limit post" value={attributes.limit} onChange={val => {
                    props.setAttributes({
                        limit: val
                    })
                }} />

            </Controller>
            <ServerSideRender block={props.id}
                attributes={props.attributes}/>
        </>
    )
}


export default Index
export {
    attributes
}
