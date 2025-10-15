import { createAttributes } from "../helper/BaseAttributes";
import BlockWrapper from "../helper/BlockWrapper";
import { getDataByKey } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = createAttributes({
  title: TextSchema,
  gallery: ArraySchema(
    {
      logo: ImageSchema,
      title: TextSchema,
      link: LinkSchmea,
    },
    4
  ),
});

export default function (props) {
  const partnerList = getDataByKey("gallery", props);
  const partnerLogo = () =>
    partnerList.map((_, index) => {
      const logo = `gallery.${index}.logo`;
      return (
        <div className="logo">
          <Media {...props} set={logo} />
        </div>
      );
    });
  return (
    <BlockWrapper {...props} className="partner-gallery">
      <Text {...props} set="title" tag="h2" />
      <div className="partner-logo-container">{partnerLogo()}</div>
    </BlockWrapper>
  );
}
