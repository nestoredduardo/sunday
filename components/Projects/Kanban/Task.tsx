import { Draggable } from 'react-beautiful-dnd'

interface TaskProps {
  task: TTask
  types: TTaskType[]
  index: number
}

const Task = ({ task, types, index }: TaskProps) => {
  const type = types.find((type) => type.id === task.typeId)
  const textColor = 'text-' + type.color + '-500'
  const bgColor = 'bg-' + type.color + '-100'

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span
            className={`flex items-center h-6 px-3 text-xs font-semibold rounded-full ${textColor} ${bgColor}`}
          >
            {type.name}
          </span>
          <h4 className="mt-3 text-sm font-medium">{task.content} </h4>
        </li>
      )}
    </Draggable>
  )
}

export default Task
