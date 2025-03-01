import { attributes as BannerContact } from "../../components/BannerContact";
import { attributes as FeaturedTextAttr } from "../../components/FeaturedText";
import { attributes as FeaturedTitleAttr } from "../../components/FeaturedTitle";
import { attributes as HeroBannerAttr } from "../../components/HeroBanner";
import { attributes as RegularBanner } from "../../components/RegularBanner";
import { ObjectSchema } from "../../components/Schema/object";
import { attributes as TwoColumnText } from "../../components/TwoColumnText";

export const pageAttr = {
    name: 'home-page',
    title: 'Home Page',
    data: {
        section_1: ObjectSchema(HeroBannerAttr),
        section_2: ObjectSchema(FeaturedTextAttr),
        section_3: ObjectSchema(FeaturedTitleAttr),
        section_4: ObjectSchema(RegularBanner),
        section_5: ObjectSchema(TwoColumnText),
        section_6: ObjectSchema(BannerContact)
    }
}