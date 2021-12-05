const Task = () => {
  return (
    <li
      className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
      draggable="true"
    >
      <span className="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
        Design
      </span>
      <h4 className="mt-3 text-sm font-medium">
        This is the title of the card for the thing that needs to be done.
      </h4>
    </li>
  )
}

export default Task
