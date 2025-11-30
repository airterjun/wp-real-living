import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import ButtonSlider from "../helper/ButtonSlider";
import Controller from "../helper/Controller";
import InputWrapper from "../helper/InputWrapper";
import { getModelId, getNestedValue } from "../helper/Libs";
import ListEditor from "../helper/ListEditor";
import ResponsiveContent from "../helper/ResponsiveContent";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ResponsiveSchema } from "../Schema/multiKeySchema";
import { TextSchema } from "../Schema/text";
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
        <ResponsiveContent {...props} set={keyTitle} />
        <ResponsiveContent {...props} set={keyDesc} />
      </>
    );
  };

  return (
    <>
      <BlockWrapper {...props} className="two-grid-column-card">
        <BlockEditor {...props}>
          <div className="tab-item active" data-name="dekstop">
            <InputWrapper label="List">
              <ListEditor
                set="list"
                {...props}
                template={(index) => editorTemplate(index)}
                title="title"
                nested={true}
              />
            </InputWrapper>
          </div>
        </BlockEditor>

        <div className="content">{grid()}</div>
      </BlockWrapper>
    </>
  );
}

export { attributes };
