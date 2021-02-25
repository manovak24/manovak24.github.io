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
                    <div>
                        <p>My name is Mark Novak. I am a web developer based in the north woods of the beuatiful Upper Peninsula of Michigan. Please feel free to check out my About and Projects page to learn more about myself and my projects.</p>
                    </div>
                    <h1 className="featured-title">Featured Projects</h1>
                    <div className="featured-container">
                        <p>Below are some samples of some of my featured projects. Please check out my Projects page for full listing of project websites</p>
                        <ProjectSlider />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;