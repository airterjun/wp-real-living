import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import Media from "../helper/Media";
import ResponsiveContent from "../helper/ResponsiveContent";
import { ImageSchema } from "../Schema/image";
import { MultiDeviceSchema } from "../Schema/multiKeySchema";
import "./style.scss";
export const attributes = createAttributes({
  background: ImageSchema,
  ...MultiDeviceSchema("title", "text"),
});

const BannerWithtitle = (props) => {
  return (
    <BlockWrapper {...props} className="banner-with-title">
      <BlockEditor {...props}>
        <div className="tab-item active" data-name="dekstop">
          <InputWrapper label="Background">
            <Media {...props} set="background" />
          </InputWrapper>
        </div>
      </BlockEditor>
      <ResponsiveContent {...props} set="title" className="title" type="text" />
      <Media {...props} set="background" className="parallax" />
    </BlockWrapper>
  );
};

export default BannerWithtitle;
