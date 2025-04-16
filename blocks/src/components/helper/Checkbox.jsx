import { getBaseModelPath, getNestedValue, setNestedValue } from "./Libs";
const { ToggleControl } = wp.components;

export default function CheckBox(props) {
    const { attributes, label, setAttributes, set } = props

    const getValue = getNestedValue(attributes, set)

    const updateContentVal = newVal => {
        const path = getBaseModelPath(set)
        const copy = structuredClone(attributes)

        setNestedValue(copy, set, newVal)

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