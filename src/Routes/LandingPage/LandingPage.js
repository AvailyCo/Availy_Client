import React from 'react';
import './LandingPage.css';
import Hero from '../../Components/Landing/Hero/Hero';
import Steps from '../../Components/Landing/Steps/Step';
import SuccessStories from '../../Components/Landing/SuccessStories/SuccessStories';

class LandingPage extends React.Component {
    render() {
        return (
            <section id="LandingContent">
                <Hero />
                <Steps />
                <SuccessStories />
            </section>
        );
    }
}

export default LandingPage;