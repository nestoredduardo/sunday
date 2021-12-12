import { UPDATE_COLUMN, SELECT_PROJECT } from './projectsType'

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

export { updateColumn, selectProject }
