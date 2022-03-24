import React from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../../constants'
import './Profile.css'

export default function Profile({ user, setUser }) {

    const navigate = useNavigate()

    return (
        <div className='app__profile'>
            <div className="app__profile-user">
                <img src={images.gericht} alt="" />
                <h1 className='headtext__cormorant'>Hello, {user.name}!</h1>
                <div className="app__profile-reservation">
                    <h1>Your have {user.reservations.length} Reservations </h1>
                    {user.reservations.map(reservation => {
                        return <>
                            <span>Date & Time: {reservation.dateAndTime}</span>
                            <span>Number of Persons: {reservation.personsNumber}</span>
                        </>
                    })}
                </div>
                <button onClick={() => {
                    navigate(`/soho`)
                    setUser(undefined)
                }}>Sign Out</button>
            </div>
        </div>
    )

}
