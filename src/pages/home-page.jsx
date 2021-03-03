import React from 'react';
import Hero from '../compontents/hero.jsx';
import ProjectSlider from '../compontents/slider';
import './home-page.css';

import { BsChatDots, BsClipboardData, BsPeopleCircle } from 'react-icons/bs';

class HomePage extends React.Component {
    render() {
        return(
            <div className="home">
                <div>
                    <Hero title={this.props.title} subTitle={this.props.subTitle} />
                </div>
                <div className="home-container"> 
                    <div className="home-text-container">
                        <p>Thank you for checking out my site! I am a web developer based in the north woods of the beuatiful Upper Peninsula of Michigan. Please feel free to check out my About and Projects page to learn more about myself and my projects.</p>
                    </div>
                    
                    <div className="box-container">
                        <div className="info-boxes">
                            <div className="box">
                                <a href="https://manovak24.github.io/about" className="box-anchor"> 
                                    <p> Click to learn more about myself</p>
                                    <BsPeopleCircle size="100" />
                                </a>
                            </div>
                            <div className="box">
                                <a href="https://manovak24.github.io/projects" className="box-anchor">
                                    <p>Click to learn about my project and skills</p>
                                    <BsClipboardData size="100" />
                                </a> 
                            </div>
                            <div className="box">
                                
                                <a href="https://manovak24.github.io/contact" className="box-anchor">
                                    <p>Click here to connect!</p>
                                    <BsChatDots size="100" />
                                </a>
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