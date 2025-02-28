import Text from "../helper/Text";

export default function (props) {

  let editClass = props.edit ? 'no-hover' : 'primary-button'

  return (
    <div className={`round-button ${props.class}`}>
      <div className={`button ${editClass}`}>
        <div className="original button__styled">
          <Text set={props.set} {...props} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="14 19 21 12 14 5" fill="none" stroke="#000" stroke-miterlimit="10"></polyline><line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" stroke-miterlimit="10"></line></svg>
        </div>
        <div className="copied button__styled">
          <Text set={props.set} {...props} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="14 19 21 12 14 5" fill="none" stroke="#000" stroke-miterlimit="10"></polyline><line x1="21" y1="12" x2="2" y2="12" fill="none" stroke="#000" stroke-miterlimit="10"></line></svg>
        </div>
      </div>
    </div>
  )
}
