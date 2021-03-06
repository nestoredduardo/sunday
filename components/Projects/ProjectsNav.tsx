import { useSelector, connect } from 'react-redux'

import { Button } from '@mui/material'
import { styled } from '@mui/system'

import type { RootState } from '@store'
import { selectProject } from '@projectActions'
import { showModal } from '@modalActions'

const LaunchButton = styled(Button)(({ theme }) => ({
  color: '#E858FF',
  backgroundColor: '#E858FF',
}))

const ProjectsNav = ({ selectProject, showModal }) => {
  const projects = useSelector((state: RootState) => state.projects)

  return (
    <section className="border-b-4 border-gray-border">
      <div className="lg:flex lg:mt-16">
        <h1 className="mx-6 text-3xl font-medium md:mx-10 lg:text-4xl">
          Tus Proyectos 😎
        </h1>
      </div>
      <section className="m-6 flex md:mx-10">
        <div className="flex gap-2 overflow-x-auto mr-2">
          {projects.map((project, index) => {
            return (
              <Button
                key={index}
                style={{ textTransform: 'none' }}
                variant={project['isSelected'] ? 'contained' : 'outlined'}
                onClick={() => selectProject(project.name)}
              >
                {project['name']}
              </Button>
            )
          })}
        </div>
        <LaunchButton
          className="ml-auto"
          onClick={() => showModal('newProject')}
        >
          🚀
        </LaunchButton>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  selectProject,
  showModal,
}

export default connect(null, mapDispatchToProps)(ProjectsNav)
