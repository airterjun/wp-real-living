import BlockEditor from '../helper/BlockEditor';
import BlockWrapper from '../helper/BlockWrapper';
import Controller from '../helper/Controller';
import InputWrapper from '../helper/InputWrapper';
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
        <BlockWrapper {...props} className='banner-contact-alt'>
            <BlockEditor {...props} tabEditor={true}>
                <div className="tab-item active" data-name="dekstop">
                    <InputWrapper label="Banner">
                        <Media {...props} set="background" />
                    </InputWrapper>
                    <InputWrapper label="Title">
                        <Text {...props} set="title" tag="div" />
                    </InputWrapper>
                    <InputWrapper label="Description">
                        <Text {...props} set="desc" tag="div" />
                    </InputWrapper>
                    <InputWrapper label="Button">
                        <LinkEditor {...props} set="link" />
                    </InputWrapper>
                </div>
                <div className="tab-item" data-name="dekstop">
                    <InputWrapper label="Description">
                        <Text {...props} set="descMobile" tag="div" />
                    </InputWrapper>
                </div>
            </BlockEditor>
            <div className="content">
                <Text {...props} set="title" tag="div" className="title" />
                <Text {...props} set="desc" tag="div" className="description desktop" />
                <Text {...props} set="descMobile" tag="div" className="description mobile" />
                <PrimaryButton {...props} />
            </div>
            <Media {...props} set="background" className="parallax no-scale" />
        </BlockWrapper>
    )
}


export {
    attributes
};
