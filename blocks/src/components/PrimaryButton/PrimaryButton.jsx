import { getNestedValue } from "../helper/Libs"
import IconArrow from "../Shared/IconArrow"
import "./style.scss"

const PrimaryButton = (props) => {
    const { attributes, model, fill, set } = props

    const id = set ? set : 'link'

    const val = getNestedValue(attributes, model ? `${model}.${id}` : id)

    const buttonClass = props.className ? props.className : ''

    return (
        <>
            <div className={`primary-button ${fill ? "button-fill" : '', buttonClass}`}>
                <a href={val.url}>
                    {val.title}
                    <IconArrow />
                </a>
            </div>
        </>
    )

}


export default PrimaryButton