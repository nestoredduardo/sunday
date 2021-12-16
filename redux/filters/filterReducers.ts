import { FILTER_TASK_TYPES } from './filterTypes'

const initialState = {
  taskType: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TASK_TYPES:
      return { ...state, taskType: action.payload }
    default:
      return state
  }
}

export default reducer
