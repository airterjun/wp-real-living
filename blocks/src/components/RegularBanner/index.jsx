import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import ImageRender from "../helper/ImageRender";
import InputWrapper from "../helper/InputWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { MultiDeviceSchema } from "../Schema/multiKeySchema";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = {
  banner: ImageSchema,
  banner_mobile: ImageSchema,
  ...MultiDeviceSchema("title", "text"),
};

export default function (props) {
  const { section } = props;
  return (
    <BlockWrapper className="full-width-banner" {...props}>
      <BlockEditor {...props} tabEditor={true}>
        <div className="tab-item active" data-name="dekstop">
          <InputWrapper label="Title">
            <Text {...props} set="title" tag="div" />
          </InputWrapper>
          <InputWrapper className="Banner">
            <Media set="banner" {...props} />
          </InputWrapper>
        </div>
        <div className="tab-item" data-name="dekstop">
          <InputWrapper label="Banner">
            <Media set="banner_mobile" {...props} />
          </InputWrapper>
        </div>
      </BlockEditor>
      <Text className="title desktop" {...props} set="title" tag="div" />
      <Text className="title mobile" {...props} set="titleMobile" tag="div" />
      <Media set="banner" {...props} className="parallax desktop" />
      <ImageRender
        value="banner_mobile"
        fallBack="banner"
        className="parallax mobile"
        {...props}
      ></ImageRender>
    </BlockWrapper>
  );
}
