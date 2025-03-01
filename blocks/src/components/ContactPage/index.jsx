import Dealer, { attributes as DealerAttr } from "../Dealer";
import FeaturedTextAlt, { attributes as FeaturedTextAltAttr } from "../FeaturedTextAlt";
import FeaturedTitle, { attributes as FeaturedTitleAttr } from "../FeaturedTitle";
import HeroBanner, { attributes as HeroBannerAttr } from "../HeroBanner";
import NewsLetterForm, { attributes as NewsLetterFormAttr } from "../NewsLetterForm";
import Partners, { attributes as PartnersAttr } from "../Partners";
import RegularBanner, { attributes as RegularBannerAtr } from "../RegularBanner";
import { ObjectSchema } from "../Schema/object";
import TwoColumnOffice, { attributes as TwoColumnOfficeAttr } from "../TwoColumnOffice";


import "./style.scss";

export const attributes = {
    section_1: ObjectSchema(HeroBannerAttr),
    section_2: ObjectSchema(PartnersAttr),
    section_3: ObjectSchema(FeaturedTitleAttr),
    section_4: ObjectSchema(TwoColumnOfficeAttr),
    section_5: ObjectSchema(RegularBannerAtr),
    section_6: ObjectSchema(FeaturedTitleAttr),
    section_7: ObjectSchema(DealerAttr),
    section_8: ObjectSchema(DealerAttr),
    section_9: ObjectSchema(FeaturedTextAltAttr),
    section_11: ObjectSchema(NewsLetterFormAttr)
}

export default function (props) {
    return (
        <>
            <HeroBanner {...props} model="section_1" disabledButton={true} />
            <Partners {...props} model="section_2" />
            <FeaturedTitle {...props} model="section_3" />
            <TwoColumnOffice {...props} model="section_4" />
            <RegularBanner {...props} model="section_5" />
            <FeaturedTitle {...props} model="section_6" />
            <div className="dealer-locator">
                <Dealer {...props} model="section_7" />
                <Dealer {...props} model="section_8" />
            </div>
            <FeaturedTextAlt {...props} model="section_9" />
            <NewsLetterForm {...props} model="section_10" />
        </>
    )
}