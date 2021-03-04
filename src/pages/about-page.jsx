import React from 'react';
import Hero from '../compontents/hero.jsx';


class AboutPage extends React.Component {
    render() {
        return(
            <div style={{ height: '600px', width: '100%'}}>
                <div>
                    <Hero title={this.props.title} />
                </div>
            </div>

        )
    }
}

export default AboutPage;