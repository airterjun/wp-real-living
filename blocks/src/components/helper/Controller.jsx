import {InspectorControls} from '@wordpress/block-editor';
import {PanelBody, Button, PanelRow} from "@wordpress/components";

export default function Controller(props) {
    const {settings} = props
    let title = 'Manage'

    if (props.edit) {
        return (
            <InspectorControls>
                <PanelBody title={title}>
                    <PanelRow>
                        {props.children}
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        )

    }
}