import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
import { TextControl } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';

export default function Text(props) {
    const { edit, attributes, set, setAttributes, className, disabledFormat } = props
    let tag = props.tag
    let getVal = getNestedValue(attributes, set)

    if (!getVal && edit) {
        getVal = !disabledFormat ? "Write here..." : ""
    }

    if (props.multiline) {
        newLine = props.multiline
    }

    if (!tag) tag = 'p'

    if (!edit) {
        return getVal ?
            <RichText.Content tagName={tag}
                className={className}
                value={getVal} /> : ''
    } else {

        const updateContentVal = newVal => {
            const path = getBaseModelPath(set)
            const copy = structuredClone(attributes)


            const stripHTML = (text) => text.replace(/<\/?[^>]+(>|$)/g, "");

            if (disabledFormat) {
                setNestedValue(copy, set, stripHTML(newVal))
            } else {
                setNestedValue(copy, set, newVal)
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
