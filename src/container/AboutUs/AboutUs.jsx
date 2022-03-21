import React from 'react';
import images from '../../constants/images'

import './AboutUs.css';


export default function AboutUs() {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Equipped with a “Press for Champagne” button
            at every table, it is famous for pouring more
            champagne than any other restaurant in Britain.</p>
          <button type="button" className="custom__button">
            <a href="https://en.wikipedia.org/wiki/Bob_Bob_Ricard" target="_blank">Know More</a>
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">The restaurant opened in late 2008.
            The restaurant is owned by the Russian-born British entrepreneur Leonid Shutov.</p>
          <button type="button" className="custom__button">
            <a href="https://en.wikipedia.org/wiki/Bob_Bob_Ricard#History" target="_blank">Know More</a>
          </button>
        </div>
      </div>
    </div>
  )
}

