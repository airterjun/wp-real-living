import BannerContact from "../../components/BannerContact";
import FeaturedText from "../../components/FeaturedText";
import FeaturedTitle from "../../components/FeaturedTitle";
import HeroBanner from "../../components/HeroBanner";
import RegularBanner from "../../components/RegularBanner";
import TwoColumnText from "../../components/TwoColumnText";
import { pageAttr } from "./attributes";


const template = (props) => {
    return <>
        <HeroBanner {...props} model="section_1" section="1" />
        <FeaturedText {...props} model="section_2" section="2" />
        <FeaturedTitle {...props} model="section_3" section="3" />
        <RegularBanner {...props} model="section_4" section="4" />
        <TwoColumnText {...props} model="section_5" section="5" />
        <BannerContact {...props} model="section_6" section="6" />
    </>
}


export default template

export {
    pageAttr
}