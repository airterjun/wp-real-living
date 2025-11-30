import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import { getModelId, getNestedValue } from "../helper/Libs";
import ListEditor from "../helper/ListEditor";
import ResponsiveContent from "../helper/ResponsiveContent";
import { ArraySchema } from "../Schema/array";
import { ResponsiveSchema } from "../Schema/multiKeySchema";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";
const attributes = {
  list: ArraySchema(
    [
      {
        ...ResponsiveSchema("title", "text"),
        ...ResponsiveSchema("description", "text"),
      },
    ],
    4
  ),
};

export default function (props) {
  const listItems = getNestedValue(props.attributes, getModelId("list", props));

  const template = (index) => {
    const keyTitle = `list.${index}.title`;
    const keyDesc = `list.${index}.description`;
    return (
      <div className="card-wrapper">
        <div className="card-wrapper-a">
          <div className="icon">
            <IconArrow />
          </div>
          <ResponsiveContent {...props} set={keyTitle} tag="h2" type="text" />
        </div>
        <div className="card-wrapper-b">
          <ResponsiveContent
            {...props}
            set={keyDesc}
            className="description"
            type="text"
          />
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
        <ResponsiveContent {...props} set={keyTitle} />
        <ResponsiveContent {...props} set={keyDesc} />
      </>
    );
  };

  const tabs = [];

  return (
    <>
      <BlockWrapper {...props} className="two-grid-column-card">
        <BlockEditor {...props} tabs={tabs}>
          {/* <div className="tab-item active" data-name="dekstop">
            <InputWrapper label="List">
              <ListEditor
                set="list"
                {...props}
                template={(index) => editorTemplate(index)}
                title="title"
                nested={true}
              />
            </InputWrapper>
          </div> */}
        </BlockEditor>

        <div className="content">{grid()}</div>
      </BlockWrapper>
    </>
  );
}

export { attributes };
