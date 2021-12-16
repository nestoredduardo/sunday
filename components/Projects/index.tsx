import ProjectInfo from './ProjectInfo'
import ProjectsNav from './ProjectsNav'
import Kanban from './Kanban'

const Projects = () => {
  return (
    <main className="mb-14 lg:col-start-2 lg:col-span-3 lg:row-start-1 lg:row-end-6 lg:mb-0 lg:border-l-2">
      <ProjectsNav />
      <ProjectInfo />
      <Kanban />
    </main>
  )
}

export default Projects
