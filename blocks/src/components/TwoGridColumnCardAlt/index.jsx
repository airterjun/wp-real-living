import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import { getDataByKey, getModelId, getNestedValue } from "../helper/Libs";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";
const attributes = createAttributes({
  box1Title: TextSchema,
  box1Desc: TextSchema,
  box2Title: TextSchema,
  amenityList: ArraySchema(
    {
      num: TextSchema,
      title: TextSchema,
    },
    10
  ),
  box3Title: TextSchema,
  box3Desc: TextSchema,
  box4Title: TextSchema,
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

  const template = (index) => {
    const keyTitle = `list.${index}.title`;
    const keyDesc = `list.${index}.description`;
    return (
      <div className="card-wrapper">
        <div className="card-wrapper-a">
          <div className="icon">
            <IconArrow />
          </div>
          <Text tag="h2" set={keyTitle} {...props} />
        </div>
        <div className="card-wrapper-b">
          <Text set={keyDesc} {...props} className="description" />
        </div>
      </div>
    );
  };

  const grid = () => listItems.map((_, index) => template(index));

  const editorTemplate = (index) => {
    const keyTitle = `list.${index}.title`;
    const keyDesc = `list.${index}.description`;
    return (
      <>
        <InputWrapper label="Title">
          <Text tag="div" set={keyTitle} {...props} />
        </InputWrapper>
        <InputWrapper label="Description">
          <Text tag="div" set={keyDesc} {...props} />
        </InputWrapper>
      </>
    );
  };

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

  console.log("amenity", amenity);

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
          <Text tag="h2" set={title} {...props} />
        </div>
        <div className="card-wrapper-b">{desc()}</div>
      </div>
    );
  };

  return (
    <>
      <BlockWrapper {...props} className="two-grid-column-card">
        <BlockEditor {...props}>
          <div className="tab-item active" data-name="dekstop">
            <InputWrapper label="List"></InputWrapper>
          </div>
        </BlockEditor>

        <div className="content">
          {boxTemplate("box1title", () => (
            <Text set="box1Desc" {...props} className="description" />
          ))}
          {boxTemplate("box2title", () => (
            <div className="description amenity-list-wrapper">
              <ul className="amenity-list">{amenityList()}</ul>
            </div>
          ))}
          {boxTemplate("box3title", () => (
            <Text set="box3Desc" {...props} className="description" />
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
