import FeaturedSlider, { attributes as FeaturedSliderAttr } from "../FeaturedSlider";
import FeaturedTextAlt, { attributes as FeaturedTextAltAttr } from "../FeaturedTextAlt";
import HeroBanner, { attributes as HeroBannerAttr } from "../HeroBanner";
import NewsLetterForm, { attributes as NewsLetterFormAttr } from "../NewsLetterForm";
import { ObjectSchema } from "../Schema/object";
import ThreeColumnCardTitleCTA, { attributes as ThreeColumnCardTitleCTAAttr } from "../ThreeColumnCardTitleCTA";
import TwoGridColumnCardTitleCTA, { attributes as TwoGridColumnCardTitleCTAAttr } from "../TwoGridColumnCardTitleCTA";
import TwoGridColumnCardTitleCTAAlt, { attributes as TwoGridColumnCardTitleCTAAltAttr } from "../TwoGridColumnCardTitleCTAAlt";

import "./style.scss";

export const attributes = {
    section_1: ObjectSchema(HeroBannerAttr),
    section_2: ObjectSchema(TwoGridColumnCardTitleCTAAttr),
    section_3: ObjectSchema(TwoGridColumnCardTitleCTAAttr),
    section_4: ObjectSchema(ThreeColumnCardTitleCTAAttr),
    section_5: ObjectSchema(TwoGridColumnCardTitleCTAAltAttr),
    section_6: ObjectSchema(FeaturedSliderAttr),
    section_7: ObjectSchema(NewsLetterFormAttr),
    section_8: ObjectSchema(FeaturedTextAltAttr)
}

export default function (props) {

    return (
        <>
            <HeroBanner {...props} model="section_1" disabledButton={true} />
            <TwoGridColumnCardTitleCTA {...props} model="section_2" />
            <div className="b-2-g">
                <TwoGridColumnCardTitleCTA {...props} model="section_3" />
            </div>
            <ThreeColumnCardTitleCTA {...props} model="section_4" />
            <TwoGridColumnCardTitleCTAAlt {...props} model="section_5" />
            <FeaturedSlider {...props} model="section_6" />
            <FeaturedTextAlt {...props} model="section_8" />
            <NewsLetterForm {...props} model="section_7" />
        </>
    )

}