import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import CheckBox from "../helper/Checkbox";
import { getModelId, getModelValue, getNestedValue } from "../helper/Libs";
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

  headerCTA: {
    type: Boolean,
    default: false,
  },
  headerCTALink: LinkSchmea,
  headerCtaTitle: TextSchema,
  footerButton: LinkSchmea,
  footerTitle: TextSchema,
});

const VisionList = (props) => {
  const listItems = getNestedValue(props.attributes, getModelId("list", props));
  const headerCTA = getModelValue("headerCTA", props);
  const headerCTALink = getModelValue("headerCTALink", props);

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
          <CheckBox {...props} label="Header CTA?" set="headerCTA" />
          {headerCTA && <LinkEditor {...props} set="headerCTALink" />}
        </div>
      </BlockEditor>
      <div className="vision-list-inner">
        <div className={`header ${headerCTA ? "has-header-cta" : ""}`}>
          <div className={`inner-block-wrapper ${headerCTA ? "with-cta" : ""}`}>
            <div className="content">
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
            {headerCTA && (
              <div className="header-cta">
                <Text {...props} set="headerCtaTitle" className="cta-title" />
                <div className="primary-button">
                  <a href={headerCTALink ? headerCTALink.url : "#"}>
                    {headerCTALink ? headerCTALink.title : "Book Now"}
                    <IconArrow />
                  </a>
                </div>
              </div>
            )}
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
