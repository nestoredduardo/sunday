import {
  UPDATE_COLUMN,
  SELECT_PROJECT,
  CREATE_PROJECT,
  ADD_TYPE,
  NEW_TASK,
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
    ],
    taskList: [
      //default
      { id: '1', content: 'Añadir tareas a mi proyecto', typeId: 1 },
    ],
    columns: [
      //default
      {
        id: 'backlog',
        title: 'Backlog',
        taskIds: [1],
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
  dispatch({
    type: ADD_TYPE,
    payload: { name, color },
  })
}

const newTask = (taskData, columnId) => (dispatch) => {
  dispatch({
    type: NEW_TASK,
    payload: { taskData, columnId },
  })
}

export { updateColumn, selectProject, createProject, addType, newTask }
