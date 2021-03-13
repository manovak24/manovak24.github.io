import React from 'react';
import Hero from '../compontents/hero.jsx';
import ProjectSlider from '../compontents/slider';
import './home-page.css';

import { BsChatDots, BsClipboardData, BsPeopleCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return(
            <div className="home">
                <div>
                    <Hero title={this.props.title} subTitle={this.props.subTitle} />
                </div>
                <div className="home-container"> 
                    <div className="home-text-container">
                        <p>Thank you for checking out my site! I am a web developer based in the north woods of the Upper Peninsula of Michigan. Please feel free to check out my About and Projects page to learn more about myself and my projects.</p>
                    </div>
                    
                    <div className="box-container">
                        <div className="info-boxes">
                            <div className="box">
                                <Link className="box-anchor" to="/about">
                                    <p>Click to learn more about myself</p>
                                    <BsPeopleCircle size="100" />
                                </Link>     
                            </div>
                            <div className="box">
                                <Link className="box-anchor" to="/projects">
                                    <p>Click to learn about my skills and projects</p>
                                    <BsClipboardData size="100" /> 
                                </Link>
                            </div>
                            <div className="box">
                                <Link className="box-anchor" to="/contact">
                                    <p>Click here to connect!</p>
                                    <BsChatDots size="100" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <h1 className="featured-title">Featured Projects</h1>
                    <div className="featured-container">
                        <ProjectSlider />
                    </div>

                    
                </div>
            </div>
        )
    }
}

export default HomePage;