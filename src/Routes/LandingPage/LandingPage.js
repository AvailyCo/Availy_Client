import React from 'react';
import './LandingPage.css';
import Hero from '../../Components/Hero/Hero';
import SuccessStories from '../../Components/SuccessStories/SuccessStories';

class LandingPage extends React.Component {
    render() {
        return (
            <section id="LandingContent">
                <Hero />
                {/*  <LandingSections /> */}
                <SuccessStories />
            </section>
        );
    }
}

export default LandingPage;