import BlockEditor from '../helper/BlockEditor'
import BlockWrapper from '../helper/BlockWrapper'
import ButtonSlider from '../helper/ButtonSlider'
import Controller from '../helper/Controller'
import InputWrapper from '../helper/InputWrapper'
import { getModelId, getNestedValue } from '../helper/Libs'
import ListEditor from '../helper/ListEditor'
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


   const editorTemplate = (index) => {
      const thumb = `cards.${index}.thumbnail`
      const title = `cards.${index}.title`
      const Description = `cards.${index}.Description`
      return (
         <>
            <InputWrapper label="Thumb">
               <Media {...props} set={thumb} className="parallax" />
            </InputWrapper>
            <InputWrapper label="Title">
               <Text {...props} tag="div" set={title} className="b2 column-item-a--a" />
            </InputWrapper>
            <InputWrapper label="Description">
               <Text {...props} tag="div" set={Description} className="column-item-a--b" />
            </InputWrapper>
         </>
      )
   }

   return (
      <BlockWrapper className="two-column-card" {...props}>
         <BlockEditor {...props}>
            <div className="tab-item active" data-name="dekstop">
               <InputWrapper label="List">
                  <ListEditor set="cards" {...props} template={editorTemplate} title="title" nested={true} />
               </InputWrapper>
            </div>
         </BlockEditor>
         <Text tag="h2" className="h2" set="title" {...props} />
         <div className="column">
            {cardsRender()}
         </div>
      </BlockWrapper >
   )
}

export default TwoColumnCard
export {
   attributes
}
