import React, {Component} from 'react';
import posed from 'react-pose';

import ProfilePic from '../images/ProfilePic.jpg';
import GrettaLogo from '../images/gretta_logo.svg';
import ZengotLogo from '../images/zengot_logo.png';

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

const GrettaButton = posed.div({
    idle: { scale: 1 },
    hovered: { scale: 1.2 }
});

const ZengotButton = posed.div({
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
            hoveringEmail: false,
            hoveringGretta: false,
            hoveringZengot: false
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
                    <img className="profile-pic" src={ProfilePic} onLoad={this.handleImageLoaded.bind(this)} alt="headshot" />
                </div>
                <div>
                    <h1>Sam Salvail</h1>
                </div>
                <div>
                    <h2>Front End Engineer</h2>
                </div>
                <div className="social-buttons">
                    <a href="https://www.linkedin.com/in/ssalvail/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
                    <LinkedinButton
                        pose={this.state.hoveringLinkedin ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringLinkedin: true })}
                        onMouseLeave={() => this.setState({ hoveringLinkedin: false })}>
                        <i className="fab fa-linkedin-in"></i>
                    </LinkedinButton>
                    </a>
                    <a href="https://github.com/ssalvail/" target="_blank" rel="noopener noreferrer" className="github-button">
                    <GithubButton
                        pose={this.state.hoveringGithub ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringGithub: true })}
                        onMouseLeave={() => this.setState({ hoveringGithub: false })}>
                        <i className="fab fa-github"></i>
                    </GithubButton>
                    </a>
                    <a href="https://www.facebook.com/SamSalvail/" target="_blank" rel="noopener noreferrer" className="facebook-button">
                    <FacebookButton
                        pose={this.state.hoveringFacebook ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringFacebook: true })}
                        onMouseLeave={() => this.setState({ hoveringFacebook: false })}>
                        <i className="fab fa-facebook"></i>
                    </FacebookButton>
                    </a>
                    <a href="mailto:ssalvail39@gmail.com" target="_blank" rel="noopener noreferrer" className="email-button">
                    <EmailButton
                        pose={this.state.hoveringEmail ? "hovered" : "idle"}
                        onMouseEnter={() => this.setState({ hoveringEmail: true })}
                        onMouseLeave={() => this.setState({ hoveringEmail: false })}>
                        <i className="far fa-envelope"></i>
                    </EmailButton>
                    </a>
                </div>
                <hr className="hr" />
                <div>
                    <h3 className="header-center">Companies I Have Worked For</h3>
                    <div className="companies">
                        <a href="https://gretta.com/" target="_blank" rel="noopener noreferrer" className="no-decoration">
                            <GrettaButton className="gretta"
                                pose={this.state.hoveringGretta ? "hovered" : "idle"}
                                onMouseEnter={() => this.setState({ hoveringGretta: true })}
                                onMouseLeave={() => this.setState({ hoveringGretta: false })}>
                                <img className="gretta-img" src={GrettaLogo} alt="gretta logo"/>
                                <div>gretta</div>
                            </GrettaButton>
                        </a>
                        <a href="https://www.zengot.com/" target="_blank" rel="noopener noreferrer" className="no-decoration">
                            <ZengotButton className="zengot"
                                pose={this.state.hoveringZengot ? "hovered" : "idle"}
                                onMouseEnter={() => this.setState({ hoveringZengot: true })}
                                onMouseLeave={() => this.setState({ hoveringZengot: false })}>
                                <img className="zengot-img" src={ZengotLogo} alt="zenGOT logo"/>
                            </ZengotButton>
                        </a>
                    </div>
                </div>
                <hr className="hr" />
                <div>
                    <h3 className="header-center">Projects and Events</h3>
                    <div className="projects">
                        <div className="project-items">
                            <h4>HoloJam - March 2016</h4>
                            <ul>
                                <li>Created a proof of concept demo for the <a href="https://hplustech.com/" target="_blank" rel="noopener noreferrer">Holus</a></li>
                                <li>Tied for first place prize</li>
                                <li><a href="https://vimeo.com/170048050" target="_blank" rel="noopener noreferrer">HoloJam video</a></li>
                            </ul>
                        </div>
                        <div className="project-items">
                            <h4>NWHacks - February 2016</h4>
                            <ul>
                                <li>Created a <a href="http://devpost.com/software/liveinlife-jz1rfv" target="_blank" rel="noopener noreferrer">web and mobile app</a> with a team of five in 24 hours</li>
                                <li>Placed in the top six teams out of over 90 submissions</li>
                            </ul>
                        </div>
                        <div className="project-items">
                            <h4>Global Game Jam 2016 - January 2016</h4>
                            <ul>
                                <li>Created a <a href="http://globalgamejam.org/2016/games/blood-moon-0" target="_blank" rel="noopener noreferrer">2D platformer</a> with a team of three in 48 hours</li>
                            </ul>
                        </div>
                    </div>
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

