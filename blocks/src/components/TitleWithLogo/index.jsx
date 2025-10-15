import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import { getModelId, getNestedValue } from "../helper/Libs";
import Text from "../helper/Text";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = createAttributes({
  title: TextSchema,
  description: TextSchema,
  label: TextSchema,
});

export default function (props) {
  const { type, disabledContent, disabledDescription } = props;
  const listItems = getNestedValue(props.attributes, getModelId("list", props));

  const listTemplateEditor = (index, mobil) => {
    const title = `list.${index}.title`;
    const desc = `list.${index}.description`;
    const titleMobile = `list.${index}.mobileTitle`;

    if (mobil) {
      return (
        <>
          <InputWrapper label="Title">
            <Text {...props} set={titleMobile} tag="div" />
          </InputWrapper>
        </>
      );
    }

    return (
      <>
        <InputWrapper label="Title">
          <Text {...props} set={title} tag="div" />
        </InputWrapper>
        <InputWrapper label="Description">
          <Text {...props} set={desc} tag="div" />
        </InputWrapper>
      </>
    );
  };

  return (
    <BlockWrapper className="grid featured-title no-footer" {...props}>
      <BlockEditor {...props} tabEditor={true}>
        <div className="tab-item active">
          <InputWrapper label="Title">
            <Text set="title" {...props} />
          </InputWrapper>
          {!disabledDescription && (
            <InputWrapper label="Description">
              <Text set="description" {...props} tag="div" />
            </InputWrapper>
          )}

          {!disabledContent && (
            <>
              <InputWrapper label="Text above button">
                <Text set="textButton" {...props} tag="div" />
              </InputWrapper>
            </>
          )}
        </div>
        <div className="tab-item">{!disabledContent && <></>}</div>
      </BlockEditor>
      <div className="main-container top-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 250 235"
        >
          <path
            stroke="#937E4E"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M1 233.31V1h115.88v116.43c0 64-51.88 115.88-115.88 115.88ZM143.37 100.87V1h104.87c0 57.92-46.95 99.87-104.87 99.87ZM143.37 128.44h104.87v104.87c-57.92 0-104.87-46.95-104.87-104.87Z"
          />
        </svg>
        <div className="content-wrapper">
          <Text className="label" set="label" {...props} tag="div" />
          <Text className="title" set="title" {...props} tag="h2" />
          <Text
            className="description"
            set="description"
            {...props}
            tag="div"
          />
        </div>
      </div>
    </BlockWrapper>
  );
}
