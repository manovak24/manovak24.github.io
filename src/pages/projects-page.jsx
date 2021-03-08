import React from 'react';
import Hero from '../compontents/hero.jsx';
import ProjectSkillList from '../compontents/project-skill-list';

class ProjectsPage extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Hero title={this.props.title} />
                </div>
                <div>
                    <ProjectSkillList />
                </div>
            </div>

        )
    }
}

export default ProjectsPage;