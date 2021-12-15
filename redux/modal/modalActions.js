import { SHOW_MODAL, HIDE_MODAL, SHOW_MODAL_EXTRA } from './modalTypes'

const showModal = (name) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: name,
  })
}

const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  })
}

const showModalExtra = (modalName, extraData) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL_EXTRA,
    payload: {
      modalName,
      extraData,
    },
  })
}

export { showModal, hideModal, showModalExtra }
