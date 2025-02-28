import './style.scss'
import Text from "../helper/Text"

const attributes = {
   title: {
      type: 'string',
      default: 'Default Title'
   },
   left_desc: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   },
   right_desc: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   }
}

const TwoColumnText = (props) => {
   const { button } = props

   return (
      <section className="two-column-text-title grid">
         <div className='grid-inner-wrapper'>
            <Text tag="h2" className="h1" set="title" {...props} />
            <div className="column">
               <Text tag="div" set="left_desc" {...props} />
               <Text tag="div" set="right_desc" {...props} />
            </div>
         </div>
      </section>
   )
}

export default TwoColumnText
export {
   attributes
}
