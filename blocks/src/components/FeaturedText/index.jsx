import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import { getDataByKey } from "../helper/Libs";
import Media from "../helper/Media";
import ResponsiveContent from "../helper/ResponsiveContent";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

const attributes = createAttributes({
  title: TextSchema,
  titleMobile: TextSchema,
  description: TextSchema,
  descriptionMobile: TextSchema,
  background: ImageSchema,
});

const FeaturedText = (props) => {
  const getrDesc = getDataByKey("descriptionMobile", props);

  const descContent = () => {
    if (getrDesc) {
      return (
        <Text
          set="descriptionMobile"
          {...props}
          tag="h2"
          className="desc mobile"
        />
      );
    }

    return (
      <Text
        set="description"
        {...props}
        tag="h2"
        className="desc mobile default"
      />
    );
  };

  return (
    <>
      <BlockWrapper className="featured-text" {...props}>
        <BlockEditor {...props} tabEditor={true}>
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
          <div className="tab-item" data-name="dekstop">
            <InputWrapper label="Title">
              <Text set="titleMobile" {...props} tag="div" />
            </InputWrapper>
            <InputWrapper label="Description">
              <Text set="descriptionMobile" {...props} tag="div" />
            </InputWrapper>
          </div>
        </BlockEditor>
        <div className="decor-1 decor"></div>
        <div className="decor-2 decor"></div>
        <div className="decor-3 decor updated"></div>
        <Text set="title" {...props} tag="div" className="title desktop" />
        <Text set="titleMobile" {...props} tag="div" className="title mobile" />
        <div className="content">
          <ResponsiveContent
            {...props}
            set="description"
            className="desc"
            type="text"
          />
          <Media {...props} set="background" className="parallax" />
        </div>
      </BlockWrapper>
    </>
  );
};

export default FeaturedText;
export { attributes };
