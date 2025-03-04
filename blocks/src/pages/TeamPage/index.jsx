import BannerContact, { attributes as BannerContactAttr } from "../../components/BannerContact"
import HeroBanner, { attributes as HeroBannerAttr } from "../../components/HeroBanner"
import { ObjectSchema } from "../../components/Schema/object"
import Team, { attributes as TeamAttr } from "../../components/Team"

export const pageAttr = {
    name: "team-page",
    title: "Team Page",
    data: {
        section_1: ObjectSchema(HeroBannerAttr),
        section_2: ObjectSchema(TeamAttr),
        section_3: ObjectSchema(BannerContactAttr)
    }

}

export default function (props) {
    return <>
        <HeroBanner {...props} model="section_1" />
        <Team {...props} model="section_2" />
        <BannerContact {...props} model="section_3" />
    </>
}


