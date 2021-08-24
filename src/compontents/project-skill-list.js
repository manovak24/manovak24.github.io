import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DiCss3, DiGit, DiGithubBadge, DiHtml5, DiJavascript, DiNodejs, DiNpm, DiReact } from 'react-icons/di';
import { SiRedux } from 'react-icons/si';
import './project-skill-list.css';

import NumberGame from '../assets/thumb-number-game.png';
import MUSICforYOU from '../assets/thumb-MUSICforYOU.png';
import fate from '../assets/thumb-fate-of-choice.png';
import splitboardkw from '../assets/thumb-sb-k-w.png';
import mqtbackcountry from '../assets/thumb-mqt-backcountry.png';
import creditCardValidator from '../assets/thumb-credit-card-validator.png';

import JsCertificate from '../assets/js-certificate.pdf';
import ReactCertificate from '../assets/react-certificate.pdf';
import GitCertificate from '../assets/git-certificate.pdf';
import CommandLineCertificate from '../assets/command-line-certificate.pdf';

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
                    title: 'Fate of Choice',
                    description: 'This project consists of a single page website game built with HTML, CSS and JavaScript. The objective is to select the correct doors in order to avoid the door containing chores.',
                    languages: 'HTML, CSS and JavaScript',
                    img: fate,
                    altImg: 'screen shot of chore door',
                    link: 'https://manovak24.github.io/chore_door/',
                    githubLink: 'https://github.com/manovak24/chore_door'
                },
                {
                    id: 4,
                    title: 'Number Guessing Game',
                    description: 'This web app is a number guessing game in which the player competes against the computer to see who can guess closest to the randomly generated target number. The purpose of this game is to demonstrate utilizing React’s useState() hook to store and update game variables.',
                    languages: 'ReactJS, JavaScript, HTML, CSS, sweetalert2',
                    img: NumberGame,
                    altImg: 'screen shot of number guessing game',
                    link: 'https://ecstatic-banach-130d97.netlify.app/',
                    githubLink: 'https://github.com/manovak24/Number_Guessing_Game'
                },
                {
                    id: 5,
                    title: 'MUSICforYOU',
                    description: 'This project was created using React and utilizes the Spotify API request allowing users to search music and create playlists via the MUSICforYOU app. Users are then able to push the created play list to their personal Spotify accounts.',
                    languages: 'ReactJS, JavaScript, HTML, CSS, React Icons, React Bootstrap, Google Map, React pdf, React Router, React Slick and Sweet Alert',
                    img: MUSICforYOU,
                    altImg: 'screen shot of jammming',
                    link: 'https://manovak24.github.io/music_for_you/',
                    githubLink: 'https://github.com/manovak24/music_for_you'
                },
                {
                    id: 6,
                    title: 'Credit Card Validator',
                    description: 'This is a credit card validator app using the Luhn Algorithm. The app also utilizes sweetalert2 indicating if the card is valid or not valid.',
                    languages: 'ReactJS, JavaScript, HTML, CSS, sweetalert2, React Credit Cards',
                    img: creditCardValidator,
                    altImg: 'Screen shot of Credit Card Validator',
                    link: 'https://manovak24.github.io/credit_card_validator/',
                    githubLink: 'https://github.com/manovak24/credit_card_validator'
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
                    title: 'Redux',
                    logo: <SiRedux size='48' />,
                    alt: 'react'
                },

                {
                    id: 6,
                    title: 'npm',
                    logo: <DiNpm size='48' />,
                    alt: 'npm'
                },
                {
                    id: 7,
                    title: 'git',
                    logo: <DiGit size='48' />,
                    alt: 'git'
                },
                {
                    id: 8,
                    title: 'GitHub',
                    logo: <DiGithubBadge size='48' />,
                    alt: 'GitHub'
                },
                {
                    id: 9,
                    title: 'node',
                    logo: <DiNodejs size='48' />,
                    alt: 'node'
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Row className="projects-skills-container">
                    <Col>
                        <div className="education-container">
                            <h1>Education</h1>
                            <ul>
                                <li>
                                    <p><span className="education-title">Northern Michigan University</span> - Bachelor of Science - Finance and Risk Management</p>
                                    <p><span className="education-title">Northern Michigan University</span> - Masters of Business Administration</p>
                                    <p><span className="education-title">Codecademy Career Path</span> - Full-Stack Engineer</p>
                                    <p><span className="education-title">Codecademy Certificate</span>  - <Link to={JsCertificate} target="_blank">Building Interactive JavaScript Websites</Link></p>
                                    <p><span className="education-title">Codecademy Certificate</span>  - <Link to={ReactCertificate} target="_blank">Learn React</Link></p>
                                    <p><span className="education-title">Codecademy Certificate</span>  - <Link to={GitCertificate} target="_blank">Learn Git</Link></p>
                                    <p><span className="education-title">Codecademy Certificate</span>  - <Link to={CommandLineCertificate} target="_blank">Learn the Command Line</Link></p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="border-bottom d-none d-lg-block d-md-block"></Col>
                </Row>

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
                                {this.state.projects.slice(0).reverse().map(projects => (
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
            </div>
        )
    }
}

export default ProjectSkillList;