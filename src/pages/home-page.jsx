import React from 'react';

import Hero from '../compontents/hero.jsx';
import ProjectSlider from '../compontents/slider';

import './home-page.css';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Hero title={this.props.title} subTitle={this.props.subTitle} />
                </div>
                <div>
                    <h1></h1>
                </div>
                <div className="featured-container">
                    <h1>Featured Projects</h1>
                    <p>Below are some samples of some of my featured projects. Please check out my Projects page for full listing of project websites</p>
                    <ProjectSlider />
                </div>
            </div>

        )
    }
}

export default HomePage;