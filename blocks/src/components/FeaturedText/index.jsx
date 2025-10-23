import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

const attributes = createAttributes({
  title: TextSchema,
  titleMobile: TextSchema,
  description: TextSchema,
  background: ImageSchema,
});

const FeaturedText = (props) => {
  return (
    <>
      <BlockWrapper className="featured-text" {...props}>
        <BlockEditor {...props}>
          <div className="tab-item active" data-name="dekstop">
            <InputWrapper label="Background">
              <Media {...props} set="background" />
            </InputWrapper>
            <InputWrapper label="Title">
              <Text set="title" {...props} tag="div" />
            </InputWrapper>
            <InputWrapper label="Description">
              <Text set="description" {...props} tag="div" />
            </InputWrapper>
            <InputWrapper label="Section Class">
              <Text set="section_class" {...props} tag="div" />
            </InputWrapper>
          </div>
        </BlockEditor>
        <div className="decor-1 decor"></div>
        <div className="decor-2 decor"></div>
        <div className="decor-3 decor updated"></div>
        <Text set="title" {...props} tag="div" className="title desktop" />
        <Text set="titleMobile" {...props} tag="div" className="title mobile" />
        <div className="content">
          <Text set="description" {...props} tag="h2" className="desc" />
          <Media {...props} set="background" className="parallax" />
        </div>
      </BlockWrapper>
    </>
  );
};

export default FeaturedText;
export { attributes };
