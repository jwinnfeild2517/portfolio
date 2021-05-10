import BEMHelper from "react-bem-helper";
import { Link } from "react-router-dom";

const ProjectsBrowse = () => {
    // allows us to generate class names using nav
    const classes = new BEMHelper('project');
    return(
        <div {...classes()}>
            <Link to="search"{...classes('items item-1')}>
                <img src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="project tile"></img>
                <h3 {...classes('grid-item-name')}>Book Finder</h3>
            </Link>
            <Link to="collage" {...classes('items item-3')}>
                <img src="https://images.pexels.com/photos/4965832/pexels-photo-4965832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="project tile"></img>
                <h3 {...classes('grid-item-name')}>Digital Collage</h3>
            </Link>
            <div {...classes('items item-2')}>
                <img src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="project tile"></img>
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