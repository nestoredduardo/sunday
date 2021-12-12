import { SHOW_MODAL, HIDE_MODAL } from './modalTypes'

const initialState = {
  show: false,
  modalName: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true, modalName: action.payload }
    case HIDE_MODAL:
      return { ...state, show: false, modalName: '' }
    default:
      return state
  }
}

export default reducer
