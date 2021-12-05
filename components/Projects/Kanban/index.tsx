import TaskList from './TaskList'

const Kanban = () => {
  return (
    <section className="p-6 kanban-bg flex overflow-x-auto gap-6">
      <TaskList />
      <TaskList />
      <TaskList />
    </section>
  )
}

export default Kanban
