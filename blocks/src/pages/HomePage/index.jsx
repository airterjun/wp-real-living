import BannerContact from "../../components/BannerContact";
import FeaturedText from "../../components/FeaturedText";
import FeaturedTitle from "../../components/FeaturedTitle";
import HeroBanner from "../../components/HeroBanner";
import RegularBanner from "../../components/RegularBanner";
import TwoColumnText from "../../components/TwoColumnText";
import { pageAttr } from "./attributes";


const template = (props) => {
    return <>
        <HeroBanner {...props} model="section_1" />
        <FeaturedText {...props} model="section_2" />
        <FeaturedTitle {...props} model="section_3" />
        <RegularBanner {...props} model="section_4" />
        <TwoColumnText {...props} model="section_5" />
        <BannerContact {...props} model="section_6" />
    </>
}


export default template

export {
    pageAttr
}