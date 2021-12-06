import TaskList from './TaskList'
import { useSelector } from 'react-redux'

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
