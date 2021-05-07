import BEMHelper from "react-bem-helper";

const Footer = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('footer');
    return(
        <div {...classes()}>
            <div {...classes('color-overlay')}></div>
            <p {...classes('copyright')}>
                &copy; Copyright <span id="copyright-date"></span>, 
                Jenner Thomas. All Rights Reserved.
            </p>
            <a {...classes('github-button')} href="https://github.com/jwinnfeild2517">Github</a>
        </div>
    )
}

export default Footer;