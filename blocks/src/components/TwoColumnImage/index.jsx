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

            <section className="two-column-banner grid">
                <div className="wrapper" style={{ 'grid-template-columns': grid_size }}>
                    <Media set="banner" className="two-column-banner__s1 v-parallax" {...props} />
                    <Media set="banner_two" className="two-column-banner__s1 v-parallax" {...props} />
                </div>
            </section>
        </>

    )
}