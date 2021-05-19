import React from 'react';
import { BsChatDots, BsClipboardData } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Hero from '../compontents/hero.jsx';
import './about-page.css';

import Resume from '../assets/Mark Novak 3.10.21.docx.pdf';
import Headshot from '../assets/headshot.jpeg';

class AboutPage extends React.Component {
    render() {
        return(
            <div className="about-container">
                <div>
                    <Hero title={this.props.title} />
                </div>
                <div>
                    
                </div>
                <article className="bio-container">
                    <img style={{float: "left", marginRight: '1rem', borderRadius: "1rem"}} src={Headshot} alt="headshot"></img>
                    <p>Thank you for visiting my website! I am a web developer based in Marquette, Michigan. Originally from the suburbs of Chicago, I made the move to the Upper Peninsula in 2008 to attend Northern Michigan University where I studied Finance & Risk Management. In addition, I played on the ACHA DII hockey team for five years, being an ACHA Academic All American Hockey Player for my final two seasons. After completing my undergraduate degree I was admitted as a Graduate Assistant to the Masters of Business Administration program at NMU.</p>
                    <p>Following my academic and hockey career, I began my professional development. First starting out in the finance industry and eventually switching to the medical device industry, where I have spent the last three years. I have enjoyed the professional experiences along the way, but always left with feeling that I was meant to do something else…. This is where the real story begins.</p>
                    <p>Exploring possible career paths, I came across web development. At first it started as a side hobby. Coding on the weekends and slowly making steps forward. Eventually the snowball effect took control and soon became a sole focus in my life. I have been enrolled in the CodeCademy Full-Stack Web Development course for the past year. This is been a challenging, humbling and rewarding experience. I love to continuously learn and keep progressing forward.</p>
                </article>
                <div className="button-container">
                    <Link className="button-link" to={Resume} target="_blank" download>Download Resume</Link>
                    <Link className="button-link" to="/projects"><BsClipboardData size="25" /> Skills & Projects</Link>
                    <Link className="button-link" to="/contact"><BsChatDots size="25" /> Contact</Link>
                </div>
            </div>

        )
    }
}

export default AboutPage;