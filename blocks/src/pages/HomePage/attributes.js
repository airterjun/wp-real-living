import { attributes as FeaturedTextAttr } from "../../components/FeaturedText";
import { attributes as FeaturedTitleAttr } from "../../components/FeaturedTitle";
import { attributes as HeroBannerAttr } from "../../components/HeroBanner";
import { ObjectSchema } from "../../components/Schema/object";

export const pageAttr = {
    name: 'home-page',
    title: 'Home Page',
    data: {
        section_1: ObjectSchema(HeroBannerAttr),
        section_2: ObjectSchema(FeaturedTextAttr),
        section_3: ObjectSchema(FeaturedTitleAttr)
    }
}