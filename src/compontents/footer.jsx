import React from 'react';

import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialFollow from './social-follow.jsx';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3 mt-4 d-flex">
                        <Col style={{textAlign:'left', padding:'0'}}>
                            <SocialFollow />
                        </Col>
                        <Col style={{textAlign:'right', padding:'0'}}>Novak North Designs</Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;