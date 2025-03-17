import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import IconArrow from "../Shared/IconArrow";
import "./style.scss";

const attributes = {
  title: TextSchema,
  description: TextSchema,
  background: ImageSchema
}

export default function (props) {

  return (

    <section className="featured-text-2">
      <div className='decor-1 decor'></div>
      <div className='decor-2 decor'></div>
      <div className='decor-3 decor'></div>
      <div className="title"></div>
      <div className="content">
        <div className="desc">
          <IconArrow />
          <Text set="title" {...props} tag="div" className="title" />
        </div>
        <Media {...props} set="background" className="parallax" />
      </div>
    </section>
  )
}

export {
  attributes
};

