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
                <Link aria-label="navigate to projects browse page" data-testid="projectsBrowseLink-card" to="projects" {...classes('projects-link')} style={{backgroundColor: cardColor}}>
                        <p {...classes('content-header')}>
                            Projects
                        </p>
                        <FontAwesomeIcon {...classes('arrow')} icon={faArrowUp}
                            path="fill=black"
                        />
                </Link>
                <div data-testid="contactInfo-card" {...classes('contact-card')}>
                    <div {...classes('person-info')}>
                        <p {...classes('contact-name')}>Jenner Thomas</p>
                        <p {...classes('contact-position')}>QA and Developer</p>
                    </div>
                    <div {...classes('contact-info')}>
                        <p {...classes('contact-content')}>jenner.e.thomas@gmail.com</p>
                        <div {...classes('socials')}>
                            <a data-testid="linkedIn-link" href="https://www.linkedin.com/in/jenner-thomas" aria-label="navigate to my linked in page"><FontAwesomeIcon {...classes('social-icons linkedin')} icon={faLinkedin} /></a>
                            <a data-testid="gitHub-link" href="https://github.com/jwinnfeild2517" aria-label="navigate to my git hub page"><FontAwesomeIcon {...classes('social-icons git')} icon={faGitSquare}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;