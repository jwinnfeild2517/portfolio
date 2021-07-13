import BEMHelper from "react-bem-helper";
import picture from '../Assets/images/profilepic.jpg'

const About = () => {

    // allows us to generate class names using nav
    const classes = new BEMHelper('about');
    return(
        <div {...classes()}>
            <div {...classes("jumbo")}><h3>About Me</h3><h1>About</h1></div>
            <div {...classes('personal')}>
                <img data-testid='profile-pic' {...classes('profile-pic')} src={picture} alt="profile"></img>
                <div {...classes('bio')}>

                    <p data-testid="bio">
                        <strong>Hello, I'm Jenner,</strong> a QA Analyst and Developer from Boston.<br></br><br></br>
                        Since 2019, I've been a QA Analyst at Americas's Test Kitchen,  a half-hour long cooking show broadcast by PBS and other platforms.
                        In this role, I work directly with our small team of developers to help provide an enjoyable user experience on our online platforms.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;