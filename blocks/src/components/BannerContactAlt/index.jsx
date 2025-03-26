import Controller from '../helper/Controller';
import LinkEditor from '../helper/LinkEditor';
import Media from '../helper/Media';
import Text from '../helper/Text';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { ImageSchema } from '../Schema/image';
import { LinkSchmea } from '../Schema/linkSchema';
import { TextSchema, TextSchemaEmpty } from '../Schema/text';
import "./style.scss";
const attributes = {
    background: ImageSchema,
    title: TextSchema,
    desc: TextSchema,
    descMobile: TextSchemaEmpty,
    link: LinkSchmea
}

export default function (props) {
    return (
        <section className='banner-contact-alt'>
            <Controller {...props}>
                <div className="form-wrapper">
                    <details>
                        <summary className='main-title'>
                            {props.section ? `Section ${props.section}` : 'Banner Contact'}
                        </summary>
                        <div className="input-container">
                            <div className="label">Mobile Desc</div>
                            <Text {...props} set="descMobile" tag="div" className="input" />
                        </div>
                        <div className="input-container">
                            <div className="label">Button</div>
                            <LinkEditor {...props} set="link" />
                        </div>
                    </details>
                </div>
            </Controller>
            <div className="content">
                <Text {...props} set="title" tag="div" className="title" />
                <Text {...props} set="desc" tag="div" className="description desktop" />
                <Text {...props} set="descMobile" tag="div" className="description mobile" />
                <PrimaryButton {...props} />
            </div>
            <Media {...props} set="background" className="parallax no-scale" />
        </section>
    )
}


export {
    attributes
};
