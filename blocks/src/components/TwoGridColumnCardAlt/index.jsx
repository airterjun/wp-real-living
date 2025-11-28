import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import { getDataByKey, getModelId, getNestedValue } from "../helper/Libs";
import ListEditor from "../helper/ListEditor";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";
const attributes = createAttributes({
  // 1.
  box1Title: TextSchema,
  box1Desc: TextSchema,
  // Mobile
  box1TitleMobile: TextSchema,
  box1DescMobile: TextSchema,

  // 2.
  box2Title: TextSchema,
  // Mobile
  box2TitleMobile: TextSchema,
  amenityList: ArraySchema(
    {
      num: TextSchema,
      title: TextSchema,
    },
    10
  ),

  // 3.
  box3Title: TextSchema,
  box3Desc: TextSchema,
  // Mobile
  box3TitleMobile: TextSchema,
  box3DescMobile: TextSchema,

  // 4.
  box4Title: TextSchema,
  // Mobile
  box4TitleMobile: TextSchema,
  box4Desc: ArraySchema(
    {
      label: TextSchema,
      value: TextSchema,
    },
    2
  ),
});

export default function (props) {
  const listItems = getNestedValue(
    props.attributes,
    getModelId("box4Desc", props)
  );
  const timelineList = getDataByKey("box4Desc", props);
  const amenity = getDataByKey("amenityList", props);

  const timeline = () =>
    timelineList.map((_, index) => {
      const label = `box4Desc.${index}.label`;
      const value = `box4Desc.${index}.value`;
      return (
        <div className="timeline-list">
          <div className="group">
            <Text set={label} {...props} className="label" tag="div" />
            <Text set={value} {...props} className="value" tag="div" />
          </div>
        </div>
      );
    });

  const amenityList = () =>
    amenity.map((_, index) => {
      const title = `amenityList.${index}.title`;
      const num = `amenityList.${index}.num`;
      return (
        <li>
          <div className="num">
            <Text tag="div" className="amenity-item" set={num} {...props} />.
          </div>
          <Text tag="div" className="amenity-item" set={title} {...props} />
        </li>
      );
    });

  const boxTemplate = (title, desc) => {
    return (
      <div className="card-wrapper">
        <div className="card-wrapper-a">
          <div className="icon">
            <IconArrow />
          </div>
          <Text tag="h2" className="desktop" set={title} {...props} />
          <Text tag="h2" className="mobile" set={`${title}Mobile`} {...props} />
        </div>
        <div className="card-wrapper-b">{desc()}</div>
      </div>
    );
  };

  return (
    <>
      <BlockWrapper {...props} className="two-grid-column-card-alt">
        <BlockEditor {...props}>
          <div className="tab-item active" data-name="dekstop">
            <ListEditor {...props} set="" />
            <InputWrapper label="Room Type">
              <Text {...props} set="box1title" tag="div" />
            </InputWrapper>
            <InputWrapper label="Room Description">
              <Text {...props} set="box1title" tag="div" />
            </InputWrapper>
          </div>
        </BlockEditor>

        <div className="content">
          {boxTemplate("box1title", () => (
            <>
              <Text set="box1Desc" {...props} className="description desktop" />
              <Text
                set="box1DescMobile"
                {...props}
                className="description mobile"
              />
            </>
          ))}
          {boxTemplate("box2title", () => (
            <div className="description amenity-list-wrapper">
              <ul className="amenity-list">{amenityList()}</ul>
            </div>
          ))}
          {boxTemplate("box3title", () => (
            <>
              <Text set="box3Desc" {...props} className="description desktop" />
              <Text
                set="box3DescMobile"
                {...props}
                className="description mobile"
              />
            </>
          ))}
          {boxTemplate("box4title", () => (
            <div className="description">{timeline()}</div>
          ))}
        </div>
      </BlockWrapper>
    </>
  );
}

export { attributes };
