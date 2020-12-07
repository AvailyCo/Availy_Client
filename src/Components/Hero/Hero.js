import React from 'react';
import './Hero.css';
import { HeroText } from '../../TEXT';

import { ReactComponent as CalendarImage } from '../../Assets/calendar.svg';

import PeopleImage from '../../Assets/people.svg';
import hill from '../../Assets/orangehill.png';

class Hero extends React.Component {
    render() {
        return (
            <section id="HeroContent">
                <div id="HeroBox">
                    <section id="AvailyDescriptionBox">
                        <h1>{HeroText.heading}</h1>
                        <p>{HeroText.details}</p>
                    </section>

                    <section id="HeroImageBox">
                        <div className="calendar-box">
                            <CalendarImage />
                        </div>
                        <img id="people-image" src={PeopleImage} alt="" />
                    </section>

                </div>

                <img id="hill-image" src={hill} alt="" />
            </section>
        );
    }
}

export default Hero;