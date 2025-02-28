import "./style.scss";
import Text from "../helper/Text";
import Controller from '../helper/Controller';
import ButtonSlider from '../helper/ButtonSlider';

const attributes = {
  title: {
    type: 'string',
    default: `We Create Environments That Enhances Nature's Harmony.`,
  },

  subTitle: {
    type: 'string',
    default: 'Secluded Sanctuaries Designed for Deep Connection'
  },

  subTitle_mobile: {
    type: 'string',
    default: 'NO MATTER THE OCCASION, RIVIERA GROUP HAS A SPACE TO SUIT YOUR NEEDS. FROM INTIMATE DINNERS TO LARGE-SCALE CELEBRATIONS, OUR VENUES PROVIDE THE PERFECT BACKDROP FOR EVERY KIND OF EVENT.'
  },

  list: {
    type: 'array',
    default: [
      {
        title: 'Private Dinners',
        description: 'Host an intimate evening with curated menus and impeccable service.'
      }
    ]
  }
}

const ContactForm = (props) => {
  const { attributes } = props

  const column = () => attributes.list.map((item, index) => {
    const title = `list.${index}.title`
    const description = `list.${index}.description`
    return <div className='card-item double-border-bottom'>
      <Text tag="h3" set={title} {...props} className="title"></Text>
      <Text tag="div" set={description} {...props} className="description"></Text>
    </div>

  })

  return (
    <>
      <Controller {...props}>
        <div className="inner card-list-editor-color input-editor">
          <div className="custom-input-wrapper">
            <div className="label">
              Contents column
            </div>
            <ButtonSlider slider="list" {...props} />
          </div>

          <div className="custom-input-wrapper">
            <div className="label">Dekstop Copy</div>
            <Text set="subTitle" {...props} tag="div" className="sub-title" />
          </div>
          <div className="custom-input-wrapper">
            <div className="label">Mobile Copy</div>
            <Text set="subTitle_mobile" {...props} tag="div" className="sub-title" />
          </div>
        </div>
      </Controller>
      <section className="featured-text grid">
        <div className='grid-inner-wrapper'>
          <div className='main-title'>
            <Text set="title" {...props} tag="h2" className="title" />
            <div class="logo">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 62">
                <g clip-path="url(#ab)">
                  <path fill="#919191" d="M9.44 4.33h.16a9.393 9.393 0 0 1 6.95 3.31c2.11 2.37 3.23 5.45 3.14 8.62 0 .82-.08 1.86-.16 3.23a10.19 10.19 0 0 1-1.78 4.36l-.08.08c-.92 1.83-2.18 3.48-3.71 4.84a6.188 6.188 0 0 1-3.55 1.13h-.98V4.33h.01Zm0 30.18h2.18c2.09 0 2.95.48 3.22.73.28.25 1.13 1.29 2.26 4.52l.65 2.17c.41 1.28.71 2.6.88 3.93.17.98.25 1.86.4 2.66-.05 2.32.06 4.63.32 6.94v.08c.4 1.73.91 3.43 1.53 5.09l.49 1.21h12.26L32.1 59.1c-.78-1.42-1.44-2.91-1.96-4.44-.58-1.94-1.03-3.9-1.38-5.89-.38-2.21-.92-4.39-1.61-6.53v-.08c-.82-2.05-1.89-4-3.19-5.79a18.81 18.81 0 0 0-4.12-4.28l.24-.16a29.12 29.12 0 0 0 7.26-7.26c1.59-2.31 2.43-5.05 2.43-7.86 0-5.32-1.13-9.2-3.47-11.46-1.75-1.9-3.9-3.38-6.3-4.34h-.08a21.7 21.7 0 0 0-7.25-1H0V61.8h9.52V34.51h-.08Z"></path>
                </g>
                <defs>
                  <clipPath id="ab">
                    <path fill="#fff" d="M0 0h33.64v61.83H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <Text set="subTitle" {...props} tag="div" className="sub-title desktop" />
          <div className="sub-title mobile">
            {props.attributes.subTitle_mobile}
          </div>

          <div className='cards'>
            {column()}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
export {
  attributes
}
