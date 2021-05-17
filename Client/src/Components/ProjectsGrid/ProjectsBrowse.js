import projectsjson from "../../data/projects.json"
import ProjectCard from "./ProjectCard"
import WeatherCard from "./WeatherCard"

const ProjectsBrowse = () => {
    return(
        <div className="projects">
            <WeatherCard />
            {projectsjson.map((project) => {
                return(
                    <ProjectCard
                    name={project.name}
                    link={project.link}
                    image={project.image}
                    />
                )
            })}
        </div>
    )
}

export default ProjectsBrowse;