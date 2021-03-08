import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DiCss3, DiHtml5, DiJavascript, DiReact } from 'react-icons/di';

class ProjectSkillList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    title: 'Splitboard Knowledge Warehouse',
                    description: 'This is where  short description will go. This is where  short description will go. This is where  short description will go.',
                    link: 'https://manovak24.github.io/splitboard_knowledge_warehouse/'
                },
                {
                    id: 2,
                    title: 'MQT Backcountry',
                    description: 'This is where  short description will go. This is where  short description will go. This is where  short description will go.',
                    link: 'https://manovak24.github.io/mqt_backcountry/'
                },
                {
                    id: 3,
                    title: 'Chore Door',
                    description: 'This is where  short description will go. This is where  short description will go. This is where  short description will go.',
                    link: 'https://manovak24.github.io/chore_door/'
                },
                {
                    id: 4,
                    title: 'Jammming',
                    description: 'This is where  short description will go. This is where  short description will go. This is where  short description will go.',
                    link: 'https://manovak24.github.io/jammming/'
                }
            ],
            skills: [
                {
                    id: 1,
                    title: 'HTML',
                    logo: <DiHtml5 />,
                    alt: 'html'
                },
                {
                    id: 2,
                    title: 'CSS',
                    logo: <DiCss3 />,
                    alt: 'css'
                },
                {
                    id: 3,
                    title: 'JavaScript',
                    logo: <DiJavascript />,
                    alt: 'javascript'
                },
                {
                    id: 4,
                    title: 'React',
                    logo: <DiReact />,
                    alt: 'react'
                }
            ]
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <div>
                        <h1>Skills</h1>
                        <ul>
                            {this.state.skills.map(skills => (
                                <li key={skills.id}>
                                    <p>{skills.logo} {skills.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
                
                <Col>
                    <div>
                        <h1>Projects</h1>
                        <ul>
                            {this.state.projects.slice(0).map(projects => (
                                <li key={projects.id}>
                                    <p>{projects.title}</p>
                                    <p>{projects.description}</p>
                                    <p><a href={projects.link} target="_blank" rel="noopener noreferrer">Click here to launch site</a></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ProjectSkillList;