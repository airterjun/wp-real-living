import { createAttributes } from "../helper/BaseAttributes";
import BlockWrapper from "../helper/BlockWrapper";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";

import "./style.scss";

export const attributes = createAttributes({
  background: ImageSchema,
  label: TextSchema,
});

export default function (props) {
  return (
    <BlockWrapper {...props} className="background-with-label">
      <Media {...props} set="background" className="parallax" />
      <Text {...props} set="label" className="label" />
    </BlockWrapper>
  );
}
