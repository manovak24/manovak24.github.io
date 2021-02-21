import React from 'react';
import Hero from '../compontents/hero.jsx';
import ProjectSlider from '../compontents/slider';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Hero title={this.props.title} subTitle={this.props.subTitle} />
                </div>
                <div>
                    <ProjectSlider />
                </div>
            </div>

        )
    }
}

export default HomePage;