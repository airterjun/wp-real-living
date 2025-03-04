import Media from '../helper/Media';
import Text from '../helper/Text';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { ImageSchema } from '../Schema/image';
import { LinkSchmea } from '../Schema/linkSchema';
import { TextSchema } from '../Schema/text';
import "./style.scss";
const attributes = {
    background: ImageSchema,
    title: TextSchema,
    desc: TextSchema,
    link: LinkSchmea
}

export default function (props) {
    return (
        <section className='banner-contact-alt'>
            <div className="content">
                <Text {...props} set="title" tag="div" className="title" />
                <Text {...props} set="desc" tag="div" className="description" />
                <PrimaryButton {...props} />
            </div>
            <Media {...props} set="background" className="parallax no-scale" />
        </section>
    )
}


export {
    attributes
};
