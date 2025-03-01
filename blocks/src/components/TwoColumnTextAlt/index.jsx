import Controller from '../helper/Controller'
import Media from '../helper/Media'
import Text from "../helper/Text"
import { ImageSchema } from '../Schema/image'
import { TextSchema } from '../Schema/text'
import './style.scss'

const attributes = {
   title: TextSchema,
   subTitle: TextSchema,
   content: TextSchema,
   background: ImageSchema
}

const TwoColumnTextAlt = (props) => {
   const { attributes, reversed, customClassName } = props

   return (
      <>
         <Controller {...props}>
            <div className="inner gallery-list-editor">
               <Media set="initial" {...props} />
            </div>
         </Controller>
         <section className={`two-column-text-alt ${reversed ? 'reverse' : ''} ${customClassName ? customClassName : ''}`}>
            <div className='container'>
               <div className='content'>
                  <Text tag="h2" className="h2 content-a" set="title" {...props} />
                  <Text tag="div" className="b1 content-b" set="subTitle" {...props} />
                  <Text tag="div" className="content-c" set="content" {...props} />
               </div>
            </div>
            <Media {...props} set="background" className="parallax" />
         </section>
      </>

   )
}

export default TwoColumnTextAlt
export {
   attributes
}
