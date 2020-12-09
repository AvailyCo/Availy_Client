import React, { Component } from 'react';
import './Step.css';

import { LandingSectionText } from '../../../TEXT';

class Step extends Component {
    render() {
        return (
            <section id="StepsSection">
                {LandingSectionText.map((stepInfo, index) => {
                    return (
                        <section id={"Step " + stepInfo.id} key={index} className="landingDetails">
                            <div className="StepInfoBox">
                                <h2>{stepInfo.header}</h2>
                                <p>{stepInfo.details}</p>
                            </div>
                            <div className="svgStepBox">
                                {stepInfo.svgLocation}
                            </div>
                        </section >
                    )
                })}
            </section>
        )
    }
}

export default Step;