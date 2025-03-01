import { getBaseModelPath } from "./Libs";
import _ from "lodash"
const { ToggleControl } = wp.components;

export default function CheckBox(props) {
    const { attributes, label, setAttributes, set } = props

    const getValue = _.get(attributes, set)

    const updateContentVal = newVal => {
        console.log('asdasd', newVal)
        const path = getBaseModelPath(set)
        const copy = _.cloneDeep(attributes)

        _.set(copy, set, newVal)

        setAttributes({
            [path]: copy[path]
        })
    }

    return (
        <ToggleControl
            label={label}
            checked={getValue}
            onChange={(value) => {
                updateContentVal(value)
            }}
        />
    )
}