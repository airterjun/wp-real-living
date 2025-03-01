import Controller from '../helper/Controller';
import Media from "../helper/Media";
import Text from "../helper/Text";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { ImageSchema } from "../Schema/image";
import { LinkSchmea } from "../Schema/linkSchema";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = {
  title: TextSchema,
  subTitle: TextSchema,
  description: TextSchema,
  link: LinkSchmea,
  background: ImageSchema
}

export default function (props) {

  return (
    <>
      <Controller {...props}>
        <div className="inner card-list-editor-color">
        </div>
      </Controller>
      <section className="featured-text-alt grid">
        <div className={`container content ${props.customClass ? props.customClass : ''}`}>
          <Text set="subTitle" {...props} tag="h2" className="content_b h2" />
          <PrimaryButton {...props} />
        </div>
        <Media {...props} set="background" className="parallax" />
      </section>
    </>
  )
}