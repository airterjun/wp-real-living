import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow } from "@wordpress/components";

export default function Controller(props) {
    const { settings, title } = props
    let panelTitle = title || 'Manage'

    if (props.edit) {
        return (
            <InspectorControls>
                <PanelBody title={panelTitle}>
                    <PanelRow>
                        {props.children}
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        )

    }
}