import { SHOW_MODAL, HIDE_MODAL, SHOW_MODAL_EXTRA } from './modalTypes'

const initialState = {
  show: false,
  modalName: '',
  extraData: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true, modalName: action.payload }
    case HIDE_MODAL:
      return { ...state, show: false, modalName: '', extraData: {} }
    case SHOW_MODAL_EXTRA:
      return {
        ...state,
        show: true,
        modalName: action.payload.modalName,
        extraData: action.payload.extraData,
      }
    default:
      return state
  }
}

export default reducer
