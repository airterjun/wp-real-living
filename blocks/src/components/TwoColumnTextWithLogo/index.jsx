import './../TwoColumnText/style.scss'
import Text from "../helper/Text"
import Controller from "../helper/Controller"

const attributes = {
   excerpt: {
      type: 'string',
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
   },
   title: {
      type: 'string',
      default: 'Default Title'
   },
   description: {
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
      <section className="two-column-text grid w-logo">
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
         <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 326 75"><g fill="#474849" clip-path="url(#alkasldkasd)"><path d="M10.95 7.47h.18c1.54.03 3.05.39 4.44 1.05a10.7 10.7 0 0 1 3.61 2.79 14.45 14.45 0 0 1 3.65 10.01c0 .95-.09 2.15-.18 3.75-.28 1.82-.99 3.56-2.06 5.06l-.09.09a18.912 18.912 0 0 1-4.31 5.62c-1.2.85-2.64 1.31-4.11 1.31h-1.14V7.47h.01Zm0 35.01h2.53c2.43 0 3.42.56 3.74.84.32.29 1.31 1.49 2.62 5.24l.75 2.52c.48 1.49.82 3.01 1.03 4.56.19 1.14.28 2.15.47 3.09-.05 2.69.07 5.37.38 8.05v.09c.47 2 1.06 3.98 1.78 5.9l.57 1.4h14.22l-1.78-3.18c-.91-1.65-1.67-3.37-2.28-5.15-.67-2.25-1.2-4.53-1.6-6.84-.45-2.57-1.07-5.1-1.87-7.58v-.09c-.95-2.38-2.19-4.64-3.7-6.71-1.32-1.9-2.93-3.57-4.77-4.97l.27-.18c3.28-2.29 6.13-5.14 8.42-8.42 1.84-2.68 2.82-5.86 2.81-9.12 0-6.18-1.31-10.68-4.02-13.3-2.03-2.2-4.52-3.92-7.3-5.04h-.09c-2.72-.84-5.57-1.23-8.42-1.14H0v71.56h11.04V42.47h-.09v.01ZM134.81 2.14h-10.99l-.48 1.49c-1.03 3.56-2.34 7.86-3.74 12.64-1.4 4.77-3.76 12.4-6.89 22.46-2.15 6.75-3.93 12.46-5.33 16.85L86.87 2.14H75.18l29.63 71.88 30-71.88ZM62.35 2.14H51.31v71.79h11.04V2.14ZM159.35 2.14h-11.04v71.79h11.04V2.14ZM207.41 63.36l-2.72.74c-2.28.66-4.02 1.04-5.24 1.31l-.65.09c-1.22.28-2.71.57-4.49.84l-4.97.84-2.43.34V39.48c1.58 0 3 0 4.2.09 1.44.06 2.88.22 4.31.47l5.53 1.04V30.82l-2.71.75c-2 .55-4.03.95-6.09 1.22-1.74.18-3.49.28-5.24.27V8l2.62.28c4.62.66 9.12 1.95 13.38 3.84l3 1.31V2.04h-30.04v71.79h31.54V63.36ZM232.59 7.11c1.57-.02 3.13.31 4.56.97 1.43.67 2.68 1.64 3.68 2.87 2.46 2.74 3.76 6.33 3.65 10.01 0 .95-.09 2.15-.18 3.75-.28 1.82-.99 3.56-2.06 5.06l-.09.09a18.624 18.624 0 0 1-4.31 5.62c-1.2.85-2.64 1.31-4.11 1.31h-1.14V7.11Zm-11.04 66.55h11.04V42.12h2.53c2.44 0 3.42.56 3.75.84.33.28 1.31 1.49 2.62 5.24l.74 2.52c.48 1.49.83 3.01 1.04 4.56.18 1.14.27 2.15.47 3.09-.07 2.66.05 5.33.36 7.98v.18c.47 2 1.07 3.98 1.79 5.9l.56 1.4h14.22l-1.78-3.18c-.93-1.64-1.71-3.37-2.34-5.15-.67-2.25-1.2-4.53-1.6-6.84-.45-2.57-1.07-5.1-1.87-7.58v-.09c-.94-2.34-2.13-4.56-3.56-6.64-1.32-1.9-2.93-3.57-4.77-4.97l.28-.18c3.28-2.29 6.13-5.14 8.42-8.42a16.11 16.11 0 0 0 2.8-9.12c0-6.18-1.31-10.68-4.02-13.3a20.769 20.769 0 0 0-7.3-5.13h-.09c-2.72-.84-5.57-1.23-8.42-1.14h-14.7v71.56h-.18l.01.01ZM283.67 72.25c.38-2.15.75-4.02 1.04-5.62.28-1.6 1.14-4.68 2.28-9.17.84-3.42 5.8-16.1 8.61-23.12l1.31-3.56 1.3-3.42 4.31 12.83 11.61 33.88h11.85L300.62 0l-10.53 5.32.84 1.87c.84 1.87 1.69 3.84 2.62 5.9.64 1.56 1.21 3.15 1.69 4.77l-24.3 56.16h12.46l.27-1.78v.01Z" /></g><defs><clipPath id="alkasldkasd"><path fill="#fff" d="M0 0h325.98v74.17H0z" /></clipPath></defs></svg>
         </div>
         <div className="two-column-text__s1 double-border-bottom">
            <Text tag="h2" set="title" {...props} />
            <Text tag="div" className="desc-bottom" set="excerpt" {...props} />
         </div>
         <div className="two-column-text__s2">
            <Text tag="div" set="description" {...props} className="desktop" />
            <div className='mobile'>
               {attributes.description_mobile}
            </div>
            <div className='button'>
               <div className='button-wrapper'>
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
