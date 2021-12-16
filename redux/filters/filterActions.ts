import { FILTER_TASK_TYPES } from './filterTypes'

type TfilterByTaskType = {
  typeId: number
}

const filterByTaskType =
  ({ typeId }: TfilterByTaskType) =>
  (dispatch) => {
    dispatch({
      type: FILTER_TASK_TYPES,
      payload: typeId,
    })
  }

export { filterByTaskType }
