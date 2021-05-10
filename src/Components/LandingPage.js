import BEMHelper from "react-bem-helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import randomColor from "randomcolor"


const LandingPage = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('landingPage');
    const cardColor = randomColor()
    return(
        <div {...classes()}>
            <div {...classes('cards')}>
                <Link to="projects" {...classes('projects-link')} style={{backgroundColor: cardColor}}>
                        <p {...classes('content-header')}>
                            Projects
                        </p>
                        <FontAwesomeIcon {...classes('arrow')} icon={faArrowUp}
                            path="fill=black"
                        />
                </Link>
                <div {...classes('contact-card')}>
                    <div {...classes('person-info')}>
                        <p {...classes('contact-name')}>Jenner Thomas</p>
                        <p {...classes('contact-position')}>QA and Developer</p>
                    </div>
                    <div {...classes('contact-info')}>
                        <p {...classes('contact-content')}>jenner.e.thomas@gmail.com</p>
                        <div {...classes('socials')}>
                            <a href="https://www.linkedin.com/in/jenner-thomas"><FontAwesomeIcon {...classes('social-icons linkedin')} icon={faLinkedin} /></a>
                            <a href="https://github.com/jwinnfeild2517"><FontAwesomeIcon {...classes('social-icons git')} icon={faGitSquare}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;