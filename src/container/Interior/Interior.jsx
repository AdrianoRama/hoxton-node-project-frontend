import React from 'react';
import { images } from '../../constants';

import './Interior.css';

export default function Interior() {
  return (
    <div>
      <div className="app__interior">
        <div className="app__interior-title">
          <h1 className='headtext__cormorant'>Gallery</h1>
        </div>
        <div className="app__interior-img">
          <img src={images.interior} alt='interior_img' className='interior_img' />
        </div>
        <div className="app__interior-desc">
          <p className='p__opensans'>
            Designed by the legendary David Collins, it is
            widely regarded as his most flamboyant creation.
            The interior takes inspiration from the Orient Express and
            the Golden Age of Travel. Uniquely, every table is a booth.
          </p>
        </div>
      </div>
    </div>
  )
}


