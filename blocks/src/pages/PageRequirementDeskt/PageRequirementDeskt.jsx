import BannerContact, { attributes as BannerContactAttr } from "../../components/BannerContact";
import FeaturedTitle, { attributes as FeaturedTitleAttr } from "../../components/FeaturedTitle";
import HeroBanner, { attributes as HeroBannerAttr } from "../../components/HeroBanner";
import RegularBanner, { attributes as RegularBannerAttr } from "../../components/RegularBanner";
import { ObjectSchema } from "../../components/Schema/object";
import TwoColumnText, { attributes as TwoColumnTextAttr } from "../../components/TwoColumnText";
import TwoGridColumnCard, { attributes as TwoGridColumnCardAttr } from "../../components/TwoGridColumnCard";

import "./style.scss";
export const pageAttr = {
    title: 'Page Requirement',
    name: 'page-requirement',
    data: {
        section_1: ObjectSchema(HeroBannerAttr),
        section_2: ObjectSchema(TwoColumnTextAttr),
        section_3: ObjectSchema(RegularBannerAttr),
        section_4: ObjectSchema(FeaturedTitleAttr),
        section_5: ObjectSchema(TwoGridColumnCardAttr),
        section_6: ObjectSchema(BannerContactAttr),
    }
}

export default function (props) {

    return (
        <div className="requirement">
            <HeroBanner {...props} model="section_1" section="1" />
            <TwoColumnText {...props} model="section_2" section="2" />
            <RegularBanner {...props} model="section_3" section="3" />
            <FeaturedTitle {...props} model="section_4" section="4" disabledContent={true} />
            <TwoGridColumnCard {...props} model="section_5" section="5" />
            <BannerContact {...props} model="section_6" section="6" hideBanner={true} />
        </div>
    )
}