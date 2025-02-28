import _ from "lodash"
import { getBaseModelPath } from "./Libs";
const { __experimentalLinkControl } = wp.blockEditor;
const LinkControl = __experimentalLinkControl;

export default function LinkEditor(props) {
    const { attributes, set, setAttributes, edit } = props


    let link = _.get(attributes, set)

    const setLink = (newVal) => {
        const path = getBaseModelPath(set)
        const copy = _.cloneDeep(attributes)
        _.set(copy, set, newVal)
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
