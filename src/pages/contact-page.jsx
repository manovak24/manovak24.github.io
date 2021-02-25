import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Hero from '../compontents/hero.jsx';

import { MdEmail } from 'react-icons/md';

class ContactPage extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Hero title={this.props.title} />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <a href="mailto:manovakcoding@gmail.com"><MdEmail /> manovakcoding@gmail.com</a>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                    <Form.Control id="full-name" name="user_name" type="text" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        )
    }
}

export default ContactPage;