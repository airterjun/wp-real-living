import BannerContact, {
  attributes as BannerContactAttr,
} from "../../components/BannerContact";
import BannerWithTitleCta, {
  attributes as BannerWithTitleCtaAttr,
} from "../../components/BannerWithTitleCta";
import FeaturedText, {
  attributes as FeaturedTextAttr,
} from "../../components/FeaturedText";
import FeaturedTitle, {
  attributes as FeaturedTitleAttr,
} from "../../components/FeaturedTitle";
import HeroBanner, {
  attributes as HeroBannerAttr,
} from "../../components/HeroBanner";
import RegularBannerHalfText, {
  attributes as BannerHalfAttr,
} from "../../components/RegularBannerHalfText";
import { ObjectSchema } from "../../components/Schema/object";
export const pageAttr = {
  title: "Page Partners",
  name: "page-partners",
  data: {
    section_1: ObjectSchema(HeroBannerAttr),
    section_2: ObjectSchema(FeaturedTextAttr),
    section_3: ObjectSchema(FeaturedTitleAttr),
    section_4: ObjectSchema(BannerWithTitleCtaAttr),
    section_5: ObjectSchema(BannerContactAttr),
    bannerHalfText: ObjectSchema(BannerHalfAttr),
  },
};

export default function (props) {
  return (
    <section className="page-partner">
      <HeroBanner {...props} model="section_1" section="1" />
      <FeaturedText {...props} model="section_2" section="2" />
      <FeaturedTitle
        {...props}
        model="section_3"
        section="3"
        disabledDescription={true}
      />
      <BannerWithTitleCta {...props} model="section_4" section="4" />
      <RegularBannerHalfText {...props} model="bannerHalfText" />
      <BannerContact
        {...props}
        model="section_5"
        section="5"
        hideBanner={true}
      />
    </section>
  );
}
