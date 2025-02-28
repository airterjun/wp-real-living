import './assets/styles/main.scss';

import Controller from "./components/helper/Controller"
import { TextControl } from '@wordpress/components';
import { sanitizeInput } from './components/helper/Libs';

const { registerBlockType } = wp.blocks
const Blocks = [
  {
    id: "nolsis/home-page-banner",
    path: "HomePageBanner",
    title: 'Home page banner'
  },

  {
    id: "nolsis/latest-news",
    path: "NewsListing",
    title: 'Resto',
    dynamic: true
  },
  {
    id: "nolsis/latest-running-text",
    path: "RunningTextBanner",
    title: 'Marque Banner'
  },


  {
    id: "nolsis/venue-detail",
    path: "VenueDetail",
    title: 'Venue description'
  },

  {
    id: "nolsis/featured-text",
    path: "FeaturedText",
    title: 'Featured Text'
  },

  {
    id: "nolsis/featured-marque-logo",
    path: "RunningLogo",
    title: 'Marque Logo'
  },

  {
    id: "nolsis/text-two-column",
    path: "TwoColumnText",
    title: 'Two Column Text'
  },

  {
    id: "nolsis/text-two-column-logo",
    path: "TwoColumnTextWithLogo",
    title: 'Two Column Text With Logo'
  },

  {
    id: "nolsis/property-gallery",
    path: "GallerySection",
    title: 'Properties Gallery'
  },


  {
    id: "nolsis/grid-card",
    path: "GridColumnCard",
    title: 'Grid Card'
  },

  {
    id: "nolsis/text-two-column-banner",
    path: "TwoColumnImage",
    title: 'Two Column Images'
  },

  {
    id: "nolsis/career",
    path: "CareerListing",
    title: 'Career'
  },

  {
    id: "nolsis/contact-banner",
    path: "ContactUsBanner",
    title: 'Contact Us Banner'
  },

  {
    id: "nolsis/follow-us-banner",
    path: "FollowUsBanner",
    title: 'Follow Us Banner'
  },

  {
    id: "nolsis/three-column-image",
    path: "ThreeColumnImage",
    title: 'Three column image'
  },


  {
    id: "nolsis/tema",
    path: "Team",
    title: 'Team'
  },

  {
    id: "nolsis/eatured-title",
    path: "FeaturedTitle",
    title: 'FeaturedTitle'
  },

  {
    id: "nolsis/normal-hero-banner",
    path: "HeroBanner",
    title: 'Hero Banner'
  },

  {
    id: "nolsis/text-title",
    path: "TwoColumnTextWithTitle",
    title: 'Column text with title'
  },

  {
    id: "nolsis/text-title-id",
    path: "TwoColumnTextWithTitleId",
    title: 'Featured column text'
  }

]


for (let i = 0; i < Blocks.length; i++) {
  const block = Blocks[i]
  const template = require(`./components/${block.path}`)

  registerBlockType(block.id, {
    apiVersion: 3,
    title: block.title,
    icon: 'universal-access-alt',
    category: 'design',
    edit: props => {
      props = { ...props }
      props.edit = true
      props.id = block.id


      const { attributes, setAttributes } = props
      const { customSectionClassName, customSectionId } = attributes;


      return (<>
        <Controller {...props}>
          <div className='input-editor'>
            <div className="custom-input-wrapper">
              <TextControl label="Section Class" value={customSectionClassName} onChange={val => {
                props.setAttributes({
                  'customSectionClassName': sanitizeInput(val)
                })
              }} />
            </div>
            <div className="custom-input-wrapper">
              <TextControl label="Section Id" value={customSectionId} onChange={val => {
                props.setAttributes({
                  'customSectionId': sanitizeInput(val)
                })
              }} />
            </div>
          </div>
        </Controller >
        {template.default(props)}
      </>)
    },
    save: (props) => {
      if (block.dynamic) return null
      const templateRender = () => template.default(props)
      return <div className={props.attributes.customSectionClassName} id={props.attributes.customSectionId}>{templateRender()}</div>
    },
    attributes: Object.assign(template.attributes, {
      customSectionClassName: {
        type: 'string',
        default: ''
      },
      customSectionId: {
        type: 'string',
        default: ''
      }
    })
  })
}
