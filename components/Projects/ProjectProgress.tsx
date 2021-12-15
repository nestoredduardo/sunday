import { connect, useSelector } from 'react-redux'

import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/AddBox'

import { showModal } from '@modalActions'
import { selectSelectedProject } from '@utils/ProjectsSelectors'

const ProjectProgress = ({ showModal }) => {
  const selectedProject = useSelector(selectSelectedProject)

  return (
    <section className="mt-3">
      <div className="flex">
        <ul className="hidden overflow-x-auto gap-2 items-center">
          <li className="flex items-center h-6 px-3 text-xs font-semibold rounded-full text-pink-500 bg-pink-100">
            Design
          </li>
          <li className="flex items-center h-6 px-3 text-xs font-semibold rounded-full text-green-500 bg-green-100">
            Development
          </li>
          <li className="flex items-center h-6 px-3 text-xs font-semibold rounded-full text-blue-500 bg-blue-100">
            Data
          </li>
          <li className="flex items-center h-6 px-3 text-xs font-semibold rounded-full text-indigo-500 bg-indigo-100">
            Planning
          </li>
          <li className="flex items-center h-6 px-3 text-xs font-semibold rounded-full text-purple-500 bg-purple-100">
            Testing
          </li>
          <li className="flex items-center h-6 px-3 text-xs font-semibold rounded-full text-yellow-500 bg-yellow-100">
            Launch
          </li>
          <li className="flex items-center h-6 px-3 text-xs font-semibold rounded-full text-red-500 bg-red-100">
            Marketing
          </li>
        </ul>
        {/*Tailwind need the colors */}
        <ul className="flex overflow-x-auto gap-2 items-center">
          {selectedProject.types.map((type) => {
            return (
              <li
                className={`flex items-center text-center h-6 px-3 text-xs font-semibold rounded-full text-${type.color}-500 bg-${type.color}-100`}
              >
                {type.name}
              </li>
            )
          })}
        </ul>
        <IconButton
          color="primary"
          onClick={() => showModal('addType')}
          className="ml-auto"
        >
          <AddBoxIcon />
        </IconButton>
      </div>
    </section>
  )
}

const mapDispatchToProps = {
  showModal,
}

export default connect(null, mapDispatchToProps)(ProjectProgress)
