import React, { useEffect, useState } from "react";
import * as dateFn from "date-fns";

import "./Book.css";
import { images } from "../../constants";

export default function Book({ user, setUser }) {
    const [date, setDate] = useState(() => {
        return new Date();
    });

    const [guest, setGuest] = useState(1);

    const [reservation, setReservation] = useState()

    const [userReservations, setUserReservations] = useState(user.reservations);


    let newDate = String(date)


    function handleAddGuest() {
        setGuest(guest + 1);
    };

    function handleRemoveGuest() {
        if (guest > 1) {
            setGuest(guest - 1);
        }
    };

    function handleAddDay() {
        setDate(dateFn.addDays(date, 1));
    };

    function handleRemoveDay() {
        const newDate = dateFn.addDays(date, -1);
        if (dateFn.differenceInMinutes(newDate, Date.now()) > 0) {
            setDate(dateFn.subDays(date, 1));
        }
    };

    function handleAddHour() {
        setDate(dateFn.addMinutes(date, 30));
    };

    function handleRemoveHour() {
        const newDate = dateFn.subMinutes(date, 15);
        if (dateFn.differenceInMinutes(newDate, Date.now()) > 0) {
            setDate(newDate);
        }
    };

    function addReservation(e) {
        e.preventDefault()
        fetch('http://localhost:4000/reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ dateAndTime: newDate, personsNumber: guest, userId: user.id })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setReservation(data)
                    setUserReservations([...userReservations, data])
                }
            })
    }

    useEffect(() => {
        fetch(`http://localhost:4000/user/${user.id}`).then(resp => resp.json())
            .then(userFromServer => setUser(userFromServer))
    }, [userReservations])


    if (!user) {
        return (
            <div className="app__book" id="book">
                <div className="app__book-container">
                    <h1 className="headtext__cormorant">Log In to Book a Table...</h1></div>
            </div>
        )
    }

    else if (reservation) {
        return (
            <div className="app__book" id="book">
                <div className="app__book-container">
                    <img src={images.gericht} alt="" />
                    <p className="p__cormorant">Thank you for booking at our place</p>
                    <form>
                        <div className="app__book-reserve">
                            <div className="app__book-date">
                                Date {dateFn.format(date, "E, d MMM")}
                                <button type="button" onClick={handleRemoveDay}>
                                    -
                                </button>
                                <button type="button" onClick={handleAddDay}>
                                    +
                                </button>{" "}
                            </div>
                            <div className="app__book-persons" >
                                Persons {guest}{" "}
                                <button type="button" onClick={handleRemoveGuest}>
                                    -
                                </button>
                                <button type="button" onClick={handleAddGuest}>
                                    +
                                </button>{" "}
                            </div>
                            <div className="app__book-time">
                                Time {dateFn.format(date, "HH:mm")}
                                <button type="button" onClick={handleRemoveHour}>
                                    -
                                </button>
                                <button type="button" onClick={handleAddHour}>
                                    +
                                </button>{" "}
                            </div>
                            <button className="app__book-submit" type="submit" onClick={addReservation}>Submit</button>
                        </div>
                    </form>
                </div >
            </div >
        );
    }

    return (
        <div className="app__book" id="book">
            <div className="app__book-container">
                <img src={images.gericht} alt="" />
                <form>
                    <div className="app__book-reserve">
                        <div className="app__book-date">
                            Date {dateFn.format(date, "E, d MMM")}
                            <button type="button" onClick={handleRemoveDay}>
                                -
                            </button>
                            <button type="button" onClick={handleAddDay}>
                                +
                            </button>{" "}
                        </div>
                        <div className="app__book-persons" >
                            Persons {guest}{" "}
                            <button type="button" onClick={handleRemoveGuest}>
                                -
                            </button>
                            <button type="button" onClick={handleAddGuest}>
                                +
                            </button>{" "}
                        </div>
                        <div className="app__book-time">
                            Time {dateFn.format(date, "HH:mm")}
                            <button type="button" onClick={handleRemoveHour}>
                                -
                            </button>
                            <button type="button" onClick={handleAddHour}>
                                +
                            </button>{" "}
                        </div>
                        <button className="app__book-submit" type="submit" onClick={addReservation}>Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
}