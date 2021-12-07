import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/AddBox'

const ProjectProgress = () => {
  return (
    <section className="mt-3">
      <div className="flex">
        <ul className="flex overflow-x-auto"></ul>
        <IconButton color="primary">
          <AddBoxIcon />
        </IconButton>
      </div>
    </section>
  )
}

export default ProjectProgress
