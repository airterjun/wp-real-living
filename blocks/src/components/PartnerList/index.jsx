import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import ButtonDeleteItem from "../helper/ButtonDeleteItem";
import { InlineListEditor } from "../helper/InlineListEditor";
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
  const { model } = props;
  const partnerList = getDataByKey("gallery", props);
  const partnerLogo = () =>
    partnerList.map((_, index) => {
      const logo = `gallery.${index}.logo`;
      return (
        <div className="logo">
          <Media {...props} set={logo}>
            <ButtonDeleteItem
              {...props}
              index={index}
              model=""
              list={`${model}.gallery`}
            />
          </Media>
        </div>
      );
    });

  const tabsEditor = [];

  return (
    <BlockWrapper {...props} className="partner-gallery">
      <BlockEditor {...props} tabs={tabsEditor} />
      <Text {...props} set="title" tag="h2" />
      <div className="partner-logo-container">{partnerLogo()}</div>
      <InlineListEditor {...props} set="gallery" />
    </BlockWrapper>
  );
}
