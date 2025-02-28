import "./style.scss";
import ButtonSlider from "../helper/ButtonSlider"
import Media from "../helper/Media"
import Text from "../helper/Text"
import Controller from "../helper/Controller";
import banner from "./imgs/riv_bis_dt_01.jpg"
import { ColorPicker } from '@wordpress/components';
import _ from "lodash"
const attributes = {
    list: {
        type: 'array',
        default: [
            {
                title: 'Bistro',
                location: 'Berawa',
                description: `Riviera Bistro is a beacon of sophistication and vibrancy in the bustling neighborhood of Berawa. Renowned for its seamless fusion of contemporary design and Mediterranean cuisine, it’s the perfect destination for those who appreciate a lively yet refined dining. `,
                thumb: {
                    url: banner
                },
                button: "Learn More",
                color: '#000',
                description_mobile: ''
            },

            {
                title: 'Bistro',
                location: 'Berawa',
                description: `Riviera Bistro is a beacon of sophistication and vibrancy in the bustling neighborhood of Berawa. Renowned for its seamless fusion of contemporary design and Mediterranean cuisine, it’s the perfect destination for those who appreciate a lively yet refined dining. `,
                thumb: {
                    url: banner
                },
                button: "Learn More",
                color: '#000',
                description_mobile: ''
            }
        ]
    }
}

export default function (props) {
    const { headerColor } = props.attributes;
    const { list } = props.attributes
    const grid = () => list.map((item, index) => {
        const keyTitle = `list.${index}.title`
        const keyLocation = `list.${index}.location`
        const keyDesc = `list.${index}.description`
        const thumb = `list.${index}.thumb`
        const link = `list.${index}.button`
        return (

            <div className="card-wrapper swiper-slide">
                <div className="inner-wrapper">
                    <div className="header">
                        <div style={{ color: item.color }}>
                            <Text tag="h2" set={keyTitle} {...props} />
                        </div>
                        <Text set={keyLocation} {...props} />
                    </div>
                    <Media set={thumb} {...props} className="v-parallax" />
                    <div className="card__content">
                        <Text set={keyDesc} {...props} className="desktop" />
                        <p className="mobile">{item.description_mobile}</p>
                        <div className="button">
                            <Text tag="a" set={link} {...props} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })


    const cardColorPicker = () => list.map((item, index) => {
        const model = `${index}.color`
        const mobileCopy = `list.${index}.description_mobile`
        const desktopCopy = `list.${index}.description`
        const thumb = `list.${index}.thumb`

        const listClone = structuredClone(list)

        const setColorText = (color) => {
            _.set(listClone, model, color)

            props.setAttributes({
                ...list,
                list: listClone
            });
        }

        return <div className="listing">
            <div className="label main-label">{item.title}</div>
            <div className="custom-input-wrapper">
                <div className="label">Mobile Copy</div>
                <div className="input-wrapper">
                    <Text set={mobileCopy} {...props} tag="div" />
                </div>
            </div>
            <div className="custom-input-wrapper">
                <div className="label">Dekstop Copy</div>
                <div className="input-wrapper">
                    <Text set={desktopCopy} {...props} tag="div" />
                </div>
            </div>
            <div className="custom-input-wrapper">
                <div className="input-wrapper">
                    <div className="label">Picture</div>
                    <Media set={thumb} {...props} />
                </div>
            </div>
            <div className="custom-input-wrapper">
                <div className="input-wrapper">
                    <div className="label">Theme color</div>
                    <ColorPicker color={item.color}
                        onChangeComplete={(color) => setColorText(color.hex)}
                        disableAlpha />
                </div>
            </div>
        </div>

    })


    return (
        <>
            <Controller {...props}>
                <div className="inner card-list-editor-color input-editor">
                    {cardColorPicker()}
                    <div className="custom-input-wrapper">
                        <div className="input-wrapper">
                            <div className="label">Column</div>
                            <ButtonSlider slider="list" {...props} />
                        </div>
                    </div>
                </div>
            </Controller>

            <section className="grid grid-col-card slider" data-header-color={headerColor}>
                <div className="navigation">
                    <div className="prev prev-next-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 36"><path fill="#2D2D2D" fill-rule="evenodd" d="M16.17 17.57 0 1.4 1.4 0l17.57 17.57L1.4 35.14 0 33.74l16.17-16.17Z" clip-rule="evenodd" /></svg></div>
                    <div className="next prev-next-button"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 36"><path fill="#2D2D2D" fill-rule="evenodd" d="M16.17 17.57 0 1.4 1.4 0l17.57 17.57L1.4 35.14 0 33.74l16.17-16.17Z" clip-rule="evenodd" /></svg></div>
                </div>
                <div className="inner swiper">
                    <div className="group swiper-wrapper">
                        {grid()}
                    </div>
                </div>
            </section>
        </>

    )
}


export {
    attributes
}