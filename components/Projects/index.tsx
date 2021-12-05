import ProjectInfo from './ProjectInfo'
import ProjectsNav from './ProjectsNav'
import Kanban from './Kanban'

const Projects = () => {
  return (
    <main className="mb-14">
      <ProjectsNav />
      <ProjectInfo />
      <Kanban />
    </main>
  )
}

export default Projects
