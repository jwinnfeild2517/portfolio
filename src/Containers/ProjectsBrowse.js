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
            <div {...classes('items item-2')}>
                <img src={image3} alt="project tile"></img>
            </div>
            <div {...classes('items item-4')}>

            </div>
            <div {...classes('items item-5')}>

            </div>
            <div {...classes('items item-6')}>

            </div>
        </div>
    )
}

export default ProjectsBrowse;