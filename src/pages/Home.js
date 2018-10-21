import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import posed from 'react-pose';

import ProfilePic from '../images/ProfilePic.jpg';

import './Home.css';

const AnimationContainer = posed.div({
    visible: { opacity: 1, transition: { duration: 1000 } },
    hidden: { opacity: 0 }
});

const LinkedinButton = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.2 }
});

const GithubButton = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.2 }
});

const FacebookButton = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.2 }
});

const EmailButton = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.2 }
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isVisible: false, 
            hovering: false,
            hoveringLinkedin: false,
            hoveringGithub: false,
            hoveringFacebook: false,
            hoveringEmail: false
        };
    }

    componentDidMount() {
        //this.setState({ isVisible: true });
    }

    handleImageLoaded() {
        this.setState({ isVisible: true });
    }
  
    render() {

        return (
            <AnimationContainer pose={this.state.isVisible ? 'visible' : 'hidden'}>
            <div className="home-container">
                <div>
                    <img className="profile-pic" src={ProfilePic} onLoad={this.handleImageLoaded.bind(this)} />
                </div>
                <div>
                    <h1>Sam Salvail</h1>
                </div>
                <div>
                    <h2>Front End Engineer</h2>
                </div>
                <div className="social-buttons">
                    <Link to="https://www.linkedin.com/in/ssalvail/" target="_blank" className="linkedin-button">
                    <LinkedinButton
                        pose={this.state.hoveringLinkedin ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringLinkedin: true })}
                        onMouseLeave={() => this.setState({ hoveringLinkedin: false })}>
                        <i className="fab fa-linkedin-in"></i>
                    </LinkedinButton>
                    </Link>
                    <Link to="https://github.com/TheOGPoobah/" target="_blank" className="github-button">
                    <GithubButton
                        pose={this.state.hoveringGithub ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringGithub: true })}
                        onMouseLeave={() => this.setState({ hoveringGithub: false })}>
                        <i className="fab fa-github"></i>
                    </GithubButton>
                    </Link>
                    <Link to="https://www.facebook.com/SamSalvail/" target="_blank" className="facebook-button">
                    <FacebookButton
                        pose={this.state.hoveringFacebook ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringFacebook: true })}
                        onMouseLeave={() => this.setState({ hoveringFacebook: false })}>
                        <i className="fab fa-facebook"></i>
                    </FacebookButton>
                    </Link>
                    <a href="mailto:ssalvail39@gmail.com" target="_blank" className="email-button">
                    <EmailButton
                        pose={this.state.hoveringEmail ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringEmail: true })}
                        onMouseLeave={() => this.setState({ hoveringEmail: false })}>
                        <i className="far fa-envelope"></i>
                    </EmailButton>
                    </a>
                </div>
                <hr className="hr" />
                <div className="footer">
                    <p>© 2018. Sam Salvail.</p>
                    <div>
                        <span>Built with React </span><i className="fab fa-react fa-lg react-spinner"></i>
                    </div>
                </div>
            </div>
            </AnimationContainer>
        );
    }
}

export default Home;

