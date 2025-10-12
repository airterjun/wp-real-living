import BlockEditor from "../helper/BlockEditor";
import BlockWrapper from "../helper/BlockWrapper";
import InputWrapper from "../helper/InputWrapper";
import { getModelId, getNestedValue } from "../helper/Libs";
import ListEditor from "../helper/ListEditor";
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ArraySchema } from "../Schema/array";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

export const attributes = {
  card: ArraySchema([
    {
      thumbnail: ImageSchema,
      text_1: TextSchema,
      text_2: TextSchema,
      text_3: TextSchema,
      text_4: TextSchema,
      text_5: TextSchema,
      text_6: TextSchema,
      text_7: TextSchema,
      text_8: TextSchema,
    },
    {
      thumbnail: ImageSchema,
      text_1: TextSchema,
      text_2: TextSchema,
      text_3: TextSchema,
      text_4: TextSchema,
      text_5: TextSchema,
      text_6: TextSchema,
      text_7: TextSchema,
      text_8: TextSchema,
    },
  ]),

  banner: ImageSchema,
  title_background: ImageSchema,
  title: TextSchema,
  titleSlim: TextSchema,
  description: TextSchema,
  experiencesYears: TextSchema,
  epxeriencesDesc: TextSchema,
  transactionValue: TextSchema,
  transactionDesc: TextSchema,
};

export default function (props) {
  const listItems = getNestedValue(props.attributes, getModelId("card", props));

  const cards = () =>
    listItems.map((_, i) => {
      const t1 = `card.${i}.text_1`;
      const t2 = `card.${i}.text_2`;
      const t3 = `card.${i}.text_3`;
      const t4 = `card.${i}.text_4`;
      const t5 = `card.${i}.text_5`;
      const t6 = `card.${i}.text_6`;
      const t7 = `card.${i}.text_7`;
      const t8 = `card.${i}.text_8`;
      const thumb = `card.${i}.thumbnail`;

      return (
        <div className="teams-cards-item">
          <div className="group section-1">
            <div className="content">
              <Text tag="h2" className="t-1" set={t1} {...props} />
              <Text set={t2} {...props} className="t-2" tag="div" />
              <Text set={t3} {...props} className="t-3" tag="div" />
            </div>
            <Media set={thumb} {...props} className="parallax" />
          </div>
          <div className="group section-2">
            <div className="content">
              <div className="icon">
                <IconArrow />
              </div>
              <Text {...props} set={t4} className="t-1" tag="div" />
            </div>
            <div className="content">
              <div className="icon">
                <IconArrow />
              </div>
              <Text {...props} set={t5} className="t-1" tag="div" />
            </div>
            <div className="content">
              <div className="icon">
                <IconArrow />
              </div>
              <Text {...props} set={t6} className="t-1" tag="div" />
            </div>
          </div>

          <div className="group section-3">
            <Text {...props} set={t7} className="t-1" tag="div" />
            <Text {...props} set={t8} className="t-1" tag="div" />
          </div>
        </div>
      );
    });

  const cardsEditor = (i) => {
    const t1 = `card.${i}.text_1`;
    const t2 = `card.${i}.text_2`;
    const t3 = `card.${i}.text_3`;
    const t4 = `card.${i}.text_4`;
    const t5 = `card.${i}.text_5`;
    const t6 = `card.${i}.text_6`;
    const t7 = `card.${i}.text_7`;
    const t8 = `card.${i}.text_8`;
    const thumb = `card.${i}.thumbnail`;

    return (
      <>
        <InputWrapper label="Name">
          <Text tag="h2" set={t1} {...props} />
        </InputWrapper>

        <InputWrapper label="Position">
          <Text set={t2} {...props} tag="div" />
        </InputWrapper>

        <InputWrapper label="Detail">
          <Text set={t3} {...props} tag="div" />
        </InputWrapper>

        <InputWrapper label="Thumb">
          <Media set={thumb} {...props} />
        </InputWrapper>

        <InputWrapper label="Capabilities #1">
          <Text {...props} set={t4} tag="div" />
        </InputWrapper>

        <InputWrapper label="Capabilities #2">
          <Text {...props} set={t5} tag="div" />
        </InputWrapper>

        <InputWrapper label="Capabilities #3">
          <Text {...props} set={t6} tag="div" />
        </InputWrapper>

        <InputWrapper label="Left footer desciption">
          <Text {...props} set={t7} tag="div" />
        </InputWrapper>

        <InputWrapper label="Right footer desciption">
          <Text {...props} set={t8} tag="div" />
        </InputWrapper>
      </>
    );
  };

  return (
    <BlockWrapper className="teams" {...props}>
      <BlockEditor {...props}>
        <div className="tab-item active">
          <InputWrapper label="Banner">
            <Media {...props} set="banner" />
          </InputWrapper>
          <InputWrapper label="Background">
            <Media {...props} set="title_background" />
          </InputWrapper>
          <InputWrapper label="Description">
            <Text {...props} set="description" tag="div" />
          </InputWrapper>
          <InputWrapper label="Title">
            <Text {...props} set="title" tag="div" />
          </InputWrapper>
          <InputWrapper label="Team">
            <ListEditor
              nested={true}
              set="card"
              title="text_1"
              {...props}
              template={(index) => cardsEditor(index)}
            />
          </InputWrapper>
        </div>
      </BlockEditor>
      <div className="decor decor-1"></div>
      <div className="decor decor-2"></div>

      <div className="header">
        <div className="box-decor-header"></div>
        <div className="border-decor-header"></div>
        <Media {...props} set="banner" className="parallax" />
        <div className="header-content-wrapper">
          <div className="header-content">
            <IconArrow />
            <Text {...props} set="description" tag="div" />
          </div>
          <div className="number-section">
            <div className="group">
              <Text {...props} set="experiencesYears" tag="h3" />
              <Text
                {...props}
                set="epxeriencesDesc"
                tag="div"
                className="desc"
              />
            </div>

            <div className="group">
              <Text {...props} set="transactionValue" tag="h3" />
              <Text
                {...props}
                set="transactionDesc"
                tag="div"
                className="desc"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <div className="group">
          <Text {...props} set="titleSlim" tag="h2" className="title-slim" />
          <Text {...props} set="title" tag="h2" />
        </div>
        <Media {...props} set="title_background" className="parallax" />
      </div>
      <div className="teams-cards">{cards()}</div>
    </BlockWrapper>
  );
}
