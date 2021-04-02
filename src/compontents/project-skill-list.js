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
                    title: 'MQT Backcountry',
                    description: 'MQT Backcountry is a project I created that utilizes CSS Grid Layout to create a responsive website with multiple pages for a fake outdoor recreation club.',
                    languages: 'HTML, CSS and JavaScript',
                    img: mqtbackcountry,
                    altImg: 'screen shot of mqt backcountry',
                    link: 'https://manovak24.github.io/mqt_backcountry/',
                    githubLink: 'https://github.com/manovak24/mqt_backcountry'
                },
                {
                    id: 2,
                    title: 'Splitboard Knowledge Warehouse',
                    description: 'This site was created to demonstrate the use of flex box in order to design a one page responsive website for a fictitious organization.',
                    languages: 'HTML, CSS and JavaScript',
                    img: splitboardkw,
                    altImg: 'screen shot of SbKW',
                    link: 'https://manovak24.github.io/splitboard_knowledge_warehouse/',
                    githubLink: 'https://github.com/manovak24/splitboard_knowledge_warehouse'
                },
                
                {
                    id: 3,
                    title: 'Chore Door',
                    description: 'This project was part of CodeCademy’s Full Stack Developer course, which consists of a single page website game built with HTML, CSS and JavaScript.',
                    languages: 'HTML, CSS and JavaScript',
                    img: chore,
                    altImg: 'screen shot of chore door',
                    link: 'https://manovak24.github.io/chore_door/',
                    githubLink: 'https://github.com/manovak24/chore_door'
                },
                {
                    id: 4,
                    title: 'Jammming',
                    description: 'This project was created using React and utilizes the Spotify API request allowing users to search music and create playlists via the Jammming app. Users are then able to push the created play list to their personal Spotify accounts.',
                    languages: 'ReactJS, JavaScript, HTML, CSS, React Icons, React Bootstrap, Google Map, React pdf, React Router, React Slick and Sweet Alert',
                    img: jammming,
                    altImg: 'screen shot of jammming',
                    link: 'https://manovak24.github.io/jammming/',
                    githubLink: 'https://github.com/manovak24/jammming'
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
                                    </div>
                                    <div className="link-container">
                                        <a className="site-launch-button" href={projects.link} target="_blank" rel="noopener noreferrer">Launch site</a>
                                        <a className="site-launch-button" href={projects.githubLink} target="_blank" rel="noopener noreferrer"><DiGithubBadge size='24' /> GitHub Repo</a>
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