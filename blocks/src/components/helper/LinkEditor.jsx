import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
const { __experimentalLinkControl } = wp.blockEditor;
const LinkControl = __experimentalLinkControl;

export default function LinkEditor(props) {
    const { attributes, set, setAttributes, edit } = props


    let link = getNestedValue(attributes, set)

    const setLink = (newVal) => {
        const path = getBaseModelPath(set)
        const copy = structuredClone(attributes)
        setNestedValue(copy, set, newVal)
        setAttributes({
            [path]: copy[path]
        })
    }

    if (edit) {
        return <div className="link-editor">
            <LinkControl
                value={link}
                onChange={(newLink) => setLink(newLink)}
            />
        </div>
    } else {
        return <></>
    }
}
