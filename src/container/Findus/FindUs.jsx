import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants'

export default function FindUs() {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className="app__wrapper_info">
        <SubHeading title='Contact' />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>FInd Us</h1>
        <div className="app__wrapper-content">
          <p className='p__opensans'>1 Upper James Street
            Soho, London, W1F 9DF
          </p>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Times</p>
          <p className='p__opensans'>Monday 17:30 – 00:00</p>
          <p className='p__opensans'>Tuesday 17:30 – 00:00</p>
          <p className='p__opensans'>Wednesday 17:30 – 00:00</p>
          <p className='p__opensans'>Thursday 12:00 – 00:00</p>
          <p className='p__opensans'>Friday 12:00 – 00:00</p>
          <p className='p__opensans'>Saturday 12:00 – 00:00</p>
          <p className='p__opensans'>Sunday 12:00 – 00:00</p>
        </div>
        <a href="https://www.google.com/maps/place/Bob+Bob+Ricard+Soho/@51.51233,-0.1372525,15z/data=!4m5!3m4!1s0x0:0x483d43bdcad9b09a!8m2!3d51.51233!4d-0.1372525" target="_blank">
          <button className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button>
        </a>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  )
}


