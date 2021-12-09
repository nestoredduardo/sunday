import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import TaskList from './TaskList'

import { selectSelectedProject } from '@utils/ProjectsSelectors'

const Kanban = () => {
  const selectedProject = useSelector(selectSelectedProject)

  const onDragEnd = () => {
    //TODO:
  }

  return (
    <section className="p-6 kanban-bg flex overflow-x-auto gap-6">
      <DragDropContext onDragEnd={onDragEnd}>
        {selectedProject.columns.map((column) => {
          return (
            <TaskList
              key={column.id}
              column={column}
              project={selectedProject}
            />
          )
        })}
      </DragDropContext>
    </section>
  )
}

export default Kanban
