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

    const start = selectedProject.columns.find(
      (column) => column.id === source.droppableId
    )
    const finish = selectedProject.columns.find(
      (column) => column.id === destination.droppableId
    )

    if (start === finish) {
      const newTaskIds = start.taskIds
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      updateColumn(newColumn)
      return
    }

    //one column to another
    const startTaskIds = start.taskIds
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }
    updateColumn(newStart)

    const finishTaskIds = finish.taskIds
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }
    updateColumn(newFinish)
  }

  return (
    <section className="p-6 kanban-bg flex overflow-x-auto gap-6 justify-center">
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
