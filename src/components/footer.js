import React from 'react';

import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends React.Component {
    render() {
        return (
            <footer className="mt-5">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3 d-flex">
                        <Col className="p-0 d-flex justify-content-end">This site was made by Mark Novak</Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;