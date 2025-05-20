import { getModelId, getNestedValue } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

const attributes = {
   description: TextSchema,
   label: TextSchema,
   title: TextSchema,
   banner: ImageSchema,
   list: ArraySchema([
      {
         title: TextSchema,
         description: TextSchema,
      },
      {
         title: TextSchema,
         description: TextSchema,
      },
      {
         title: TextSchema,
         description: TextSchema,
      }
   ])
}

const TwoColumnText = (props) => {
   const listItems = getNestedValue(props.attributes, getModelId('list', props))
   const getLabel = getNestedValue(props.attributes, getModelId('label', props))

   const isHasLabel = props.edit ? true : getLabel ? true : false

   console.log('isHasLabel', isHasLabel)

   const items = () => listItems.map((_, index) => {
      const title = `list.${index}.title`
      const desc = `list.${index}.description`
      return <div className="item-a">
         <div className="arrow"><IconArrow /></div>
         <div className="item-a-a">
            <Text {...props} set={desc} tag="div" className="item-a-a-a" />
            <Text {...props} set={title} tag="div" className="item-a-a-b" />
         </div>
      </div>
   })

   return (
      <section className="two-column-text">
         <div className="decor decor-1"></div>
         <div className="decor decor-2"></div>
         <div className="decor decor-3"></div>
         <div className="content header">
            <div className={`left ${!isHasLabel ? 'no-label' : ''}`}>
               {isHasLabel && <Text {...props} set="label" tag="div" className="label" />}

               <Text {...props} set="title" tag="h2" className="title" />
            </div>
            <Media set="banner" {...props} className="parallax" />
         </div>
         <div className="content body">
            <div className="left">
               <Text tag="div" set="description" {...props} className="description" />
            </div>

            <div className="right item">
               {items()}
            </div>
         </div>
      </section>
   )
}

export default TwoColumnText
export {
   attributes
};

