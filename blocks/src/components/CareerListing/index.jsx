import "./style.scss";
import Text from "../helper/Text"
import Controller from "../helper/Controller";
import ButtonSlider from "../helper/ButtonSlider";
import LinkEditor from "../helper/LinkEditor";

export const attributes = {
    items: {
        type: 'array',
        default: [
            {
                title: 'GUEST RELATIONS OFFICER',
                location: 'Riviera Trattoria',
                classifications: 'Full Time',
                form_id: '',
                description: 'Serve as the first point of contact for guests, ensuring a warm and inviting experience. Responsibilities include handling inquiries, managing reservations, addressing feedback, and delivering personalized service that exceeds expectations.'
            }
        ]
    },
    title: {
        type: 'string',
        default: 'Be Part of Our Team'
    },
    description: {
        type: 'string',
        default: 'Our team defines who we are, and their development is our priority. Riviera Group offers opportunities for first-time employees and clear career paths for those aspiring to leadership, creating a workplace where talent grows and thrives.'
    }
}


export default function (props) {
    const { headerColor } = props.attributes;
    const content = () => props.attributes.items.map((item, index) => {
        const keyTitle = `items.${index}.title`
        const keyDesc = `items.${index}.description`
        const location = `items.${index}.location`
        const classifications = `items.${index}.classifications`
        return (
            <div className="card-item">
                <a href={item.form_id.url} className="button-apply" data-form={`${item.form_id.url}?position=${encodeURI(item.title)}`}>
                    <div class="label">Apply</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21"><g clip-path="url(#a)"><path fill="#2D2D2D" d="M17.93 20.68V4.76L2.58 20.07.61 18.1 15.92 2.76H0L2.79 0h17.89v17.89l-2.76 2.79h.01Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20.68v20.68H0z" /></clipPath></defs></svg>
                </a>
                <Text set={keyTitle} {...props} tag="h3" />
                <Text set={keyDesc} {...props} className="detail" />

                <div className="footer-item">
                    <div className="location">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18"><path fill="#5B5B5B" fill-rule="evenodd" d="M6.99 1A5.996 5.996 0 0 0 1 6.99c0 1.328.436 2.548 1.167 3.543L7 15.846l4.778-5.264A5.957 5.957 0 0 0 12.98 6.99 5.996 5.996 0 0 0 6.99 1Zm5.67 10.068a.498.498 0 0 1-.08.118l-5.21 5.74a.5.5 0 0 1-.74 0l-5.22-5.74A6.957 6.957 0 0 1 0 6.99 6.996 6.996 0 0 1 6.99 0a6.996 6.996 0 0 1 6.99 6.99c0 1.527-.495 2.93-1.32 4.078Z" clip-rule="evenodd" /><path fill="#5B5B5B" fill-rule="evenodd" d="M6.99 5.14a1.76 1.76 0 1 0 0 3.52 1.76 1.76 0 0 0 0-3.52ZM4.23 6.9a2.76 2.76 0 1 1 5.52 0 2.76 2.76 0 0 1-5.52 0Z" clip-rule="evenodd" /></svg>
                        <Text tag="div" set={location} {...props} />
                    </div>
                    <div className="location">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#5B5B5B" fill-rule="evenodd" d="M7.61 1a6.61 6.61 0 1 0 0 13.22A6.61 6.61 0 0 0 7.61 1ZM0 7.61a7.61 7.61 0 1 1 15.22 0A7.61 7.61 0 0 1 0 7.61Z" clip-rule="evenodd" /><path fill="#5B5B5B" fill-rule="evenodd" d="M7.42 2.39a.5.5 0 0 1 .5.5v4.44l2.061 1.264a.5.5 0 0 1-.522.852L6.92 7.89v-5a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd" /></svg>
                        <Text tag="div" set={classifications} {...props} />
                    </div>
                </div>
            </div>
        )
    })


    const editor = () => props.attributes.items.map((item, index) => {
        const keyTitle = `items.${index}.title`
        const form = `items.${index}.form_id`
        return <div className="custom-input-wrapper">
            <div className="label">Job</div>
            <Text set={keyTitle} {...props} tag="div" />
            <LinkEditor set={form} {...props} />
        </div>
    })

    return (
        <section className="career grid">
            <Controller {...props}>
                <div className="gallery-list-editor input-editor">
                    {editor()}
                    <div className="custom-input-wrapper">
                        <div className="label">Add more job</div>
                        <ButtonSlider slider="items" {...props} />
                    </div>
                </div>
            </Controller>
            <div className="grid-inner-wrapper header-detail">
                <Text set="title" tag="h1" {...props} className="main-title double-border-bottom" />
                <Text set="description" {...props} className="main-description" />
            </div>
            <div className="grid-inner-wrapper">
                {content()}
            </div>
        </section>
    )
}