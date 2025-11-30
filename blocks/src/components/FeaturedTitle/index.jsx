import { CheckboxControl } from "@wordpress/components";
import { createAttributes } from "../helper/BaseAttributes";
import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import {
  getModelId,
  getModelValue,
  getNestedValue,
  updateAttributesData,
} from "../helper/Libs";
import LinkEditor from "../helper/LinkEditor";
import ListEditor from "../helper/ListEditor";
import StyleClassEditor from "../helper/StyleClassEditor";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ArraySchema } from "../Schema/array";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema, TextSchemaEmpty } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";
import ResponsiveContent from "../helper/ResponsiveContent";
import { MultiDeviceSchema, ResponsiveSchema } from "../Schema/multiKeySchema";

export const attributes = createAttributes({
  title: TextSchema,
  titleMobile: TextSchema,
  ...ResponsiveSchema("description", "text"),
  textButton: TextSchema,
  link: LinkSchmea,
  list: ArraySchema([
    {
      title: TextSchema,
      ...MultiDeviceSchema("description", "text"),
      mobileTitle: TextSchemaEmpty,
      withLink: {
        type: Boolean,
        default: false,
      },
      link: LinkSchmea,
    },
    {
      title: TextSchema,
      ...MultiDeviceSchema("description", "text"),
      mobileTitle: TextSchemaEmpty,
      withLink: {
        type: Boolean,
        default: false,
      },
      link: LinkSchmea,
    },
    {
      title: TextSchema,
      ...MultiDeviceSchema("description", "text"),
      mobileTitle: TextSchemaEmpty,
      withLink: {
        type: Boolean,
        default: false,
      },
      link: LinkSchmea,
    },
    {
      title: TextSchema,
      ...MultiDeviceSchema("description", "text"),
      mobileTitle: TextSchemaEmpty,
      withLink: {
        type: Boolean,
        default: false,
      },
      link: LinkSchmea,
    },
  ]),
});

export default function (props) {
  const { type, disabledContent, disabledDescription } = props;
  const listItems = getNestedValue(props.attributes, getModelId("list", props));

  const listEl = () =>
    listItems.map((_, index) => {
      const title = `list.${index}.title`;
      const desc = `list.${index}.description`;
      const titleMobile = `list.${index}.mobileTitle`;
      const isLinkEnabled = getModelValue(`list.${index}.withLink`, props);
      const link = getModelValue(`list.${index}.link`, props);

      return (
        <div className="card-item-a">
          <IconArrow />
          <div className="card-item-a-a">
            <Text
              {...props}
              set={title}
              className="card-item-a-a-a desktop"
              tag="div"
            />
            <Text
              {...props}
              set={titleMobile}
              className="card-item-a-a-a mobile"
              tag="div"
            />

            <ResponsiveContent
              {...props}
              set={desc}
              type="text"
              className="card-item-a-a-b"
            />
            {isLinkEnabled && (
              <div className="button-link">
                <a href={link ? link.url : "#"}>
                  <span>{link ? link.title : "See our requirements"}</span>
                  <IconArrow />
                </a>
              </div>
            )}
          </div>
        </div>
      );
    });

  const footerContent = () => {
    if (!disabledContent) {
      return (
        <div className="main-container columb-card">
          <div className="card-item">{listEl()}</div>
          <Text
            className="text-top-button"
            set="textButton"
            {...props}
            tag="div"
          />
          <PrimaryButton {...props} />
        </div>
      );
    }
  };

  const listTemplateEditor = (index, isMobile) => {
    const title = `list.${index}.title`;
    const desc = `list.${index}.description`;
    const titleMobile = `list.${index}.mobileTitle`;
    const isLinkEnabled = getModelValue(`list.${index}.withLink`, props);

    const linkEditorWrapper = () => {
      return (
        <>
          <InputWrapper label="Add Link?">
            <CheckboxControl
              label="Add Link"
              checked={isLinkEnabled}
              onChange={(val) => {
                updateAttributesData(`list.${index}.withLink`, val, props);
              }}
            />
          </InputWrapper>
          {isLinkEnabled && (
            <LinkEditor {...props} set={`list.${index}.link`} />
          )}
        </>
      );
    };

    if (isMobile) {
      return (
        <>
          <InputWrapper label="Title">
            <Text {...props} set={titleMobile} tag="div" />
          </InputWrapper>
          {linkEditorWrapper()}
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
        {linkEditorWrapper()}
      </>
    );
  };

  return (
    <BlockWrapper
      className={`grid featured-title ${disabledContent ? "no-footer" : ""} ${
        disabledDescription ? "no-description" : ""
      }`}
      {...props}
    >
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
              <InputWrapper label="List">
                <ListEditor
                  nested={true}
                  set="list"
                  title="title"
                  template={(index) => listTemplateEditor(index)}
                  {...props}
                />
              </InputWrapper>
              <InputWrapper label="Text above button">
                <Text set="textButton" {...props} tag="div" />
              </InputWrapper>
              <LinkEditor {...props} set="link" />
            </>
          )}

          <StyleClassEditor {...props} />
        </div>
        <div className="tab-item">
          {!disabledContent && (
            <>
              <InputWrapper label="List">
                <ListEditor
                  nested={true}
                  set="list"
                  title="title"
                  template={(index) => listTemplateEditor(index, true)}
                  {...props}
                />
              </InputWrapper>
            </>
          )}
        </div>
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
        <Text className="title desktop" set="title" {...props} tag="h2" />
        <Text className="title mobile" set="titleMobile" {...props} tag="h2" />
        {!disabledDescription && (
          <ResponsiveContent
            {...props}
            set="description"
            type="text"
            className="description"
          />
        )}
      </div>

      {footerContent()}
    </BlockWrapper>
  );
}
