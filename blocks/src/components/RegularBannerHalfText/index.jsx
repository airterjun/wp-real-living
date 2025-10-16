import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import ImageRender from "../helper/ImageRender";
import InputWrapper from "../helper/InputWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = createAttributes({
  banner: ImageSchema,
  banner_mobile: ImageSchema,
  title: TextSchema,
  titleMobile: TextSchema,
  description: TextSchema,
  descriptionMobile: TextSchema,
});

export default function (props) {
  const { section } = props;
  return (
    <BlockWrapper className="full-width-banner-two-column" {...props}>
      <BlockEditor {...props} tabEditor={true}>
        <div className="tab-item active" data-name="dekstop">
          <InputWrapper label="Title">
            <Text {...props} set="title" tag="div" />
          </InputWrapper>
          <InputWrapper label="Banner">
            <Media set="banner" {...props} />
          </InputWrapper>
          <InputWrapper label="Description">
            <Text {...props} set="description" tag="div" />
          </InputWrapper>
          <InputWrapper label="Block classes">
            <Text set="section_class" {...props} tag="div" />
          </InputWrapper>
        </div>
        <div className="tab-item" data-name="dekstop">
          <InputWrapper label="Title">
            <Text {...props} set="titleMobile" tag="div" />
          </InputWrapper>

          <InputWrapper label="Banner">
            <Media set="banner_mobile" {...props} />
          </InputWrapper>

          <InputWrapper label="Description">
            <Text {...props} set="descriptionMobile" tag="div" />
          </InputWrapper>
        </div>
      </BlockEditor>

      <div className="content-wrapper">
        <div className="content-wrapper-banner">
          <Media set="banner" {...props} className="parallax desktop" />
          <ImageRender
            value="banner_mobile"
            fallBack="banner"
            className="parallax mobile"
            {...props}
          ></ImageRender>
        </div>
        <div className="content-wrapper-detail">
          <Text className="title desktop" {...props} set="title" tag="div" />
          <Text
            className="title mobile"
            {...props}
            set="titleMobile"
            tag="div"
          />
          <Text
            className="description desktop"
            {...props}
            set="description"
            tag="div"
          />

          <Text
            className="description mobile"
            {...props}
            set="descriptionMobile"
            tag="div"
          />
        </div>
      </div>
    </BlockWrapper>
  );
}
