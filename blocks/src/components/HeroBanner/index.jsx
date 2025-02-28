import "./style.scss";
import Media from "../helper/Media";
import banner from "./imgs/about_header_01.jpg"
import Controller from "../helper/Controller";


export const attributes = {
    background: {
        type: 'image',
        default: {
            url: banner
        }
    },

    background_mobile: {
        type: 'image',
        default: {
            url: banner
        },
    }
}
const HeroBanner = (props) => {
    const { attributes } = props
    return (
        <>
            <Controller {...props}>
                <div className="gallery-list-editor input-editor">
                    <div className="item custom-input-wrapper">
                        <div className="label">Desktop</div>
                        <Media set="background" {...props} />
                    </div>
                    <div className="item custom-input-wrapper">
                        <div className="label">Mobile</div>
                        <Media set="background_mobile" {...props} />
                    </div>
                </div>
            </Controller>
            <section className="normal-hero-banner">
                <Media set="background" {...props} className="parallax-image desktop" />
                <div className="mobile parallax-image">
                    <img src={attributes.background_mobile.url} />
                </div>
            </section>
        </>
    )

}


export default HeroBanner
