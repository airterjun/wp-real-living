import InputWrapper from "./InputWrapper";
import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
// const { __experimentalLinkControl } = wp.blockEditor;
// const LinkControl = __experimentalLinkControl;


import { useBlockProps, LinkControl } from '@wordpress/block-editor';

import Text from "./Text";
export default function LinkEditor(props) {
    const { attributes, set, setAttributes, edit, model } = props
    const setId = model ? `${model}.${set}` : set

    let link = getNestedValue(attributes, setId)




    const setLink = (newVal) => {
        const path = getBaseModelPath(setId)
        const copy = structuredClone(attributes)

        console.log('link', link)
        console.log('model', model)
        console.log('setId', setId)

        console.log('change', newVal)
        console.log('copy', copy)
        console.log('path', path)

        setNestedValue(copy, setId, {
            title: link.title,
            url: newVal.url
        })

        setAttributes({
            [path]: copy[path]
        })
    }

    if (edit) {
        return <div className="link-editor input" {...useBlockProps()}>
            <InputWrapper label="Button Label">
                <Text {...props} set={`${set}.title`} disabledFormat={true} />
            </InputWrapper>
            {/* <LinkControl
                value={{
                    url: "#",
                    title: 'Trest'
                }}
                onChange={(newLink) => { setLink(newLink) }}
            /> */}
        </div>
    } else {
        return <></>
    }
}
