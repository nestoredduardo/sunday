import { connect } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'

import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import Task from './Task'

import { showModalExtra } from '@modalActions'

interface TaskListProps {
  column: TColumn
  project: TProject
  taskFilter: number
  showModalExtra: (modalName: string, extraData: object) => void
}

const TaskList = ({
  column,
  project,
  taskFilter,
  showModalExtra,
}: TaskListProps) => {
  return (
    <section className="flex flex-col flex-shrink-0 w-72">
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold text-gray-800">
          {column.title}
        </span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          {column.taskIds.length}
        </span>
        <IconButton
          color="primary"
          className="ml-auto"
          onClick={() => showModalExtra('newTask', { columnId: column.id })}
        >
          <AddIcon />
        </IconButton>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul
            className="flex flex-col pb-2 overflow-auto flex-grow"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.taskIds.map((taskId, index) => {
              let task = project.taskList.find(
                (task) => parseInt(task.id) == taskId
              )

              if (taskFilter !== 0) {
                if (task.typeId == taskFilter) {
                  return (
                    <Task
                      key={taskId}
                      task={task}
                      types={project.types}
                      index={index}
                    />
                  )
                }
              } else {
                return (
                  <Task
                    key={taskId}
                    task={task}
                    types={project.types}
                    index={index}
                  />
                )
              }
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </section>
  )
}

const mapStateToProps = ({ filters }) => ({
  taskFilter: filters.taskType,
})

const mapDispatchToProps = {
  showModalExtra,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
