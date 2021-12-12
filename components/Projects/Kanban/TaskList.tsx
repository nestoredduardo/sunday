import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { Droppable } from 'react-beautiful-dnd'

import Task from './Task'

interface TaskListProps {
  column: TColumn
  project: TProject
}

const TaskList = ({ column, project }: TaskListProps) => {
  return (
    <section className="flex flex-col flex-shrink-0 w-72">
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold text-gray-800">
          {column.title}
        </span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          {column.taskIds.length}
        </span>
        <IconButton color="primary" className="ml-auto">
          <AddIcon />
        </IconButton>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul
            className="flex flex-col pb-2 overflow-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.taskIds.map((taskId, index) => {
              const task = project.taskList.find((task) => task.id == taskId)
              return (
                <Task
                  key={taskId}
                  task={task}
                  types={project.types}
                  index={index}
                />
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </section>
  )
}

export default TaskList
