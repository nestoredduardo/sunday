import Image from 'next/image'
import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/AddBox'

import milestoneImage from '@images/milestone.svg'

const ProjectProgress = () => {
  return (
    <section className="mt-3">
      <div className="flex">
        <ul className="flex overflow-x-auto">
          <li className="relative flex items-center justify-center">
            <div className="w-24">
              <Image
                src={milestoneImage}
                className="clip-me"
                layout="responsive"
              />
            </div>
            <p className="absolute text-sm">✅ Diseño</p>
          </li>
          <li className="relative flex items-center justify-center">
            <div className="w-24">
              <Image
                src={milestoneImage}
                className="clip-me"
                layout="responsive"
              />
            </div>
            <p className="absolute text-sm">✅ Diseño</p>
          </li>
          <li className="relative flex items-center justify-center">
            <div className="w-24">
              <Image
                src={milestoneImage}
                className="clip-me"
                layout="responsive"
              />
            </div>
            <p className="absolute text-sm">✅ Diseño</p>
          </li>
          <li className="relative flex items-center justify-center">
            <div className="w-24">
              <Image
                src={milestoneImage}
                className="clip-me"
                layout="responsive"
              />
            </div>
            <p className="absolute text-sm">✅ Diseño</p>
          </li>
          <li className="relative flex items-center justify-center">
            <div className="w-24">
              <Image
                src={milestoneImage}
                className="clip-me"
                layout="responsive"
              />
            </div>
            <p className="absolute text-sm">✅ Diseño</p>
          </li>
        </ul>
        <IconButton color="primary">
          <AddBoxIcon />
        </IconButton>
      </div>
    </section>
  )
}

export default ProjectProgress
