import BEMHelper from "react-bem-helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('landingPage');
    return(
        <div {...classes()}>
            <div {...classes('cards')}>
                <div {...classes('projects-link')}>
                    <p {...classes('content-header')}>
                        Projects
                    </p>
                    <FontAwesomeIcon {...classes('arrow')} icon={faArrowUp} 
                        path="fill=black"
                    />
                </div>
                <div {...classes('contact-card')}>
                    <div {...classes('person-info')}>
                        <p {...classes('contact-name')}>Jenner Thomas</p>
                        <p {...classes('contact-position')}>FrondEnd Dev</p>
                    </div>
                    <div {...classes('contact-info')}>
                        <p {...classes('contact-content')}>jenner.e.thomas@gmail.com</p>
                        <p {...classes('contact-content')}>Social Links</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;