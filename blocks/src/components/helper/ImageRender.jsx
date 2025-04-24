import { getNestedValue } from "./Libs"

export default function (props) {

    const { value, attributes, model, fallBack, className } = props
    const modelSet = model ? `${model}.${value}` : value
    const fallBackModelSet = model ? `${model}.${fallBack}` : fallBack

    let getValueAttr = getNestedValue(attributes, modelSet)


    if (!getValueAttr) {
        getValueAttr = getNestedValue(attributes, fallBackModelSet)
    }


    console.log('getValueAttr', getValueAttr)

    return (
        <figure className={className ? className : ''}>
            <img src={getValueAttr?.url} width={getValueAttr?.width} height={getValueAttr?.height} alt="We Are Real" loading="lazy" decoding="async" />
        </figure>
    )
}