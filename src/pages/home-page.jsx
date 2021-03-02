import React from 'react';

import Hero from '../compontents/hero.jsx';
import ProjectSlider from '../compontents/slider';

import './home-page.css';

class HomePage extends React.Component {
    render() {
        return(
            <div className="home">
                <div>
                    <Hero title={this.props.title} subTitle={this.props.subTitle} />
                </div>
                <div className="home-container"> 
                    <div className="home-text-container">
                        <p>My name is Mark Novak. I am a web developer based in the north woods of the beuatiful Upper Peninsula of Michigan. Please feel free to check out my About and Projects page to learn more about myself and my projects.</p>
                    </div>
                    
                    <div className="box-container">
                        <div className="info-boxes">
                            <div className="box">
                                <p>Learn more about myself</p>
                                <a href="https://manovak24.github.io/about">About</a>
                            </div>
                            <div className="box">
                                <p>Learn about my project and skills</p>
                                <a href="https://manovak24.github.io/projects">Projects</a>
                            </div>
                            <div className="box">
                                <p>Let's connect!</p>
                                <a href="https://manovak24.github.io/contact">Contact</a>
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