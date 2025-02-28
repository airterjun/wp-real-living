import "./style.scss";
import Media from "../helper/Media"
import banner from "./imgs/dish_dt_01.jpg"
import banner_two from "./imgs/dish_dt_01.jpg"
import Controller from "../helper/Controller"
import { TextControl } from '@wordpress/components';
export const attributes = {
    banner: {
        type: 'image',
        default: {
            url: banner
        }
    },

    banner_two: {
        type: 'image',
        default: {
            url: banner_two
        }
    },

    banner_three: {
        type: 'image',
        default: {
            url: banner_two
        }
    },
    grid_size: {
        type: 'string',
        default: '1fr 1fr'
    }
}

export default function (props) {
    const { grid_size } = props.attributes
    return (
        <>
            <Controller {...props}>
                <fieldset>
                    <TextControl label="grid-size" value={grid_size} onChange={val => {
                        props.setAttributes({
                            'grid_size': val
                        })
                    }} />
                </fieldset>
            </Controller>

            <section className="three-column-banner">
                <div className="grid">
                    <div className="wrapper">
                        <div className="thumb">
                            <Media set="banner" className="three-column-banner__s1 v-parallax" {...props} />
                        </div>
                        <div className="thumb">
                            <Media set="banner_two" className="three-column-banner__s1 v-parallax" {...props} />
                        </div>
                        <div className="thumb">
                            <Media set="banner_three" className="three-column-banner__s1 v-parallax" {...props} />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}