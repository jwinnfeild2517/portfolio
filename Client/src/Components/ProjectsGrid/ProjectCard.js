import { Link } from "react-router-dom";
import randomColor from "randomcolor";

const projectCard = (props) => {
  const color = randomColor()
  // import imageName from '../Assets/images/IMG_2426.jpg'
  if (props.external_link === true) {
    return(
      <a href={props.link} className="projects__items projects__grid-item" target="_blank" rel="noreferrer" style={{backgroundColor: color}}>
        <img src={props.image} alt="open project"></img>
        <h3 className="projects__grid-item-name">{props.name}</h3>
        <p className="project__grid-description">{props.description}</p>
      </a>
    )
  }else {
    return(
      <Link to={props.link} className="projects__items projects__grid-item" style={{backgroundColor: color}}>
        <img src={`/images/${props.image}.jpeg`} alt="open project"></img>
        <h3 className="projects__grid-item-name">{props.name}</h3>
        <p className="project__grid-description">{props.description}</p>
      </Link>
    )
  }
}

export default projectCard;