import React from 'react'
import './style.scss'

import Text from "../helper/Text";
import banner from "./imgs/sample.jpg"
import Media from '../helper/Media';
import Controller from '../helper/Controller';
import { ColorPicker } from '@wordpress/components';
import LinkEditor from '../helper/LinkEditor';


const attributes = {
    hero: {
        type: 'image',
        default: {
            url: banner,
        }
    },
    initial: {
        type: 'string',
        default: 'B'
    },
    title: {
        type: 'string',
        default: 'Venue name'
    },

    desc_title: {
        type: 'string',
        default: 'Lorem ipsum dolor sit amet'
    },

    description: {
        type: 'string',
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    banner_one_top: {
        type: 'image',
        default: {
            url: banner
        }
    },

    banner_two_top: {
        type: 'image',
        default: {
            url: banner
        }
    },

    second_title: {
        type: 'string',
        default: 'Venue name'
    },


    second_description: {
        type: 'string',
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    button_menu: {
        type: 'string',
        default: '<a href="#">View our menu</a>'
    },

    banner_one_bottom: {
        type: 'image',
        default: {
            url: banner
        }
    },

    banner_two_bottom: {
        type: 'image',
        default: {
            url: banner
        }
    },


    banner_reserve_bg: {
        type: 'image',
        default: {
            url: banner
        }
    },

    reserve_title: {
        type: 'string',
        default: 'Venue name'
    },

    reserve_id: {
        type: 'string',
        default: ''
    },


    map_title: {
        type: 'string',
        default: 'Venue name'
    },


    map_description: {
        type: 'string',
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    map_image: {
        type: 'image',
        default: {
            url: banner
        }
    },

    map_location: {
        type: 'string',
        default: ''
    },

    ig_feed: {
        type: 'string',
        default: ''
    },

    ig_follow_url: {
        type: 'string',
        default: ''
    },
    button_reserve: {
        type: 'object',
        default: {
            url: '#',
            label: 'Read More'
        }
    },

    button_reserve_food: {
        type: 'object',
        default: {
            url: '#',
            label: 'Read More'
        }
    },

    button_reserve_3: {
        type: 'object',
        default: {
            url: '#',
            label: 'Read More'
        }
    },

    theme_color: {
        type: 'string',
        default: '#000'
    },
    booking_id: {
        type: 'string',
        default: ''
    },

    wa_booking: {
        type: 'string',
        default: '#'
    }
}

const BookingBanner = (props) => {
    const { attributes, setAttributes } = props;

    const changeThemeColor = (color) => {
        setAttributes({
            theme_color: color
        })
    }
    return (

        <section className="vunue-detail">
            <Controller {...props}>
                <div className='input-editor'>
                    <div className='custom-input-wrapper'>
                        <div className='label'>Theme color</div>
                        <ColorPicker color={attributes.theme_color}
                            onChangeComplete={(color) => changeThemeColor(color.hex)}
                            disableAlpha />
                    </div>
                    <div className='custom-input-wrapper'>
                        <div className='label'>Arrow icon color</div>
                        <ColorPicker color={attributes.theme_color}
                            onChangeComplete={(color) => changeThemeColor(color.hex)}
                            disableAlpha />
                    </div>
                    <div className='custom-input-wrapper'>
                        <div className='label'>Map location</div>
                        <Text set="map_location" {...props} />
                    </div>
                    <div className='custom-input-wrapper'>
                        <div className='label'>Map icon</div>
                        <Media set="map_image" {...props} />
                    </div>
                    <div className='custom-input-wrapper'>
                        <div className='label'>Booking ID</div>
                        <Text set="booking_id" {...props} />
                    </div>
                    <div className='custom-input-wrapper'>
                        <div className='label'>WA booking</div>
                        <Text set="wa_booking" {...props} />
                    </div>

                    <div className='custom-input-wrapper'>
                        <div className='label'>IG</div>
                        <Text set="ig_follow_url" {...props} />
                    </div>


                    <div className='custom-input-wrapper'>
                        <div className='label'>Button Food</div>
                        <Text set="button_reserve_food.label" {...props} disabledFormat={true} />
                        <LinkEditor set="button_reserve_food.url" {...props} />
                    </div>

                    <div className='custom-input-wrapper'>
                        <div className='label'>Button Drink</div>
                        <Text set="button_reserve.label" {...props} disabledFormat={true} />
                        <LinkEditor set="button_reserve.url" {...props} />
                    </div>

                    <div className='custom-input-wrapper'>
                        <div className='label'>Wine</div>
                        <Text set="button_reserve_3.label" {...props} disabledFormat={true} />
                        <LinkEditor set="button_reserve_3.url" {...props} />
                    </div>
                </div>
            </Controller>
            <Media set="hero" {...props} className="banner v-parallax" />
            <div className='grid top-detail'>
                <div className='logo' style={{ color: attributes.theme_color }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 326 75">
                        <g fill="#474849" clip-path="url(#a82isad)">
                            <path
                                d="M10.95 7.47h.18c1.54.03 3.05.39 4.44 1.05a10.7 10.7 0 0 1 3.61 2.79 14.45 14.45 0 0 1 3.65 10.01c0 .95-.09 2.15-.18 3.75-.28 1.82-.99 3.56-2.06 5.06l-.09.09a18.912 18.912 0 0 1-4.31 5.62c-1.2.85-2.64 1.31-4.11 1.31h-1.14V7.47h.01Zm0 35.01h2.53c2.43 0 3.42.56 3.74.84.32.29 1.31 1.49 2.62 5.24l.75 2.52c.48 1.49.82 3.01 1.03 4.56.19 1.14.28 2.15.47 3.09-.05 2.69.07 5.37.38 8.05v.09c.47 2 1.06 3.98 1.78 5.9l.57 1.4h14.22l-1.78-3.18c-.91-1.65-1.67-3.37-2.28-5.15-.67-2.25-1.2-4.53-1.6-6.84-.45-2.57-1.07-5.1-1.87-7.58v-.09c-.95-2.38-2.19-4.64-3.7-6.71-1.32-1.9-2.93-3.57-4.77-4.97l.27-.18c3.28-2.29 6.13-5.14 8.42-8.42 1.84-2.68 2.82-5.86 2.81-9.12 0-6.18-1.31-10.68-4.02-13.3-2.03-2.2-4.52-3.92-7.3-5.04h-.09c-2.72-.84-5.57-1.23-8.42-1.14H0v71.56h11.04V42.47h-.09v.01ZM134.81 2.14h-10.99l-.48 1.49c-1.03 3.56-2.34 7.86-3.74 12.64-1.4 4.77-3.76 12.4-6.89 22.46-2.15 6.75-3.93 12.46-5.33 16.85L86.87 2.14H75.18l29.63 71.88 30-71.88ZM62.35 2.14H51.31v71.79h11.04V2.14ZM159.35 2.14h-11.04v71.79h11.04V2.14ZM207.41 63.36l-2.72.74c-2.28.66-4.02 1.04-5.24 1.31l-.65.09c-1.22.28-2.71.57-4.49.84l-4.97.84-2.43.34V39.48c1.58 0 3 0 4.2.09 1.44.06 2.88.22 4.31.47l5.53 1.04V30.82l-2.71.75c-2 .55-4.03.95-6.09 1.22-1.74.18-3.49.28-5.24.27V8l2.62.28c4.62.66 9.12 1.95 13.38 3.84l3 1.31V2.04h-30.04v71.79h31.54V63.36ZM232.59 7.11c1.57-.02 3.13.31 4.56.97 1.43.67 2.68 1.64 3.68 2.87 2.46 2.74 3.76 6.33 3.65 10.01 0 .95-.09 2.15-.18 3.75-.28 1.82-.99 3.56-2.06 5.06l-.09.09a18.624 18.624 0 0 1-4.31 5.62c-1.2.85-2.64 1.31-4.11 1.31h-1.14V7.11Zm-11.04 66.55h11.04V42.12h2.53c2.44 0 3.42.56 3.75.84.33.28 1.31 1.49 2.62 5.24l.74 2.52c.48 1.49.83 3.01 1.04 4.56.18 1.14.27 2.15.47 3.09-.07 2.66.05 5.33.36 7.98v.18c.47 2 1.07 3.98 1.79 5.9l.56 1.4h14.22l-1.78-3.18c-.93-1.64-1.71-3.37-2.34-5.15-.67-2.25-1.2-4.53-1.6-6.84-.45-2.57-1.07-5.1-1.87-7.58v-.09c-.94-2.34-2.13-4.56-3.56-6.64-1.32-1.9-2.93-3.57-4.77-4.97l.28-.18c3.28-2.29 6.13-5.14 8.42-8.42a16.11 16.11 0 0 0 2.8-9.12c0-6.18-1.31-10.68-4.02-13.3a20.769 20.769 0 0 0-7.3-5.13h-.09c-2.72-.84-5.57-1.23-8.42-1.14h-14.7v71.56h-.18l.01.01ZM283.67 72.25c.38-2.15.75-4.02 1.04-5.62.28-1.6 1.14-4.68 2.28-9.17.84-3.42 5.8-16.1 8.61-23.12l1.31-3.56 1.3-3.42 4.31 12.83 11.61 33.88h11.85L300.62 0l-10.53 5.32.84 1.87c.84 1.87 1.69 3.84 2.62 5.9.64 1.56 1.21 3.15 1.69 4.77l-24.3 56.16h12.46l.27-1.78v.01Z" />
                        </g>
                        <defs>
                            <clipPath id="a82isad">
                                <path fill="#fff" d="M0 0h325.98v74.17H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Text tag="h1" set="title" {...props} className='venue-title' />
                </div>
                <div className='detail'>
                    <Text tag="div" set="desc_title" {...props} className="h1 double-border-bottom" />
                    <Text tag="div" set="description" {...props} className="main-description" />
                </div>
            </div>

            <div className='grid main-gallery'>
                <Media set="banner_one_top" {...props} className="v-parallax" />
                <Media set="banner_two_top" {...props} className="v-parallax" />
            </div>

            <div className='grid border-devider' style={{ color: attributes.theme_color }}>
                <div className='grid-inner-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 62">
                        <g clip-path="url(#ab)">
                            <path fill="#919191"
                                d="M9.44 4.33h.16a9.393 9.393 0 0 1 6.95 3.31c2.11 2.37 3.23 5.45 3.14 8.62 0 .82-.08 1.86-.16 3.23a10.19 10.19 0 0 1-1.78 4.36l-.08.08c-.92 1.83-2.18 3.48-3.71 4.84a6.188 6.188 0 0 1-3.55 1.13h-.98V4.33h.01Zm0 30.18h2.18c2.09 0 2.95.48 3.22.73.28.25 1.13 1.29 2.26 4.52l.65 2.17c.41 1.28.71 2.6.88 3.93.17.98.25 1.86.4 2.66-.05 2.32.06 4.63.32 6.94v.08c.4 1.73.91 3.43 1.53 5.09l.49 1.21h12.26L32.1 59.1c-.78-1.42-1.44-2.91-1.96-4.44-.58-1.94-1.03-3.9-1.38-5.89-.38-2.21-.92-4.39-1.61-6.53v-.08c-.82-2.05-1.89-4-3.19-5.79a18.81 18.81 0 0 0-4.12-4.28l.24-.16a29.12 29.12 0 0 0 7.26-7.26c1.59-2.31 2.43-5.05 2.43-7.86 0-5.32-1.13-9.2-3.47-11.46-1.75-1.9-3.9-3.38-6.3-4.34h-.08a21.7 21.7 0 0 0-7.25-1H0V61.8h9.52V34.51h-.08Z" />
                        </g>
                        <defs>
                            <clipPath id="ab">
                                <path fill="#fff" d="M0 0h33.64v61.83H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Text tag="div" set="initial" {...props} className="initial" />
                </div>
            </div>

            <div className='grid sec-description'>
                <div className='second-title '>
                    <Text tag="div" set="second_title" {...props} className="h2 double-border-bottom" />
                </div>
                <div className='second-desc'>
                    <Text tag="div" set="second_description" {...props} />
                    <div className='buttons-wrapper'>
                        <div className='button primary-button'>
                            <div className='button-wrapper'>
                                <a href={attributes.button_reserve_food.url.url} target='_blank'>
                                    {attributes.button_reserve_food.label}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 22"><path fill="#2D2D2D" fill-rule="evenodd" d="M9.822 10.67-.004.844l.849-.848L11.519 10.67.845 21.344l-.849-.848 9.826-9.826Z" clip-rule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className='button primary-button'>
                            <div className='button-wrapper'>

                                <a href={attributes.button_reserve.url.url} target='_blank'>
                                    {attributes.button_reserve.label}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 22"><path fill="#2D2D2D" fill-rule="evenodd" d="M9.822 10.67-.004.844l.849-.848L11.519 10.67.845 21.344l-.849-.848 9.826-9.826Z" clip-rule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className='button primary-button'>
                            <div className='button-wrapper'>
                                <a href={attributes.button_reserve_3.url.url} target='_blank'>
                                    {attributes.button_reserve_3.label}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 22"><path fill="#2D2D2D" fill-rule="evenodd" d="M9.822 10.67-.004.844l.849-.848L11.519 10.67.845 21.344l-.849-.848 9.826-9.826Z" clip-rule="evenodd" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className='grid sec-gallery'>
                <Media set="banner_one_bottom" {...props} className="v-parallax" />
                <Media set="banner_two_bottom" {...props} className="v-parallax" />
            </div>

            <div className='booking-banner' style={{ color: attributes.theme_color }}>
                <Media set="banner_reserve_bg" {...props} className="v-parallax" />
                <div className='content'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 62">
                        <g clip-path="url(#ab)">
                            <path fill="#919191"
                                d="M9.44 4.33h.16a9.393 9.393 0 0 1 6.95 3.31c2.11 2.37 3.23 5.45 3.14 8.62 0 .82-.08 1.86-.16 3.23a10.19 10.19 0 0 1-1.78 4.36l-.08.08c-.92 1.83-2.18 3.48-3.71 4.84a6.188 6.188 0 0 1-3.55 1.13h-.98V4.33h.01Zm0 30.18h2.18c2.09 0 2.95.48 3.22.73.28.25 1.13 1.29 2.26 4.52l.65 2.17c.41 1.28.71 2.6.88 3.93.17.98.25 1.86.4 2.66-.05 2.32.06 4.63.32 6.94v.08c.4 1.73.91 3.43 1.53 5.09l.49 1.21h12.26L32.1 59.1c-.78-1.42-1.44-2.91-1.96-4.44-.58-1.94-1.03-3.9-1.38-5.89-.38-2.21-.92-4.39-1.61-6.53v-.08c-.82-2.05-1.89-4-3.19-5.79a18.81 18.81 0 0 0-4.12-4.28l.24-.16a29.12 29.12 0 0 0 7.26-7.26c1.59-2.31 2.43-5.05 2.43-7.86 0-5.32-1.13-9.2-3.47-11.46-1.75-1.9-3.9-3.38-6.3-4.34h-.08a21.7 21.7 0 0 0-7.25-1H0V61.8h9.52V34.51h-.08Z" />
                        </g>

                        <defs>
                            <clipPath id="ab">
                                <path fill="#fff" d="M0 0h33.64v61.83H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className='h1'>Your Table Awaits at Riviera {attributes.title}</div>
                    <div className='border'></div>
                    <div className='button primary-button icon-inside'>
                        <div className='button-wrapper booking-venue'>
                            <a href={attributes.wa_booking} data-desc={attributes.booking_id} target={attributes.wa_booking ? "_blank" : ""}>
                                RESERVE NOW
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 22"><path fill="#2D2D2D" fill-rule="evenodd" d="M9.822 10.67-.004.844l.849-.848L11.519 10.67.845 21.344l-.849-.848 9.826-9.826Z" clip-rule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid map'>
                <div className='left'>
                    <Text tag="div" set="map_title" {...props} className="map-title h2 double-border-bottom" />
                    <Text tag="div" set="map_description" {...props} className="map-description" />
                </div>
                <div className='map-embed mol' data-icon={attributes.map_image.url} data-location={attributes.map_location} data-title={attributes.title}></div>
            </div>
            <div className='instagram-wrapper'>
                <Text tag="div" set="ig_feed" {...props} className="instagram" />
                <div className='button-follow'>
                    <a href={props.attributes.ig_follow_url} style={{ backgroundColor: attributes.theme_color }} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='ig-icon' fill="none" viewBox="0 0 22 22"><path fill="#fff" d="M10.99 5.31c-3.13 0-5.68 2.55-5.68 5.68s2.55 5.68 5.68 5.68 5.68-2.55 5.68-5.68-2.55-5.68-5.68-5.68Zm0 9.35c-2.02 0-3.67-1.65-3.67-3.67s1.65-3.67 3.67-3.67 3.67 1.65 3.67 3.67-1.65 3.67-3.67 3.67ZM16.85 3.83c-.73 0-1.32.59-1.32 1.32 0 .73.59 1.32 1.32 1.32.73 0 1.32-.59 1.32-1.32 0-.73-.59-1.32-1.32-1.32Z" /><path fill="#fff" d="M15.7 0H6.28A6.29 6.29 0 0 0 0 6.28v9.42a6.29 6.29 0 0 0 6.28 6.28h9.42a6.29 6.29 0 0 0 6.28-6.28V6.28A6.29 6.29 0 0 0 15.7 0Zm4.27 15.7c0 2.35-1.91 4.27-4.27 4.27H6.28c-2.35 0-4.27-1.91-4.27-4.27V6.28c0-2.35 1.91-4.27 4.27-4.27h9.42c2.35 0 4.27 1.91 4.27 4.27v9.42Z" /></svg>
                        Follow Us
                        <svg xmlns="http://www.w3.org/2000/svg" className='arrow' fill="none" viewBox="0 0 12 22"><path fill="#2D2D2D" fill-rule="evenodd" d="M9.822 10.67-.004.844l.849-.848L11.519 10.67.845 21.344l-.849-.848 9.826-9.826Z" clip-rule="evenodd" /></svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BookingBanner
export {
    attributes
}