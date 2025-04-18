import BannerContact, { attributes as BannerContactAtr } from "../../components/BannerContact"
import BannerContactAlt, { attributes as BannerContactAltAttr } from "../../components/BannerContactAlt"
import HeroBanner, { attributes as HeroBannerAttr } from "../../components/HeroBanner"
import ImageLeftSideText, { attributes as ImageLeftSideTextAttr } from "../../components/ImageLeftSideText"
import RegularBanner, { attributes as RegularBannerAttr } from "../../components/RegularBanner"
import { ObjectSchema } from "../../components/Schema/object"
import TwoColumnCard, { attributes as TwoColumnCardAttr } from "../../components/TwoColumnCard"
import TwoGridColumnCard, { attributes as TwoGridColumnCardAttr } from "../../components/TwoGridColumnCard"

export const pageAttr = {
    name: 'news-page',
    title: 'News Page',
    data: {
        section_1: ObjectSchema(HeroBannerAttr),
        section_2: ObjectSchema(TwoColumnCardAttr),
        section_3: ObjectSchema(RegularBannerAttr),
        section_4: ObjectSchema(TwoGridColumnCardAttr),
        contact: ObjectSchema(BannerContactAtr),
        section_5: ObjectSchema(BannerContactAltAttr),
        section_7: ObjectSchema(ImageLeftSideTextAttr)
    }
}

export default function (props) {
    return <>
        <HeroBanner {...props} model="section_1" section="1" />
        <ImageLeftSideText {...props} model="section_7" section="2" />
        <TwoColumnCard {...props} model="section_2" section="3" />
        <RegularBanner {...props} model="section_3" section="4" />
        <TwoGridColumnCard {...props} model="section_4" section="5" />
        <BannerContactAlt {...props} model="section_5" section="6" />
        <BannerContact {...props} model="contact" section="7" />
    </>
}

