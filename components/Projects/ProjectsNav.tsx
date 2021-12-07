import { useSelector } from 'react-redux'
import type { RootState } from '@store'

import { Button } from '@mui/material'
import { styled } from '@mui/system'

const LaunchButton = styled(Button)(({ theme }) => ({
  color: '#E858FF',
  backgroundColor: '#E858FF',
  '&:hover': {
    backgroundColor: '#B946CC',
  },
}))

const ProjectsNav = () => {
  const projects = useSelector((state: RootState) => state.projects)

  return (
    <section className="border-b-4 border-gray-border">
      <h1 className="m-6 text-3xl font-medium">Tus Proyectos 😎</h1>
      <section className="m-6 flex">
        <div className="flex gap-2 overflow-x-auto">
          {projects.map((project, index) => {
            return (
              <Button
                key={index}
                style={{ textTransform: 'none' }}
                variant={project['isSelected'] ? 'contained' : 'outlined'}
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

export default ProjectsNav
