import BlockWrapper from "../helper/BlockWrapper";
import BlockEditor from "../helper/BlockEditor";
import ImageRender from "../helper/ImageRender";
import InputWrapper from "../helper/InputWrapper";
import LinkEditor from "../helper/LinkEditor";
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import "./../HeroBanner/style.scss";
import MediaInput from "../helper/MediaInput";
import { createAttributes } from "../helper/BaseAttributes";

export const attributes = createAttributes({
  background: ImageSchema,
  background_mobile: ImageSchema,
  text_1: TextSchema,
  text_2: TextSchema,
  text_1_mobile: TextSchema,
  text_2_mobile: TextSchema,
  link: LinkSchmea,
  buttonBook: LinkSchmea,
  label: TextSchema,
  disabled: {
    type: "boolean",
    default: false,
  },
});

const HeroBannerAlt = (props) => {
  const { disabledButton, section } = props;

  const button = () => {
    if (!disabledButton)
      return (
        <PrimaryButton
          {...props}
          className="hero-banner-button"
          title="Manage button link"
        />
      );
  };

  return (
    <>
      <BlockWrapper className="hero-banner" {...props}>
        <BlockEditor {...props} tabEditor={true}>
          <div className="tab-item active" data-name="dekstop">
            <InputWrapper label="Background">
              <MediaInput set="background" {...props} />
            </InputWrapper>
            <InputWrapper label="Button More">
              <LinkEditor {...props} set="link" />
            </InputWrapper>

            <InputWrapper label="Button Book">
              <LinkEditor {...props} set="buttonBook" />
            </InputWrapper>
            <InputWrapper label="Title">
              <Text set="text_1" {...props} tag="div" className="input" />
            </InputWrapper>
            <InputWrapper label="Description">
              <Text set="text_2" {...props} tag="div" className="input" />
            </InputWrapper>
            <InputWrapper label="Section Class">
              <Text
                set="section_class"
                {...props}
                tag="div"
                className="input"
              />
            </InputWrapper>
          </div>
          <div className="tab-item" data-name="mobile">
            <InputWrapper label="Background">
              <MediaInput set="background_mobile" {...props} />
            </InputWrapper>
            <InputWrapper label="Title">
              <Text
                set="text_1_mobile"
                {...props}
                tag="div"
                className="input"
              />
            </InputWrapper>
            <InputWrapper label="Description">
              <Text
                set="text_2_mobile"
                {...props}
                tag="div"
                className="input"
              />
            </InputWrapper>
          </div>
        </BlockEditor>
        <div className="content hero-alt">
          <div className="content-a">
            <div className="label">
              <Text {...props} set="label" tag="div" />
            </div>
            <div className="content-a--inner">
              <Text
                set="text_1"
                {...props}
                tag="h1"
                className="content-a_a h1 item desktop"
              />
              <Text
                set="text_2"
                {...props}
                tag="div"
                className="content-a-b b1 item desktop"
              />

              <Text
                set="text_1_mobile"
                {...props}
                tag="h1"
                className="content-a_a h1 item mobile"
              />
              <Text
                set="text_2_mobile"
                {...props}
                tag="div"
                className="content-a-b b1 item mobile"
              />
              <div className="buttons-action">
                <PrimaryButton
                  {...props}
                  className="hero-banner-button button-white"
                  title="Manage button link"
                />
                {/* <PrimaryButton
                  {...props}
                  className="hero-banner-button button-gold"
                  title="Manage button link"
                  set="buttonBook"
                /> */}
              </div>
            </div>
          </div>
        </div>

        <Media
          set="background"
          {...props}
          className="background parallax desktop"
        />
        <ImageRender
          value="background_mobile"
          {...props}
          className="background parallax mobile"
          fallBack="background"
        />
      </BlockWrapper>
    </>
  );
};

export default HeroBannerAlt;
