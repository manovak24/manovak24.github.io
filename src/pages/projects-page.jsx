import React from 'react';
import Hero from '../compontents/hero.jsx';

class ProjectsPage extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Hero title={this.props.title} />
                </div>
                
            </div>

        )
    }
}

export default ProjectsPage;