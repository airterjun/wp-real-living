const InputWrapper = (props) => {
    const { label } = props
    return <div className="input-wrapper">
        {label && <label>{label}</label>}
        {props.children}
    </div>
}


export default InputWrapper