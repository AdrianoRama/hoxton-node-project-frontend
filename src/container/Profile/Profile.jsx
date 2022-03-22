import React from 'react'
import { images } from '../../constants'
import './Profile.css'

export default function Profile({ user }) {

    const time = user.reservations.map(reservation => reservation.time)
    const date = user.reservations.map(reservation => reservation.date)
    const personsNumber = user.reservations.map(reservation => reservation.personsNumber)

    return (
        <div className='app__profile'>
            <div className="app__profile-user">
                <img src={images.gericht} alt="" />
                <div className="app__profile-reservation">
                    <h1 className='headtext__cormorant'>Name: {user.name}</h1>
                    <h1>Your reservation: </h1>
                    <span>Date: {date}</span>
                    <span>Time: {time}</span>
                    <span>Number of Persons: {personsNumber}</span>
                </div>
            </div>
        </div>
    )
}
