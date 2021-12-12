import { useSelector, connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import { selectSelectedProject } from '@utils/ProjectsSelectors'
import { updateColumn } from '@projectActions'

import TaskList from './TaskList'

const Kanban = ({ updateColumn }) => {
  const selectedProject = useSelector(selectSelectedProject)

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.indes === source.index
    ) {
      return
    }

    const column = selectedProject.columns.find(
      (column) => column.id === source.droppableId
    )
    const newTaskIds = column.taskIds
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    }

    updateColumn(newColumn)
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

const mapDispatchToProps = {
  updateColumn,
}

export default connect(null, mapDispatchToProps)(Kanban)
