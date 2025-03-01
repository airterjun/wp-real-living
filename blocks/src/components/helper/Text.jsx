import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
import { TextControl } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';

export default function Text(props) {
    const { edit, attributes, set, setAttributes, className, disabledFormat, model } = props
    const setId = model ? `${model}.${set}` : set
    let tag = props.tag

    let getVal = getNestedValue(attributes, setId)

    if (!getVal && edit) {
        getVal = !disabledFormat ? "Write here..." : ""
    }
    if (!tag) tag = 'p'

    if (!edit) {
        return getVal ?
            <RichText.Content tagName={tag}
                className={className}
                value={getVal} /> : ''
    } else {

        const updateContentVal = newVal => {
            const path = getBaseModelPath(setId)
            const copy = structuredClone(attributes)



            const stripHTML = (text) => text.replace(/<\/?[^>]+(>|$)/g, "");

            if (disabledFormat) {
                setNestedValue(copy, setId, stripHTML(newVal))
            } else {
                setNestedValue(copy, setId, newVal.replace(/(<br\s*\/?>\s*){2}/g, '<span class="p"></span>'))
            }

            setAttributes({
                [path]: copy[path]
            })
        }


        const editor = () => {

            if (disabledFormat) {
                return <TextControl value={getVal} onChange={val => { updateContentVal(val) }} />
            } else {
                return <RichText tagName={tag}
                    className={className}
                    value={getVal}
                    onChange={(newValue) => {
                        updateContentVal(newValue)
                    }} />
            }

        }

        return editor()
    }
}
