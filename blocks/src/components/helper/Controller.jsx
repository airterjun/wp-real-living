import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow } from "@wordpress/components";
import { getNestedValue, stripHtml } from './Libs';

export default function Controller(props) {
    const { settings, title, getTitle, attributes, model } = props
    let panelTitle = title || 'Manage'

    if (getTitle) {
        const keyId = model ? `${model}.${getTitle}` : getTitle
        panelTitle = stripHtml(getNestedValue(attributes, keyId)) || 'Manage'
    }

    if (props.edit) {
        return (
            <InspectorControls>
                <PanelBody title={panelTitle} initialOpen={false}>
                    <PanelRow>
                        <div className='form-wrapper'>
                            {props.children}
                        </div>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        )

    }
}