import Controller from '../helper/Controller';
import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

const attributes = {
  title: TextSchema,
  description: TextSchema,
  background: ImageSchema
}

const FeaturedText = (props) => {

  return (
    <>
      <section className="featured-text">
        <div className='decor-1 decor'></div>
        <div className='decor-2 decor'></div>
        <div className='decor-3 decor'></div>
        <Text set="title" {...props} tag="div" className="title" />
        <div className="content">
          <Text set="description" {...props} tag="h2" className="desc" />
          <Media {...props} set="background" className="parallax" />
        </div>
      </section>
    </>
  )
}

export default FeaturedText
export {
  attributes
};

