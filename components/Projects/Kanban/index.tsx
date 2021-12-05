import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import Task from './Task'

const Kanban = () => {
  return (
    <section className="p-6 kanban-bg">
      <div className="flex flex-col flex-shrink-0 w-72">
        <div className="flex items-center flex-shrink-0 h-10 px-2">
          <span className="block text-sm font-semibold text-gray-800">
            Backlog
          </span>
          <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
            6
          </span>
          <IconButton color="primary" className="ml-auto">
            <AddIcon />
          </IconButton>
        </div>
        <section className="flex flex-col pb-2 overflow-auto">
          <Task />
        </section>
      </div>
    </section>
  )
}

export default Kanban
