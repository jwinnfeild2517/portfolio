import React from "react";
import { Link } from "react-router-dom";
import randomColor from "randomcolor";


const ProjectCard = (props) => {
  const color = randomColor({
    count: 1,
    hue: 'blue',
    lumonsity: 'light'
 });


 let projectLink;
 if (props.external_link === true) {
   projectLink = <a href={props.link} aria-label={`navigate to the ${props.name} project`} className="project-link">Open Project</a>
 }else {
   projectLink = <Link to={props.link} aria-label={`navigate to the ${props.name} project`} className='project-link' >Open Project</Link>
 }
  return(
    <div style={{backgroundColor: color}} href={props.link} className="projects__items projects__grid-item" target="_blank" rel="noreferrer">
      <h3 className="projects__grid-item-name">{props.name}</h3>
      <p className="project__grid-description">{props.description}</p>
      {projectLink}
    </div>
  )
}

export default ProjectCard;