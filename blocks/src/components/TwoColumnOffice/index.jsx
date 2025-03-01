import { getModelId, getNestedValue } from '../helper/Libs'
import Media from '../helper/Media'
import Text from "../helper/Text"
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import { ArraySchema } from '../Schema/array'
import { ImageSchema } from '../Schema/image'
import { LinkSchmea } from '../Schema/linkSchema'
import { ObjectSchema } from '../Schema/object'
import { TextSchema } from '../Schema/text'
import './style.scss'

export const attributes = {
   title: TextSchema,

   office: ObjectSchema({
      title: TextSchema,
      thumb: ImageSchema,
      name: TextSchema,
      address: TextSchema,
      contact: ObjectSchema({
         phone: TextSchema,
         email: TextSchema
      }),
      link: LinkSchmea
   }),

   showroom: ObjectSchema({
      title: TextSchema,
      thumb: ImageSchema,
      address: TextSchema,
      contact: ObjectSchema({
         phone: TextSchema,
         email: TextSchema
      }),
      link: LinkSchmea
   })
}

export default function (props) {

   return (
      <section className="two-column-card-office">
         <div className='container'>
            <div className="column">
               <div className='column-item'>
                  <Media {...props} set="office.thumb" />
                  <div className='column-item-a'>
                     <Text {...props} tag="div" set="office.title" className="column-item-a-a" />
                     <Text {...props} tag="div" set="office.name" className="column-item-a-b" />
                     <Text {...props} tag="div" set="office.address" className="column-item-a-c" />
                     <div className='column-item-a-d'>
                        <div className='column-item-a-d-a'>
                           <div className='column-item-a-d-a-a'>Contact Number:</div><Text {...props} set="office.contact.phone" tag="div" className="column-item-a-d-a-b" />
                        </div>
                        <div className='column-item-a-d-a'>
                           <div className='column-item-a-d-a-a'>Email:</div><Text {...props} set="office.contact.email" tag="div" className="column-item-a-d-a-b" />
                        </div>
                     </div>
                     <PrimaryButton {...props} set="office.link" />
                  </div>
               </div>
               <div className='column-item'>
                  <Media {...props} set="showroom.thumb" />
                  <div className='column-item-a'>
                     <Text {...props} tag="div" set="showroom.title" className="column-item-a-a" />
                     <Text {...props} tag="div" set="showroom.address" className="column-item-a-c" />
                     <div className='column-item-a-d'>
                        <div className='column-item-a-d-a'>
                           <div className='column-item-a-d-a-a'>Contact Number:</div><Text {...props} set="showroom.contact.phone" tag="div" className="column-item-a-d-a-b" />
                        </div>
                        <div className='column-item-a-d-a'>
                           <div className='column-item-a-d-a-a'>Email:</div><Text {...props} set="showroom.contact.email" tag="div" className="column-item-a-d-a-b" />
                        </div>
                     </div>
                     <PrimaryButton {...props} set="showroom.link" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}