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
import ScrollToTop from './compontents/scroll';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mark Novak',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Skills & Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Welcome!',
        subTitle: 'Web Devloper based in the North Woods'
      },
      projects: {
        title: 'Skills & Projects'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Connect!'
      },
      navExpanded: false,
    }
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
        <Container className="p-0" fluid={true}>
          
          <Navbar expand="sm" className="nav-container" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
            <Navbar.Brand>
              <Link className="nav-brand" to="/">{this.state.title}</Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto" onClick={this.setNavClose}>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Skills & Projects</Link>
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
        </ScrollToTop>
      </Router>
    );
  }
  
}

export default App;
