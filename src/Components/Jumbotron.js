import BEMHelper from "react-bem-helper";
// import rain_drop from "../rain_drop.mp4"
import jumboImage from "../videoCover.png"

const Jumbotron = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('jumbotron');
    return(
        <div {...classes()}>
            <div {...classes('video-guard-rail')}></div>
            {/* <video width="320" height="240" autoPlay loop poster="../videoCover.png" src={rain_drop} type="video/mp4"> */}
            <img src={jumboImage} alt="rain-drop"/>
            {/* </video> */}
            <div {...classes('video-guard-rail')}></div> 
        </div>
    )
}

export default Jumbotron;