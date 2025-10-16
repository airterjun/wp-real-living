import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import { getModelId, getNestedValue } from "../helper/Libs";
import LinkEditor from "../helper/LinkEditor";
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
      descriptionMobile: TextSchema,
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
      const descriptionMobile = `list.${index}.descriptionMobile`;
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
                  className="list-desc desktop"
                />

                <Text
                  {...props}
                  set={descriptionMobile}
                  tag="div"
                  className="list-desc mobile"
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
      <BlockEditor {...props}>
        <div className="tab-item active" data-name="dekstop">
          <LinkEditor {...props} set="footerButton" />
        </div>
      </BlockEditor>
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
