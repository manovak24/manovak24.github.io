import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DiCss3, DiGit, DiGithubBadge, DiHtml5, DiJavascript, DiNodejs, DiNpm, DiReact } from 'react-icons/di';
import './project-skill-list.css';

import jammming from '../assets/thumb-jammming.png';
import chore from '../assets/thumb-chore-door.png';
import splitboardkw from '../assets/thumb-sb-k-w.png';
import mqtbackcountry from '../assets/thumb-mqt-backcountry.png';

class ProjectSkillList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    title: 'Splitboard Knowledge Warehouse',
                    description: 'This project was designed to display a responsive website for a fictitious organization that provides information and resources on split boarding. The website is an example of a single page site containing multiple sections for the pertinent information.',
                    languages: 'HTML, CSS and JavaScript',
                    img: splitboardkw,
                    altImg: 'screen shot of SbKW',
                    link: 'https://manovak24.github.io/splitboard_knowledge_warehouse/'
                },
                {
                    id: 2,
                    title: 'MQT Backcountry',
                    description: 'This is where  short description will go. This is where  short description will go. This is where  short description will go.',
                    languages: 'HTML, CSS and JavaScript',
                    img: mqtbackcountry,
                    altImg: 'screen shot of mqt backcountry',
                    link: 'https://manovak24.github.io/mqt_backcountry/'
                },
                {
                    id: 3,
                    title: 'Chore Door',
                    description: 'This is where  short description will go. This is where  short description will go. This is where  short description will go.',
                    languages: 'HTML, CSS and JavaScript',
                    img: chore,
                    altImg: 'screen shot of chore door',
                    link: 'https://manovak24.github.io/chore_door/'
                },
                {
                    id: 4,
                    title: 'Jammming',
                    description: 'This is where  short description will go. This is where  short description will go. This is where  short description will go.',
                    languages: 'ReactJS, JavaScript, HTML, CSS, React Icons, React Bootstrap, Google Map, React pdf, React Router, React Slick and Sweet Alert',
                    img: jammming,
                    altImg: 'screen shot of jammming',
                    link: 'https://manovak24.github.io/jammming/'
                }
            ],
            skills: [
                {
                    id: 1,
                    title: 'HTML',
                    logo: <DiHtml5 size='48'  />,
                    alt: 'html'
                },
                {
                    id: 2,
                    title: 'CSS',
                    logo: <DiCss3 size='48'  />,
                    alt: 'css'
                },
                {
                    id: 3,
                    title: 'JavaScript',
                    logo: <DiJavascript size='48'  />,
                    alt: 'javascript'
                },
                {
                    id: 4,
                    title: 'React',
                    logo: <DiReact size='48'  />,
                    alt: 'react'
                },
                {
                    id: 5,
                    title: 'npm',
                    logo: <DiNpm size='48' />,
                    alt: 'npm'
                },
                {
                    id: 6,
                    title: 'git',
                    logo: <DiGit size='48' />,
                    alt: 'git'
                },
                {
                    id: 7,
                    title: 'GitHub',
                    logo: <DiGithubBadge size='48' />,
                    alt: 'GitHub'
                },
                {
                    id: 8,
                    title: 'node',
                    logo: <DiNodejs size='48' />,
                    alt: 'node'
                }
            ]
        }
    }

    render() {
        return (
            <Row className="projects-skills-container">
                <Col xs={12} md={4} className="border-right">
                    <div className="skills-container">
                        <h1>Skills</h1>
                        <ul className="skills-list">
                            {this.state.skills.map(skills => (
                                <li key={skills.id}>
                                    <p>{skills.logo}</p>
                                    <p className="skills-title">{skills.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>

                <Col xs={12} md={8}>
                    <div className="projects-container">
                        <h1>Projects</h1>
                        <ul className="projects-list">
                            {this.state.projects.slice(0).map(projects => (
                                <li key={projects.id}>
                                    <h2>{projects.title}</h2>
                                    <p>{projects.description}</p>
                                    <p style={{ fontStyle: 'italic' }}>**Technologies: {projects.languages}</p>
                                    <div className="image-link">
                                        <a href={projects.link} target="_blank" rel="noopener noreferrer">
                                            <img src={projects.img} alt={projects.altImg}></img>
                                        </a>
                                        <a className="button-link" href={projects.link} target="_blank" rel="noopener noreferrer">Launch site</a>
                                    </div>
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