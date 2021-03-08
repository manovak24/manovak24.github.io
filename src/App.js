import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './compontents/footer';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import ProjectsPage from './pages/projects-page';
import ContactPage from './pages/contact-page';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mark Novak',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Welcome!',
        subTitle: 'Web Devloper based in the North Woods'
      },
      projects: {
        title: 'Projects & Skills'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Connect!'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar expand="sm" bg="light">
            <Navbar.Brand>
              <Link className="nav-brand" to="/">{this.state.title}</Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        </Container>
      </Router>
    );
  }
  
}

export default App;
