import React from "react";
import './styles.css';

const AboutMe = () => {
    return (
        <>
            <div id={'intro'}>
                <div id={'headshot'}>
                    <img src={require('../../images/img.png')} alt={'A picture of me'}/>
                </div>

                <div id={'description'}>
                    <h1>Hi! My name is Nathan</h1>
                    <h3>Welcome to my website. Here, I share a bit about me as well as my experiences with computer
                        engineering.</h3>
                    <br/>
                    <h3>Some things I'm interested in:</h3>
                    <ul>
                        <li>Biking</li>
                        <li>Hiking</li>
                        <li>Reading novels</li>
                        <li>Vegan cooking</li>

                    </ul>
                </div>

            </div>
            <div id={'work_experience'}>

            </div>
        </>
    );
}

export default AboutMe;