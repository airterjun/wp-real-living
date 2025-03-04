import { getModelId, getNestedValue } from '../helper/Libs'
import Media from '../helper/Media'
import Text from "../helper/Text"
import { ArraySchema } from '../Schema/array'
import { ImageSchema } from '../Schema/image'
import { LinkSchmea } from '../Schema/linkSchema'
import { TextSchema } from '../Schema/text'
import IconArrow from '../Shared/IconArrow'
import './style.scss'

const attributes = {
   title: TextSchema,

   cards: ArraySchema([
      {
         title: TextSchema,
         Description: TextSchema,
         thumbnail: ImageSchema,
         link: LinkSchmea
      },

      {
         title: TextSchema,
         Description: TextSchema,
         thumbnail: ImageSchema,
         link: LinkSchmea
      }
   ])
}

const TwoColumnCard = (props) => {
   const cards = getNestedValue(props.attributes, getModelId('cards', props))

   const cardsRender = () => cards.map((_, index) => {
      const thumb = `cards.${index}.thumbnail`
      const title = `cards.${index}.title`
      const Description = `cards.${index}.Description`

      return <div className='column-item'>
         <div className='column-item-a'>
            <IconArrow />
            <div className='content'>
               <Text {...props} tag="div" set={title} className="b2 column-item-a--a" />
               <Text {...props} tag="div" set={Description} className="column-item-a--b" />
            </div>
         </div>
         <Media {...props} set={thumb} className="parallax" />
      </div>
   })


   return (
      <section className="two-column-card">
         <Text tag="h2" className="h2" set="title" {...props} />
         <div className="column">
            {cardsRender()}
         </div>
      </section>
   )
}

export default TwoColumnCard
export {
   attributes
}
