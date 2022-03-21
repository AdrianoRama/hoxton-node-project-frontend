import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images, data } from '../../constants'

import './SpecialMenu.css';

export default function SpecialMenu() {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className="app__specialMenu-title">
        <SubHeading title='Menu that fits your class' />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <div className="app__specialMenu_menu_items">
            <h1 style={{ color: 'white' }}>Wine</h1>
            {data.wines.map((wine) => (

              <div className="app__menuitem">
                <div className="app__menuitem-head">
                  <div className="app__menuitem-name">
                    <p className="p__cormorant" style={{ color: '#DCCA87' }}>{wine.title}</p>
                  </div>
                  <div className="app__menuitem-dash" />
                  <div className="app__menuitem-price">
                    <p className="p__cormorant">{wine.price}</p>
                  </div>
                </div>

                <div className="app__menuitem-sub">
                  <p className="p__opensans" style={{ color: '#AAAAAA' }}>{wine.tags}</p>
                </div>
              </div>

            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_champagne flex__center">
          <div className="app__specialMenu_menu_items">
            <h1 style={{ color: 'white' }}>Champagne</h1>
            {data.champagnes.map((champagne) => (

              <div className="app__menuitem">
                <div className="app__menuitem-head">
                  <div className="app__menuitem-name">
                    <p className="p__cormorant" style={{ color: '#DCCA87' }}>{champagne.title}</p>
                  </div>
                  <div className="app__menuitem-dash" />
                  <div className="app__menuitem-price">
                    <p className="p__cormorant">{champagne.price}</p>
                  </div>
                </div>

                <div className="app__menuitem-sub">
                  <p className="p__opensans" style={{ color: '#AAAAAA' }}>{champagne.tags}</p>
                </div>
              </div>

            ))}
          </div>
        </div>

      </div>

      <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

