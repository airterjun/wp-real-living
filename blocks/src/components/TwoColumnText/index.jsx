import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import Controller from "../helper/Controller";
import InputWrapper from "../helper/InputWrapper";
import { getMobileDescription, getModelId, getNestedValue } from "../helper/Libs";
import ListEditor from "../helper/ListEditor";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

const attributes = {
   description: TextSchema,
   description_mobile: TextSchema,
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


   const itemEditor = (index) => {
      const title = `list.${index}.title`
      const desc = `list.${index}.description`
      return <>
         <InputWrapper label="Title">
            <Text {...props} set={title} tag="div" />
         </InputWrapper>
         <InputWrapper label="Description">
            <Text {...props} set={desc} tag="div" />
         </InputWrapper>
      </>
   }

   return (
      <BlockWrapper className="two-column-text" {...props}>
         <BlockEditor {...props} tabEditor={true}>
            <div className="tab-item active">
               <InputWrapper label="Banner">
                  <Media set="banner" {...props} />
               </InputWrapper>
               {isHasLabel &&
                  <InputWrapper label="Label">
                     <Text {...props} set="label" tag="div" />
                  </InputWrapper>
               }
               <InputWrapper label="Title">
                  <Text tag="div" set="description" {...props} />
               </InputWrapper>
               <InputWrapper label="Description">
                  <Text {...props} set="title" tag="div" />
               </InputWrapper>
               <InputWrapper label="List">
                  <ListEditor nested={true} set="list" title="description" {...props} template={(index) => itemEditor(index)} />
               </InputWrapper>
            </div>

            <div className="tab-item">

               <InputWrapper label="Description">
                  <Text set="description_mobile" tag="div" {...props} />
               </InputWrapper>
            </div>
         </BlockEditor>
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
               <Text tag="div" set="description" {...props} className="description desktop" />
               <div className="description mobile" dangerouslySetInnerHTML={{ __html: getMobileDescription(props, 'description', 'description_mobile') }}>
               </div>
            </div>

            <div className="right item">
               {items()}
            </div>
         </div>
      </BlockWrapper>
   )
}

export default TwoColumnText
export {
   attributes
};

