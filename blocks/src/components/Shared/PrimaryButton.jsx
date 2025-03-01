import Text from "../helper/Text";
import IconArrow from "./IconArrow";

export default function (props) {

  let editClass = props.edit ? 'no-hover' : 'primary-button'

  return (
    <div className={`round-button ${props.class}`}>
      <Text set={props.set} {...props} />
      <IconArrow />
    </div>
  )
}
