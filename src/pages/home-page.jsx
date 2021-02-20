import React from 'react';
import Hero from '../compontents/hero.jsx';

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Hero title={this.props.title} subTitle={this.props.subTitle} />
                </div>
                
            </div>

        )
    }
}

export default HomePage;