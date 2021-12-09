import { useSelector } from 'react-redux'
import {DragDropContext} from 'react-beautiful-dnd'

import TaskList from './TaskList'

const Kanban = () => {
  const projects = useSelector((state) => state)

  console.log(projects)

  return (
    <section className="p-6 kanban-bg flex overflow-x-auto gap-6">
      <TaskList />
      <TaskList />
      <TaskList />
    </section>
  )
}

export default Kanban
