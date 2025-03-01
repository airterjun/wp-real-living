import Media from "../helper/Media";
import Text from "../helper/Text";
import { ImageSchema } from "../Schema/image";
import { TextSchema } from "../Schema/text";
import "./style.scss";

export const attributes = {
    title: TextSchema,
    background: ImageSchema
}

export default function (props) {
    return (
        <section className="sign-up-newsletter">
            <div className="container">
                <div className="inner">
                    <Text set="title" tag="div" {...props} className="title" />
                    <form action="https://peavey.us3.list-manage.com/subscribe/post?u=238c529f36e5ec89ef49dd7e9&amp;id=0125340b64&amp;f_id=00f4afe2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" novalidate="">
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value="" placeholder="Your Email" />
                            </div>
                            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                <input type="text" name="b_238c529f36e5ec89ef49dd7e9_0125340b64" tabindex="-1" value="" />
                            </div>
                            <div className="optionalParent">
                                <div className="clear foot primary-button button-fill">
                                    <button>
                                        Submit
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18"><path fill="#93EA4E" d="M0 1.59v13.9c0 1.25 1.39 2.01 2.44 1.33l10.82-6.95c.97-.62.97-2.04 0-2.67L2.44.25C1.39-.42 0 .33 0 1.59Z" /></svg>
                                    </button>
                                    {/* <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" /> */}

                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <Media {...props} set="background" className="parallax" />
        </section>
    )
}