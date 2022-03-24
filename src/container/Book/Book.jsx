import React, { useState } from "react";
import * as dateFn from "date-fns";

import "./Book.css";
import { images } from "../../constants";

export default function Book({ user }) {
    const [date, setDate] = useState(() => {
        return new Date();
    });

    const [guest, setGuest] = useState(1);

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

    if (!user) {
        return (
            <div className="app__book" id="book">
                <div className="app__book-container">
                    <h1 className="headtext__cormorant">Log In to Book a Table...</h1></div>
            </div>
        )
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
                        <button className="app__book-submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}