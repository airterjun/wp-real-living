import CheckBox from "../helper/Checkbox"
import Controller from "../helper/Controller"
import { getNestedValue } from "../helper/Libs"
import Text from "../helper/Text"
import IconArrow from "../Shared/IconArrow"

const PrimaryButton = (props) => {
    const { attributes, model, fill, set } = props

    const id = set ? set : 'link'

    const val = getNestedValue(attributes, model ? `${model}.${id}` : id)

    return (
        <>
            <div className={`primary-button ${fill ? "button-fill" : ''}`}>
                <a href={val.url}>
                    {val.title}
                    <IconArrow />
                </a>
            </div>
        </>
    )

}


export default PrimaryButton