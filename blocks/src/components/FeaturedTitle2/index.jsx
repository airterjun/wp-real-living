import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import Controller from "../helper/Controller";
import InputWrapper from "../helper/InputWrapper";
import { getModelId, getNestedValue } from "../helper/Libs";
import LinkEditor from "../helper/LinkEditor";
import ListEditor from "../helper/ListEditor";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ArraySchema } from "../Schema/array";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

export const attributes = {
  title: TextSchema,
  description: TextSchema,
  textButton: TextSchema,
  link: LinkSchmea,
  list: ArraySchema([
    {
      title: TextSchema,
      description: TextSchema,
    },
    {
      title: TextSchema,
      description: TextSchema,
    },
    {
      title: TextSchema,
      description: TextSchema,
    },
  ]),
  listMobile: ArraySchema([
    {
      title: TextSchema,
      description: TextSchema,
    },
    {
      title: TextSchema,
      description: TextSchema,
    },
    {
      title: TextSchema,
      description: TextSchema,
    },
  ]),
};

export default function (props) {
  const listItems = getNestedValue(props.attributes, getModelId("list", props));

  const mobileEditor = (index, mobile) => {
    const title = `${mobile ? "listMobile" : "list"}.${index}.title`;
    const desc = `${mobile ? "listMobile" : "list"}.${index}.description`;
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

  const listEl = (listing = "list") =>
    listItems.map((_, index) => {
      const title = `${listing}.${index}.title`;
      const desc = `${listing}.${index}.description`;
      return (
        <div className="card-item-a">
          <IconArrow />
          <div className="card-item-a-a">
            <Text
              {...props}
              set={title}
              className="card-item-a-a-a"
              tag="div"
            />
            <Text {...props} set={desc} className="card-item-a-a-b" tag="div" />
          </div>
        </div>
      );
    });

  return (
    <BlockWrapper className="featured-title-2" {...props}>
      <BlockEditor {...props} tabEditor={true}>
        <div className="tab-item active" data-name="dekstop">
          <InputWrapper label="Title">
            <Text set="title" {...props} tag="div" />
          </InputWrapper>
          <InputWrapper label="Description">
            <Text set="description" {...props} tag="div" />
          </InputWrapper>
          <InputWrapper label="List">
            <ListEditor
              nested={true}
              set="list"
              title="title"
              {...props}
              template={(index) => mobileEditor(index, true)}
            />
          </InputWrapper>
          <LinkEditor {...props} set="link" />
        </div>

        <div className="tab-item" data-name="dekstop">
          <InputWrapper label="List">
            <ListEditor
              nested={true}
              set="list"
              title="title"
              {...props}
              template={(index) => mobileEditor(index)}
            />
          </InputWrapper>
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
        <Text className="title" set="title" {...props} tag="h2" />
        <Text className="description" set="description" {...props} tag="div" />
      </div>
      <div className="main-container columb-card">
        <div className="card-item desktop">{listEl()}</div>

        <div className="card-item mobile">{listEl("listMobile")}</div>
        <PrimaryButton {...props} />
      </div>
    </BlockWrapper>
  );
}
