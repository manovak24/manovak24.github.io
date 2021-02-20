import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

import './hero.css';

const Hero = (props) => {
    return (
        <Jumbotron className="jumbotron-container">
            <Container className="jumbotron-elements">
                { props.title && <h1>{props.title}</h1> }
                { props.subTitle && <p>{props.subTitle}</p> }
            </Container>
        </Jumbotron>
    )
}

export default Hero;