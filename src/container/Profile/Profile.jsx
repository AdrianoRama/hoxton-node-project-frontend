import React from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../../constants'
import './Profile.css'

export default function Profile({ user, setUser }) {

    const time = user.reservations.map(reservation => reservation.time)
    const date = user.reservations.map(reservation => reservation.date)
    const personsNumber = user.reservations.map(reservation => reservation.personsNumber)

    const navigate = useNavigate()

    return (
        <div className='app__profile'>
            <div className="app__profile-user">
                <img src={images.gericht} alt="" />
                <h1 className='headtext__cormorant'>Hello, {user.name}!</h1>
                <div className="app__profile-reservation">
                    <h1>Your have {user.reservations.length} Reservations </h1>
                    <span>Date: {date}</span>
                    <span>Time: {time}</span>
                    <span>Number of Persons: {personsNumber}</span>
                </div>
                <button onClick={() => {
                    navigate(`/soho`)
                    setUser(undefined)
                }}>Sign Out</button>
            </div>
        </div>
    )

}
