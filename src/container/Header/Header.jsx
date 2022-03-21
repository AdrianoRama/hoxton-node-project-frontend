import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images'

import './Header.css';

export default function Header() {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='Soho, London' />
        <h1 className='app__header-h1'>The classy way of dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>
          Bob Bob Ricard Soho, the iconic London restaurant, serves
          classic British & Russian menu to an eclectic clientele
          in London’s most glamorous all-booth dining room.
        </p>
        <button type='button' className='custom__button'>VIEW MENU</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt='header img' />
      </div>
    </div>
  )
}

