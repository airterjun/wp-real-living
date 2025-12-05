import React from "react";
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";

import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import LinkEditor from "../helper/LinkEditor";
import "./style.scss";
import InputWrapper from "../helper/InputWrapper";
import CheckBox from "../helper/Checkbox";
import { getModelValue } from "../helper/Libs";

export const attributes = {
  title: TextSchema,
  title_mobile: TextSchema,
  background: ImageSchema,
  background_mobile: ImageSchema,
  link: LinkSchmea,
  disabedLink: {
    type: Boolean,
    default: false,
  },
};
export default function (props) {
  const isDisabledButton = getModelValue("disabedLink", props);
  return (
    <BlockWrapper {...props} className="banner-with-title-cta">
      <BlockEditor {...props} tabEditor={true}>
        <div className="tab-item active">
          <InputWrapper label="Background">
            <Media set="background" {...props} />
          </InputWrapper>
          <InputWrapper label="Title">
            <Text set="title" {...props} tag="div" />
          </InputWrapper>
          <CheckBox {...props} label="Disabled Button?" set="disabedLink" />

          {!isDisabledButton && (
            <InputWrapper label="Button">
              <LinkEditor {...props} set="link" />
            </InputWrapper>
          )}
        </div>

        <div className="tab-item">
          <InputWrapper label="Background">
            <Media set="background_mobile" {...props} />
          </InputWrapper>
          <InputWrapper label="Title">
            <Text set="title_mobile" {...props} tag="div" />
          </InputWrapper>
        </div>
      </BlockEditor>
      <div className="inner-container">
        <Text set="title" {...props} tag="h1" className="desktop" />
        <Text set="title_mobile" {...props} tag="h1" className="mobile" />
        {!isDisabledButton && <PrimaryButton {...props} />}
      </div>

      <Media set="background" {...props} className="parallax desktop" />
      <Media set="background_mobile" {...props} className="parallax mobile" />
    </BlockWrapper>
  );
}
