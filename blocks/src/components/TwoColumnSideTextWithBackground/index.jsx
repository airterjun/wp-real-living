import { createAttributes } from "../helper/BaseAttributes";
import BlockWrapper from "../helper/BlockWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = createAttributes({
  banner: ImageSchema,
  background: ImageSchema,
  label: TextSchema,
  title: TextSchema,
  description: TextSchema,
});

export default function (props) {
  return (
    <BlockWrapper {...props} className="featured-content">
      <Media {...props} set="banner" className="parallax" />
      <div className="content">
        <Media {...props} set="background" />
        <div className="content-inner">
          <Text {...props} set="label" className="label" tag="div" />
          <Text {...props} set="title" className="title" tag="div" />
          <Text
            {...props}
            set="description"
            className="description"
            tag="div"
          />
        </div>
      </div>
    </BlockWrapper>
  );
}
