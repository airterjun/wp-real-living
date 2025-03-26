import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
const { __experimentalLinkControl } = wp.blockEditor;
const LinkControl = __experimentalLinkControl;
import Text from "./Text";
export default function LinkEditor(props) {
    const { attributes, set, setAttributes, edit, model } = props
    const setId = model ? `${model}.${set}` : set

    let link = getNestedValue(attributes, setId)


    console.log('link', link)

    const setLink = (newVal) => {
        const path = getBaseModelPath(setId)
        const copy = structuredClone(attributes)

        setNestedValue(copy, setId, newVal)
        setAttributes({
            [path]: copy[path]
        })
    }

    if (edit) {
        return <div className="link-editor input">
            <Text {...props} set={`${set}.title`} disabledFormat={true} />
            <LinkControl
                value={link}
                onChange={(newLink) => setLink(newLink)}
            />
        </div>
    } else {
        return <></>
    }
}
