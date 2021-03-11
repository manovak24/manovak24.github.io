import React from 'react';
import { BsChatDots, BsClipboardData } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Hero from '../compontents/hero.jsx';
import './about-page.css';

import Resume from '../assets/Mark Novak 3.10.21.docx.pdf';

class AboutPage extends React.Component {
    render() {
        return(
            <div className="about-container">
                <div>
                    <Hero title={this.props.title} />
                </div>
                <div className="bio-container">
                    <p>Thank you for visiting my website! My name is Mark Novak. I am a web developer based in Marquette, Michigan. Originally from the suburbs of Chicago, I made the move to the Upper Peninsula in 2008 to attend Northern Michigan University where I studied Finance & Risk Management. In addition, I played on the DII ACHA hockey team for five years, being an ACHA Academic All American Hockey Player for my final two years. After completing my undergraduate degree I was admitted as a graduate assistant to the Masters of Business Administration program at NMU.</p>
                    <p>Following my academic and hockey career, I began my professional development and found my way into the finance industry. Serving as a plan processor for Hantz Group, a personal financial advising firm, I learned many valuable financial skills. After time passed I found my current job as a contract analyst for RTI Surgical, a medical device company. The past three years have been an extremely rewarding experience, but something felt like it was missing from my career path. This is where the real story begins.</p>
                    <p>Exploring possible career paths, I came across web development. At first it started as a side project hobby. Coding on the weekends and slowly making steps forward. Eventually the snowball effect took control and soon became a sole focus in my life. I have been enrolled in the CodeCademy Full-Stack Web Development course for the past year. This is been a challenging, humbling and rewarding experience. I love to continuously learn and keep progressing forward.</p>
                </div>
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