import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

export default function InnerBlock(props) {
    if (props.edit) {
        return <div {...useBlockProps()}><InnerBlocks/></div>

    } else {
        return <div {...useBlockProps.save()}><InnerBlocks.Content/></div>
    }
}