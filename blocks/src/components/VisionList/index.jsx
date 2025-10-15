import { createAttributes } from "../helper/BaseAttributes";
import BlockWrapper from "../helper/BlockWrapper";
import { getModelId, getNestedValue } from "../helper/Libs";
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

export const attributes = createAttributes({
  headerTitle: TextSchema,
  headerTitleLabel: TextSchema,
  list: ArraySchema(
    {
      title: TextSchema,
      description: TextSchema,
      thumb: ImageSchema,
    },
    3
  ),

  footerButton: LinkSchmea,
  footerTitle: TextSchema,
});

const VisionList = (props) => {
  const listItems = getNestedValue(props.attributes, getModelId("list", props));
  const listTemplate = () =>
    listItems.map((item, index) => {
      const title = `list.${index}.title`;
      const description = `list.${index}.description`;
      const thumbnail = `list.${index}.thumb`;
      return (
        <div className="item-wrapper">
          <div className="inner-block-wrapper">
            <div className="box content-wrapper">
              <IconArrow />
              <div className="content">
                <Text {...props} set={title} tag="div" className="list-title" />
                <Text
                  {...props}
                  set={description}
                  tag="div"
                  className="list-desc"
                />
              </div>
            </div>
            <div className="box content-thumb">
              <Media {...props} set={thumbnail} className="parallax" />
            </div>
          </div>
        </div>
      );
    });

  return (
    <BlockWrapper {...props} className="vision-list">
      <div className="vision-list-inner">
        <div className="header">
          <div className="inner-block-wrapper">
            <Text
              {...props}
              set="headerTitleLabel"
              tag="div"
              className="header-label"
            />
            <Text
              {...props}
              set="headerTitle"
              tag="div"
              className="header-title"
            />
          </div>
        </div>
        <div className="list-wrapper-outer">{listTemplate()}</div>

        <div className="footer-container">
          <div className="inner-block-wrapper">
            <Text {...props} className="title" set="footerTitle" tag="div" />
            <PrimaryButton {...props} set="footerButton" />
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
};

export default VisionList;
