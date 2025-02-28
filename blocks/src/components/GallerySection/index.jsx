import "./style.scss";

import React from 'react'
import Media from "../helper/Media";
import ButtonSlider from '../helper/ButtonSlider';
import Controller from "../helper/Controller";


const attributes = {
  gallery: {
    type: 'array',
    default: [
      {
        url: "./../../assets/images/imageright.jpeg"
      },

      {
        url: "./../../assets/images/imageright.jpeg"
      },
    ]
  }
}
export default function (props) {

  const { gallery } = props.attributes
  const galleryList = () => gallery.map((item, index) => {
    const updateKey = `gallery.${index}`
    return <div className="swiper-slide"><Media set={updateKey} {...props} /></div>
  })

  return (
    <>
      <Controller {...props}>
        <div className="inner gallery-list-editor">
          {galleryList()}
          <ButtonSlider slider="gallery" {...props} />
        </div>
      </Controller>
      <section className='property-gallery'>
        <div className='carousel-gallery swiper'>
          <div className='swiper-wrapper'>
            {galleryList()}
          </div>
        </div>
      </section>
    </>
  )

}


export {
  attributes
}
