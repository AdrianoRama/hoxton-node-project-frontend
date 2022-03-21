import React from 'react'
import { images } from '../../constants'
import './WholeMenu.css'

export default function WholeMenu() {
    return (
        <div className='app__wholemenu'>
            <div className="app__wholemenu-container">
                <img src={images.wholeMenu} alt="wholeMenu" />
            </div>
        </div>
    )
}
