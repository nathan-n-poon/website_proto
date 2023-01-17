import React from "react";
import './styles.css';

const AboutMe = () => {
    return (
        <div id={'AboutMeContainer'} >
            <div id={'Headshot'}>
                <img src={require('../../images/img.png')} alt={'A picture of me'}/>
            </div>

            <div id={'description'}>
                <h1>Hi! My name is Nathan</h1>
                <h3>Welcome to my website.</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;