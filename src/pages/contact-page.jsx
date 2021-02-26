import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Hero from '../compontents/hero.jsx';

import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.setState({
            disabled: true
        });

        emailjs.sendForm('gmail', 'testing', event.target, 'user_rQF8cs4fYnfBs2O7qJ0gs')
            .then(res => {
                Swal.fire({
                    title: 'Email Successfully Sent',
                    icon: 'success'
                })
            })
            .catch(err => {
                Swal.fire({
                    title: 'Email Failed to Send',
                    icon: 'error'
                })
                console.error('Email Error:', err)
            })
    
    }
    
    render() {
        return(
            <div>
                <div>
                    <Hero title={this.props.title} />
                </div>

                <Container>
                    <Row>
                        <Col xs="auto" md={4}>
                            <p>Let's connect! Please feel free to send me a direct email or via my social media accounts. Thanks!</p>
                            <a href="mailto:manovakcoding@gmail.com" ><MdEmail /> manovakcoding@gmail.com</a>
                        </Col>
                        <Col xs={12} md={8}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                    <Form.Control id="full-name" name="user_name" type="text" value={this.state.name} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control id="email" name="user_email" type="email" value={this.state.email} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label htmlFor="message">Message</Form.Label>
                                    <Form.Control id="message" name="message" as="textarea" row="3" value={this.state.message} onChange={this.handleChange} />
                                </Form.Group>

                                <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>Send</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                
            </div>

        )
    }
}

export default ContactPage;