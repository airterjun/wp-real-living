import BannerOffice, { attributes as BannerOfficeAttr } from "../../components/BannerOffice"
import ContactForm, { attributes as ContactFormAttr } from "../../components/ContactForm"
import FeaturedText2, { attributes as FeaturedText2Attr } from "../../components/FeaturedText2"
import FeaturedTitle2, { attributes as FeaturedTitle2Attr } from "../../components/FeaturedTitle2"
import HeroBanner, { attributes as HeroBannerAttr } from "../../components/HeroBanner"
import { ObjectSchema } from "../../components/Schema/object"

export const pageAttr = {
    name: 'contact-page',
    title: 'Contact Page',
    data: {
        section_1: ObjectSchema(HeroBannerAttr),
        section_2: ObjectSchema(FeaturedText2Attr),
        section_3: ObjectSchema(FeaturedTitle2Attr),
        section_4: ObjectSchema(ContactFormAttr),
        section_5: ObjectSchema(BannerOfficeAttr)

    }
}



export default function (props) {
    return <>
        <HeroBanner {...props} model="section_1" section="1" />
        <FeaturedText2 {...props} model="section_2" section="2" />
        <FeaturedTitle2 {...props} model="section_3" section="3" />
        <ContactForm {...props} model="section_4" section="4" />
        <BannerOffice {...props} model="section_5" section="5" />
    </>
}