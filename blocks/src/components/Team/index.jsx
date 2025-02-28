import "./style.scss";
import Text from "../helper/Text";
import Media from "../helper/Media";
import banner from "./imgs/emi_01b.jpg"
import Controller from "../helper/Controller";
import _ from "lodash"
import ButtonSlider from "../helper/ButtonSlider";

export const attributes = {
    card: {
        type: 'array',
        default: [
            {
                thumbnail: {
                    url: banner
                },
                name: 'Team name',
                position: 'Creator and Manager',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
            }
        ]
    },

    description: {
        type: 'string',
        default: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`
    }
}



export default function (props) {

    const { card, headerColor } = props.attributes

    const cards = () => card.map((item, i) => {
        const title = `card.${i}.name`
        const thumb = `card.${i}.thumbnail`
        const pos = `card.${i}.position`
        const desc = `card.${i}.description`

        return (
            <div className="team">
                <div className="left">
                    <Media set={thumb} {...props} />
                    <div className="team__s2__card__ab1">
                        <Text tag="div" className="team-name h2" set={title} {...props} />
                        <Text set={pos} {...props} className="position double-border-bottom" tag="div" />
                    </div>
                </div>

                <Text tag="div" set={desc} {...props} className="right" />
            </div>
        )
    })




    return (
        <>
            <Controller {...props}>
                <div className="gallery-list-editor">
                    <ButtonSlider slider="card" {...props} />
                </div>
            </Controller>
            <section className="grid teams">
                <div className="grid-inner-wrapper">
                    <Text tag="h2" set="description" {...props} />
                    <div className="team-wrapper">
                        {cards()}
                    </div>
                </div>
            </section>
        </>
    )
}