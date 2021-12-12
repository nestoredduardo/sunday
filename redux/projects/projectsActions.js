import { UPDATE_COLUMN } from './projectsType'

const updateColumn = (newColumn) => (dispatch) => {
  dispatch({
    type: UPDATE_COLUMN,
    payload: newColumn,
  })
}

export { updateColumn }
