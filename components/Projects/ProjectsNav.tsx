import { useSelector, connect } from 'react-redux'

import { Button } from '@mui/material'
import { styled } from '@mui/system'

import type { RootState } from '@store'
import { selectProject } from '@projectActions'

const LaunchButton = styled(Button)(({ theme }) => ({
  color: '#E858FF',
  backgroundColor: '#E858FF',
}))

const ProjectsNav = ({ selectProject }) => {
  const projects = useSelector((state: RootState) => state.projects)

  return (
    <section className="border-b-4 border-gray-border">
      <h1 className="mx-6 text-3xl font-medium">Tus Proyectos 😎</h1>
      <section className="m-6 flex">
        <div className="flex gap-2 overflow-x-auto">
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
        <LaunchButton className="ml-auto">🚀</LaunchButton>
      </section>
    </section>
  )
}

const mapDispatchToProps = {
  selectProject,
}

export default connect(null, mapDispatchToProps)(ProjectsNav)
