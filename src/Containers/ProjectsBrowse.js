import BEMHelper from "react-bem-helper";
import { Link } from "react-router-dom";
import bookImage from "../Assets/images/booksearch.jpeg"
import magcollage from "../Assets/images/magcollage.jpeg"
import image3 from "../Assets/images/pexels-photo-2916450.jpeg"


const ProjectsBrowse = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('project');
    return(
        <div {...classes()}>
            <Link to="search"{...classes('items item-1')}>
                <img src={bookImage} alt="project tile"></img>
                <h3 {...classes('grid-item-name')}>Book Finder</h3>
            </Link>
            <Link to="collage" {...classes('items item-3')}>
                <img src={magcollage} alt="project tile"></img>
                <h3 {...classes('grid-item-name')}>Digital Collage</h3>
            </Link>
            <a href="https://project-suggest.herokuapp.com/" {...classes('items item-2')}>
                <img src={image3} alt="project tile"></img>
                <h3 {...classes('grid-item-name')}>Project Suggestions</h3>
            </a>
            <a href="https://github.com/jwinnfeild2517/bitcoin-price-notifier"{...classes('items item-4')}>
                <h3 {...classes('grid-item-name')}>BC Price</h3>
            </a>
            <a href="https://github.com/jwinnfeild2517/Trace_Weight" {...classes('items item-5')}>
                <h3 {...classes('grid-item-name')}>Trace Weight</h3>
            </a>
            <div {...classes('items item-6')}>

            </div>
        </div>
    )
}

export default ProjectsBrowse;