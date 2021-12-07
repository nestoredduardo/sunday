import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/AddBox'

import milestoneImage from '@images/milestone.svg'

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
