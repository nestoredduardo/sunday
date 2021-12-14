import {
  UPDATE_COLUMN,
  SELECT_PROJECT,
  CREATE_PROJECT,
  ADD_TYPE,
} from './projectsType'

const updateColumn = (newColumn) => (dispatch) => {
  dispatch({
    type: UPDATE_COLUMN,
    payload: newColumn,
  })
}

const selectProject = (name) => (dispatch) => {
  dispatch({
    type: SELECT_PROJECT,
    payload: name,
  })
}

const createProject = (name, aim) => (dispatch) => {
  const newProject = {
    isSelected: false, //default
    name: name, //user
    aim: aim, //user
    types: [
      //default
      { id: 1, name: 'Design', color: 'pink' },
      { id: 2, name: 'Development', color: 'green' },
      { id: 3, name: 'Data', color: 'blue' },
      { id: 4, name: 'Planning', color: 'indigo' },
      { id: 5, name: 'Testing', color: 'purple' },
      { id: 6, name: 'Launch', color: 'yellow' },
      { id: 7, name: 'Marketing', color: 'red' },
    ],
    taskList: [
      //default
      { id: 'task-1', content: 'Añadir tareas a mi proyecto', typeId: 1 },
    ],
    columns: [
      //default
      {
        id: 'backlog',
        title: 'Backlog',
        taskIds: ['task-1'],
      },
      {
        id: 'todo',
        title: 'Doing',
        taskIds: [],
      },
      {
        id: 'done',
        title: 'Done',
        taskIds: [],
      },
    ],
    columnOrder: ['backlog', 'todo', 'done'], //default
  }

  dispatch({
    type: CREATE_PROJECT,
    payload: newProject,
  })
}

const addType = (name, color) => (dispatch) => {
  console.log(name, color)
}

export { updateColumn, selectProject, createProject, addType }
