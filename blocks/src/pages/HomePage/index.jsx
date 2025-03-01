import FeaturedText from "../../components/FeaturedText";
import FeaturedTitle from "../../components/FeaturedTitle";
import HeroBanner from "../../components/HeroBanner";
import { pageAttr } from "./attributes";


const template = (props) => {
    return <>
        <HeroBanner {...props} model="section_1" />
        <FeaturedText {...props} model="section_2" />
        <FeaturedTitle {...props} model="section_3" />
    </>
}


export default template

export {
    pageAttr
}