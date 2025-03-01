import './style.scss'
import Text from "../helper/Text"
import _ from 'lodash'
import { getModelId } from '../helper/Libs'
import { ArraySchema } from '../Schema/array'
import { TextSchema } from '../Schema/text'
import { ImageSchema } from '../Schema/image'
import { LinkSchmea } from '../Schema/linkSchema'
import Media from '../helper/Media'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

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
   const cards = _.get(props.attributes, getModelId('cards', props))

   const cardsRender = () => cards.map((_, index) => {
      const thumb = `cards.${index}.thumbnail`
      const title = `cards.${index}.title`
      const Description = `cards.${index}.Description`
      const button = `cards.${index}.link`

      return <div className='column-item'>
         <Media {...props} set={thumb} />
         <div className='column-item-a'>
            <Text {...props} tag="div" set={title} className="b2 column-item-a--a" />
            <Text {...props} tag="div" set={Description} className="column-item-a--b" />
            <PrimaryButton {...props} set={button} />
         </div>
      </div>
   })


   return (
      <section className="two-column-card">
         <div className='container'>
            <Text tag="h2" className="h2" set="title" {...props} />
            <div className="column">
               {cardsRender()}
            </div>
         </div>
      </section>
   )
}

export default TwoColumnCard
export {
   attributes
}
