import ProjectInfo from './ProjectInfo'
import ProjectsNav from './ProjectsNav'
import Kanban from './Kanban'

const Projects = () => {
  return (
    <main className="mb-14 lg:row-start-1 lg:row-end-6 lg:mb-0">
      <ProjectsNav />
      <ProjectInfo />
      <Kanban />
    </main>
  )
}

export default Projects
