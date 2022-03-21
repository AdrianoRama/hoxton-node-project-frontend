import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import data from '../../constants/data'

import './Gallery.css';


const galleryImages = data.gallery

export default function Gallery() {
  const scrollRef = React.useRef(null)

  function scroll(direction) {
    const { current } = scrollRef
    if (direction === 'left') current.scrollLeft -= 300
    else current.scrollLeft += 300
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Two iconic London restaurants. Home of the “Press for champagne” button. Soho & City of London. Tokyo, Japan, coming soon.</p>
        <button type="button" className="custom__button">
          <a href="https://www.instagram.com/bobbobricard/" target="_blank">View More</a>
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <a href={`https://www.instagram.com/${image.extUrl}`} target="_blank">
                <img src={image.src} alt="gallery_image" />
              </a>
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}


