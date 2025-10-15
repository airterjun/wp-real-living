import { createAttributes } from "../helper/BaseAttributes";
import BlockWrapper from "../helper/BlockWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";
export const attributes = createAttributes({
  background: ImageSchema,
  title: TextSchema,
});

const BannerWithtitle = (props) => {
  return (
    <BlockWrapper {...props} className="banner-with-title">
      <Text {...props} set="title" className="title" />
      <Media {...props} set="background" className="parallax" />
    </BlockWrapper>
  );
};

export default BannerWithtitle;
