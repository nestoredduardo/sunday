import { Button } from '@mui/material'
import { styled } from '@mui/system'
import { purple } from '@mui/material/colors'

const LaunchButton = styled(Button)(({ theme }) => ({
  color: '#E858FF',
  backgroundColor: '#E858FF',
  '&:hover': {
    backgroundColor: '#B946CC',
  },
}))

const ProjectsNav = () => {
  return (
    <section className="border-b-4 border-gray-border">
      <h1 className="m-6 text-3xl font-medium">Tus Proyectos 😎</h1>
      <section className="m-6 flex">
        <div className="flex gap-2">
          <Button variant="contained" style={{ textTransform: 'none' }}>
            Konto
          </Button>
          <Button variant="outlined" style={{ textTransform: 'none' }}>
            Deku
          </Button>
        </div>
        <LaunchButton className="ml-auto">🚀</LaunchButton>
      </section>
    </section>
  )
}

export default ProjectsNav
