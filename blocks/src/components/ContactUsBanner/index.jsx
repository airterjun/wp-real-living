import "./style.scss";
import Text from "../helper/Text"

export const attributes = {
    title: {
        type: 'string',
        default: 'Email us directly at: '
    },

    contact_form: {
        type: 'string',
        default: ''
    },

    main_title: {
        type: 'string',
        default: 'Let’s Start Planning Your Event'
    }
}

export default function (props) {
    const { headerColor } = props.attributes;
    return (
        <section className="grid contact-us-form">
            <div className="contact-us-banner__s1">
                <Text set="title" tag="div" {...props} className="title" />
                <Text set="main_title" tag="div" {...props} className="h2 main-title double-border-bottom" />
            </div>
            <Text set="contact_form" tag="div" {...props} className="form" />
        </section>
    )
}