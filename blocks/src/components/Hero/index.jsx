import React from "react"
import Text from "../helper/Text";
import banner_1 from "./assets/mtn_01.png"
import banner_2 from "./assets/mtn_02.png"
import PrimaryButton from "./../Shared/PrimaryButton"

export const attributes = {
    title: {
        type: "string",
        default: "Curators of Exceptional <br/>Hospitality Experiences"
    },
    secondText: {
        type: "string",
        default: 'Each of our properties is carefully chosen to provide not just a place to stay, but a gateway to experiences that rejuvenate the soul and inspire the mind.'
    },
    buttonLabel: {
        type: "string",
        default: "<a href='#'>Learn More</a>"
    }
}

const Hero = (props) => {
    const { headerColor } = props.attributes;
    return (
        <section className="hero grid" data-header-color={headerColor}>

            <Text className="hero__s1" set="title" {...props} tag="h1" />
            <Text className="hero__s2" set="secondText" {...props} />
            <PrimaryButton {...props} set="buttonLabel" class="hero__s3" />
            <div className="hero__s4 group __end">
                <div class="">
                    <div>Bali Local Time</div>
                    <div className="local-time">
                        <span className="hour">18</span>:<span className="minute">37</span>:<span className="second">45</span>
                    </div>
                </div>
            </div>
            <div className="hero__banner">
                <figure>
                    <img src={banner_1} width="1920" height="487" />
                </figure>
                <figure>
                    <img src={banner_2} width="1920" height="559" />
                </figure>
                <div className="hero__banner__circle"></div>
            </div>
        </section>
    )
}


export default Hero
