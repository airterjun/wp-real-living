import InputWrapper from "./InputWrapper";
import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
// const { __experimentalLinkControl } = wp.blockEditor;
// const LinkControl = __experimentalLinkControl;


import { URLInputButton } from '@wordpress/block-editor';

import Text from "./Text";
export default function LinkEditor(props) {
    const { attributes, set, setAttributes, edit, model } = props
    const setId = model ? `${model}.${set}` : set

    let link = getNestedValue(attributes, setId)




    const setLink = (newVal) => {
        const path = getBaseModelPath(setId)
        const copy = structuredClone(attributes)

        setNestedValue(copy, setId, {
            title: link.title,
            url: newVal.url
        })

        setAttributes({
            [path]: copy[path]
        })
    }

    if (edit) {
        return <InputWrapper label="Button">
            <Text {...props} set={`${set}.title`} disabledFormat={true} />
            <URLInputButton
                url={link.url}
                onChange={(url) => setLink({ url })}
            />
        </InputWrapper>
    }
}
