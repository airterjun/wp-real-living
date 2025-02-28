import './style.scss'
import Text from "../helper/Text"
import Controller from "../helper/Controller"

const attributes = {
   label: {
      type: 'string',
      default: ''
   },
   title: {
      type: 'string',
      default: 'Default Title'
   },
   description: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   },

   description_mobile: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
   },
   button: {
      type: 'string',
      default: '<a href="#">Contact us</a>'
   },
   buttonClasses: {
      type: 'string',
      default: ''
   }
}

const TwoColumnText = (props) => {
   const { attributes } = props

   return (
      <section className="two-column-text grid">
         <Controller {...props}>
            <div className="inner input-editor">
               <div className="custom-input-wrapper">
                  <div className="label">Desktop Copy</div>
                  <div className="input-wrapper">
                     <Text tag="div" set="description" {...props} />
                  </div>
               </div>
               <div className="custom-input-wrapper">
                  <div className="label">Mobile Copy</div>
                  <div className="input-wrapper">
                     <Text tag="div" set="description_mobile" {...props} />
                  </div>
               </div>

               <div className="custom-input-wrapper">
                  <div className="label">Button classes</div>
                  <div className="input-wrapper">
                     <Text tag="div" set="buttonClasses" {...props} disabledFormat={true} />
                  </div>
               </div>
            </div>
         </Controller>
         <div className="two-column-text__s1 double-border-bottom">
            <Text tag="div" className="label" set="label" {...props} />
            <Text tag="h2" set="title" {...props} />
         </div>
         <div className="two-column-text__s2">
            <Text tag="div" set="description" {...props} className="desktop" />
            <div className="mobile">
               {props.attributes.description_mobile}
            </div>
            <div className='button'>
               <div className={`button-wrapper ${attributes.buttonClasses}`}>
                  <Text set="button" {...props} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 22"><path fill="#2D2D2D" fill-rule="evenodd" d="M9.822 10.67-.004.844l.849-.848L11.519 10.67.845 21.344l-.849-.848 9.826-9.826Z" clip-rule="evenodd" /></svg>
               </div>
            </div>
         </div>
      </section>
   )
}

export default TwoColumnText
export {
   attributes
}
