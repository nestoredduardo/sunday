interface TaskProps {
  task: TTask
  types: TTaskType[]
}

const Task = ({ task, types }: TaskProps) => {
  const type = types.find((type) => type.id === task.typeId)
  const textColor = 'text-' + type.color + '-500'
  const bgColor = 'bg-' + type.color + '-100'

  return (
    <li
      className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
      draggable="true"
    >
      <span
        className={`flex items-center h-6 px-3 text-xs font-semibold rounded-full ${textColor} ${bgColor}`}
      >
        {type.name}
      </span>
      <h4 className="mt-3 text-sm font-medium">{task.content} </h4>
    </li>
  )
}

export default Task
