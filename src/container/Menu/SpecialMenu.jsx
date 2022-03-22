import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SubHeading from '../../components/SubHeading/SubHeading';
import './SpecialMenu.css';


export default function SpecialMenu() {

  const [wines, setWines] = useState([])
  const [champagnes, setChampagnes] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/wines`).then(resp => resp.json())
      .then(winesFromServer => setWines(winesFromServer))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4000/champagnes`).then(resp => resp.json())
      .then(champagnesFromServer => setChampagnes(champagnesFromServer))
  }, [])

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
            {wines.map((wine) => (

              <div className="app__menuitem" key={wine.id}>
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
            {champagnes.map((champagne) => (

              <div className="app__menuitem" key={champagne.id}>
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
        <button type='button' className='custom__button'><NavLink to={`/wholemenu`}> VIEW MORE </NavLink></button>
      </div>
    </div>
  )
}

