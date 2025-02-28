import "./style.scss";

import image_one from "./imgs/foreground_01.png"
import image_two from "./imgs/mtn_01.png"
import image_three from "./imgs/mtn_02.png"


import mobile_one from "./imgs/win_2_01.png"
import mobile_two from "./imgs/fg_01.png"
import mobile_three from "./imgs/table_01.png"
import mobile_four from "./imgs/bg_01.jpg"
export const attributes = {}
export default function () {
    return (
        <>
            <section className="homepage-hero-banner desktop">
                <div className="parallax-3d">
                    <img src={image_one} />
                </div>
                <div className="parallax-3d">
                    <img src={image_two} />
                </div>
                <div className="parallax-3d">
                    <img src={image_three} />
                </div>
            </section>

            <section className="homepage-hero-banner mobile mobile-parallax">
                <div className="parallax-3d">
                    <img src={mobile_one} />
                </div>
                <div className="parallax-3d">
                    <img src={mobile_two} />
                </div>
                <div className="parallax-3d">
                    <img src={mobile_three} />
                </div>
                <div className="parallax-3d">
                    <img src={mobile_four} />
                </div>
            </section>
        </>
    )
}