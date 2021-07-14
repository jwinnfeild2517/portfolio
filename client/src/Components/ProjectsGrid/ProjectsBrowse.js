import projectsjson from "../../data/projects.json"
import ProjectCard from "./ProjectCard"
import WeatherCard from "./WeatherCard"

const ProjectsBrowse = () => (
    <div className="projects">
        <WeatherCard />
        {projectsjson.map((project) => {
            return(
                <ProjectCard
                name={project.name}
                link={project.link}
                description={project.description}
                external_link={project.external_link}
                />
            )
        })}
    </div>
)

export default ProjectsBrowse;