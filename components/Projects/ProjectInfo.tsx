import ProjectOverview from './ProjectOverview'
import ProjectProgress from './ProjectProgress'

const ProjectInfo = () => {
  return (
    <section className="p-6 flex flex-col md:px-10">
      <ProjectOverview />
      <ProjectProgress />
    </section>
  )
}

export default ProjectInfo
