import BEMHelper from "react-bem-helper";

const About = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('about');
    return(
        <div {...classes()}>
            <div {...classes('content')}>
                <p {...classes('content-header')}>
                    ABOUT
                </p>
                <p {...classes('content-bio')}>Experinced Software QA analyst and freelance FrontEnd-Engineer, I am focused responsive and modern design while considering user experience.</p>
            </div>
            <div {...classes('contact')}>
                <p {...classes('contact-header')}>
                    CONTACT
                </p>
                <p {...classes('contact-content')}>Email: jenner.e.thomas@gmail.com</p>
            </div>
        </div>
    )
}

export default About;