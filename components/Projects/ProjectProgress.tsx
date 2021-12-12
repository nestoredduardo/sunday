import IconButton from '@mui/material/IconButton'
import AddBoxIcon from '@mui/icons-material/AddBox'

const ProjectProgress = () => {
  return (
    <section className="mt-3">
      <div className="flex">
        <ul className="flex overflow-x-auto gap-2 items-center">
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
        <IconButton color="primary">
          <AddBoxIcon />
        </IconButton>
      </div>
    </section>
  )
}

export default ProjectProgress
